import UpdateFunction from "./update";
import con from "@/lib/conn";
import FWM from "@/models/FarmerWelfare";
import WWM from "@/models/WomenWelfare";
import SEM from "@/models/SecondaryEducation";
import HEM from "@/models/HigherEducation";

const modelMap = {
  women_welfare: WWM,
  farmer_schemes: FWM,
  secondary_education: SEM,
  higher_education: HEM,
} as const;

export default async function Page({
  params,
}: {
  params: { scheme_mod: string; id: string };
}) {
    let scheme;
  const { scheme_mod, id } =await params;

  await con();

  const Model = modelMap[scheme_mod as keyof typeof modelMap];

  if(Model){scheme = await Model.findById(id).lean()};

    if(scheme){
  return (
    <UpdateFunction scheme={JSON.parse(JSON.stringify(scheme))} />
        );
        }
}
