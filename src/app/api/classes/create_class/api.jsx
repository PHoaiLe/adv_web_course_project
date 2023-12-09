'use server';

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"


export async function POST_createAClass(formData)
{
    let map = new Map()
    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION;
    const requestBody = JSON.stringify(Object.fromEntries(map))

    // const url = process.env.API_URL + "/teacher/class/create"
    const url = process.env.TEACHER_CREATE_CLASS
    try
    {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: requestBody,
            headers: {
                'cookie': cookies(),
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + cookies().get(access_token_name_convention).value
            }
        });

        const statusCode = response.status;
        const responseBody = await response.json();

        console.log(statusCode)
        console.log(responseBody)
        return {statusCode, responseBody}
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

}