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
                'Content-Type': 'application/json'
            }
        });

        const statusCode = response.status;
        const responseBody = response.json();

        return {statusCode, responseBody}
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

}