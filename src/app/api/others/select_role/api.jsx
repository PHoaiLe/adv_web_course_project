'use server'

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"
import { loadUserData } from "../cloned_user_detail/api"


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
    const responseBody = await response.json();

    console.log(statusCode)
    console.log(responseBody)
    const check = await loadUserData()
    console.log(check)
    return {statusCode, responseBody}
}

async function sendRequest(requestBody)
{
    // const url = process.env.API_URL + "/user/assign-role"
    const url = process.env.USER_SELECT_ROLE_API
    try
    {
        const response = await fetch(url, {
            method: 'PATCH',
            credentials: 'include',
            body: requestBody,
            headers: {
                'Cookie': cookies(),
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