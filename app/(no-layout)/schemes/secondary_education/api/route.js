import { NextResponse } from "next/server";
import con from '../../../../../(Initiation_Task)/lib/conn.js';
import SEM from '../../../../../(Initiation_Task)/models/SecondaryEducation.js';

export async function GET() {
    await con();
    const data=await SEM.find({});
    console.log(data);
    return NextResponse.json({data:data});
}



