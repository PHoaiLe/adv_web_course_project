'use server'

import { ApiStatusCodes } from "../../ApiStatusCode";
import { cookies } from "next/headers"

export async function POST_refreshToken()
{
    const base_URL = process.env.API_URL;
    const query_api = base_URL + "/auth/refresh"

    try
    {
        const response = await fetch(query_api, {
            headers: {
                "cookie": cookies(),
            },
            method: "POST",
            credentials: "include",
            body: {}
        })
        
        const statusCode = response.status;
        const responseBody = await response.json()  

        if(statusCode == ApiStatusCodes.REFRESH_TOKEN_SUCCESS)
        {
            cookies().set("accessToken", responseBody.accessToken, {expires: new Date(responseBody.expiresAT)})
            cookies().set("refreshToken", responseBody.refreshToken, {expires: new Date(responseBody.expiresRT)})
            const data =  {statusCode, response: undefined}
            return {isError: false, response: data}
        }
        else
        {
            return {
                isError: false,
                response: {statusCode, response: responseBody}
            }
        }

    }
    catch (err)
    {
        return {isError: true, response: "error connection"}
    }

}