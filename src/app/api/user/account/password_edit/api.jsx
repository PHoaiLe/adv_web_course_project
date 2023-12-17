'use server';

import { cookies } from "next/headers";

export async function POST_changePassword(formData)
{
    let map = new Map()

    let f = new FormData()
    
    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    const requestBody = JSON.stringify(Object.fromEntries(map))

    const {isError, response} = await sendChangePasswordRequest(requestBody)

    if(isError == true)
    {
        return {statusCode: response.errno, responseBody: undefined}
    }

    const statusCode = response.status;
    const responseBody = await response.json();
    console.log(statusCode)
    console.log(responseBody)
    return {statusCode, responseBody}
}

async function sendChangePasswordRequest(requestBody)
{
    const url = process.env.API_URL + "/user/change_password"
    try
    {
        const response = await fetch(url, {
            method: 'PATCH',
            credentials: 'include',
            body: requestBody,
            headers: {
                'cookie': cookies(),
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + cookies().get("accessToken").value,
            }
        })

        return {isError: false, response}
    }
    catch(err)
    {
        console.log(err)
        return {isError: true, response: err}
    }
}