"use server"

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

export default async function newServerAction(formdata:FormData){
    const title=formdata.get("title");
    const shortName = formdata.get("shortName");
    const category = formdata.get("category");
    const launchedYear = formdata.get("launchedYear");
    const shortDescription = formdata.get("shortDescription");
    const detailedDescription = formdata.get("detailedDescription");
    const portalLink = formdata.get("portalLink");
    const duration=formdata.get("duration");
    const amount=formdata.get("amount");
    const applyFrom=formdata.get("applyFrom");
    const lastDate=formdata.get("lastDate");
    const icon = formdata.get("icon");
    const benefits = formdata.get("benefits");
    const eligibility= formdata.get("eligibility");
    const documents= formdata.get("documents");
    const applicationProcess= formdata.get("applicationProcess");
    const faqs= formdata.get("applicationProcess");
    
    const imageFile = formdata.get("image") as File | null;
    const externalUrl = formdata.get("externalImageUrl") as string | null;

        if (!imageFile || imageFile.size === 0) {
            throw new Error("Image is required");
        }

        // Upload image to Cloudinary
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise<{ secure_url: string }>(
            (resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "scheme-images" },
                (error, result) => {
                if (error || !result) reject(error);
                else resolve(result as { secure_url: string });
                }
            ).end(buffer);
            }
        );

        const imageUrl = uploadResult.secure_url;
            

        console.log(imageUrl);

}