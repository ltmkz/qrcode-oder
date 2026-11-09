import authApiRequest from "@/apiRequests/auth";
import { LoginBodyType } from "@/schemaValidations/auth.schema";
import { cookies } from "next/headers";
import  jwt  from "jsonwebtoken";
import { HttpError } from "@/lib/http";

export async function POST(req: Request) {
    const body = (await req.json()) as LoginBodyType
    const cookieStore = cookies()
    try{
        const {payload} = await authApiRequest.sLogin(body)
        const {accessToken, refreshToken} = payload.data
        const decodedAcessToken = jwt.decode(accessToken) as {exp:number}
        const decodedRefreshToken = jwt.decode(refreshToken) as {exp:number}
       
        ;(await cookieStore).set('accessToken', accessToken,{
            path:'/',
            httpOnly: true,
            sameSite: 'lax',
            expires: decodedAcessToken.exp * 1000,
        
        })
        ;(await cookieStore).set('refreshToken', refreshToken,{
            path:'/',
            httpOnly: true,
            sameSite: 'lax',
            expires: decodedAcessToken.exp * 1000,
        
        })
        return Response.json(payload)
    }
    catch(e){
        if(e instanceof HttpError)
            return Response.json(e.payload, {status: e.status})
        else {
            return Response.json({
                message: 'Lỗi server',
                status: 500
            })
        }
    }
    
}