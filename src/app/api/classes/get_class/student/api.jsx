'use server';

import { ApiStatusCodes } from "@/app/api/ApiStatusCode";
import { cookies } from "next/headers";

const access_token_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION

export async function GET_getJoinedClassesOfStudent()
{
    const {isError, response} = await sendGetAllClassesRequest();

    if(isError == true)
    {
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

    const statusCode = response.status;
    const responseBody = await response.json();

    console.log(statusCode)
    console.log(responseBody)

    return {statusCode, responseBody}
}

async function sendGetAllClassesRequest()
{
    try
    {
        const url = process.env.STUDENT_GET_JOINED_CLASSES
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Cookie": cookies(),
                'Authorization': "Bearer " + cookies().get(access_token_convention).value
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

