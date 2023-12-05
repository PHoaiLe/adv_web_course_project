'use server';

import { HttpStatusCode } from "axios";
import { cookies } from "next/headers";
import { ApiStatusCodes } from "../../ApiStatusCode";

export async function POST_joinClassByCode(classKey)
{
    const accessTokenKey = process.env.ACCESS_TOKEN_NAME_CONVENTION

    if(classKey === undefined)
    {
        return {statusCode: HttpStatusCode.NotAcceptable, responseBody: {message: "invalid class key"}}
    }
    else if(classKey.length < 1)
    {
        return {statusCode: HttpStatusCode.NotAcceptable, responseBody: {message: "invalid class key"}}
    }

    try
    {
        const url = process.env.STUDENT_JOIN_CLASS_BY_CODE_API + `/${classKey}`;
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: {},
            headers: {
                'cookie': cookies(),
                'Authorization': "Bearer " + cookies().get(accessTokenKey).value
            }
        })

        const statusCode = response.status
        const responseBody = await response.json();

        return {statusCode, responseBody}
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

}

export async function POST_joinClassByLink()
{

}