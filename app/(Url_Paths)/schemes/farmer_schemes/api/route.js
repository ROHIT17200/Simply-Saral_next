import { NextResponse } from "next/server";
import con from '../../../../../(Initiation_Task)/lib/conn.js';
import FWM from '../../../../../(Initiation_Task)/models/FarmerWelfare.js';

export async function GET() {
    await con();
    const data=await FWM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}