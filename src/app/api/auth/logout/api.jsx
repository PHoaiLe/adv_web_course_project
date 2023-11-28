'use server'

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"


export async function POST_Logout()
{
    const url = process.env.API_URL + "/auth/logout"

    try
    {
        const response = await fetch(url, {
            method:"POST",
            credentials:"include",
            headers: {
                "cookie": cookies(),
            }
        })

        const statusCode = response.status
        // const responseBody = await response.json()
        if(statusCode == ApiStatusCodes.LOGOUT_SUCCESS)
        {
            cookies().delete("accessToken")
            cookies().delete("refreshToken")
        }

        return {statusCode, responseBody: undefined}
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: err.errno, responseBody: err}
    }
}