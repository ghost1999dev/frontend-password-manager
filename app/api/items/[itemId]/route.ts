import {  db} from "@/lib/db";
import { NextResponse } from "next/server";


export async function PATCH(request: Request, context:any) {
    try {
        const{itemId}= await context.params
        const values = await request.json()
        if(!itemId){
            return new NextResponse("Unauthorized",{status:401})
        }

        const element = await db.element.update({
            where:{
                id:itemId
            },
            data:{
                ...values
            }
        })
        
        return NextResponse.json(element)
    } catch (error) {
        return new NextResponse("Iternal Error",{status:500})
    }
}