'use server'

import { reference } from "@popperjs/core";
import { ApiStatusCodes } from "../../ApiStatusCode";
import { cookies } from "next/headers"

export async function POST_refreshToken()
{
    const base_URL = process.env.API_URL;
    // const query_api = base_URL + "/auth/refresh"
    const query_api = process.env.REFRESH_TOKEN_API;
    const cookieData = cookies()
    const refreshToken = cookies().get("refreshToken").value

    try
    {
        const response = await fetch(query_api, {
            headers: {
                "cookie": cookieData,
                "Authorization": "Bearer " + refreshToken
            },
            method: "POST",
            credentials: "include",
            body: {}
        })
        
        const statusCode = response.status;
        const responseBody = await response.json() 

        console.log("inside refresh token api")
        console.log(statusCode)
        console.log(responseBody)

        if(statusCode == ApiStatusCodes.REFRESH_TOKEN_SUCCESS)
        {
            const time = Date.now()
            cookies().set("accessToken", responseBody.accessToken, {expires: (time + 1000*60*15)})
            cookies().set("refreshToken", responseBody.refreshToken, {expires: (time + 1000*60*60*24)})
        }

        return {statusCode, responseBody: undefined}
    }
    catch (err)
    {
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

}