'use server'

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"


export async function PATCH_updateUserRole(formData)
{
    let map = new Map()
    
    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    const JsObject = Object.fromEntries(map)
    const requestBody = JSON.stringify(JsObject)

    const {isError, response} = await sendRequest(requestBody)
    
    if(isError == true)
    {
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

    const statusCode = response.status;
    const responseBody = response.json();

    return {statusCode, responseBody}
}

async function sendRequest(requestBody)
{
    const url = process.env.API_URL + "/user/assign-role"
    try
    {
        const response = await fetch(url, {
            method: 'PATCH',
            credentials: 'include',
            body: requestBody,
            headers: {
                'cookie': cookies(),
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + cookies().get("accessToken").value
            }
        })

        return {isError: false, response}
    }
    catch(err)
    {
        return {isError: true, response: err}
    }
}