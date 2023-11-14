'use server'

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"
import { redirect } from "next/navigation"

export async function POST_signIn(formData)
{
    let map = new Map()
    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    console.log(map)

    const response = await sendSignInRequest(JSON.stringify(Object.fromEntries(map)))

    const statusCode = response.status
    const responseBody = await response.json()
    console.group(responseBody)

    if(statusCode == ApiStatusCodes.SIGN_IN_SUCCESS)
    {
        console.log("SIGN_IN_SUCCESS")

        cookies().set("accessToken", responseBody.accessToken, {expires: responseBody.expiresAT})
        cookies().set("refreshToken", responseBody.refreshToken, {expires: responseBody.expiresRT})
        redirect("/dashboard") //homepage
    }
    else
    {
        return {statusCode, responseBody}
    }

}


async function sendSignInRequest(requestBody)
{
    const url = "http://localhost:3000/auth/login"
    const response = await fetch(url, {
        method: 'POST',
        body: requestBody,
        credentials: "include",
        headers: {
            "cookie": cookies(),
            "Content-Type": "application/json"
        },
        
    })

    return response;
}