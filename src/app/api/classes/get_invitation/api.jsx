'use server';

import { cookies } from "next/headers";
import { ApiStatusCodes } from "../../ApiStatusCode";


export async function GET_getInvitation(classId)
{
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION;
    try
    {
        const url = process.env.TEACHER_GET_INVITATION_OF_CLASS + "/" + classId;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Cookie': cookies(),
                'Authorization': "Bearer " + cookies().get(access_token_name_convention).value
            }
        })

        const statusCode = response.status
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