'use server';

import { HttpStatusCode } from "axios";
import { cookies } from "next/headers";
import { ApiStatusCodes } from "../../ApiStatusCode";
import { getClonedUserData } from "../../others/cloned_user_detail/api";

export async function POST_joinClassByCodeOfStudent(classKey)
{
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention).value

    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention).value
    }


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
                'cookie': cookieData,
                'Authorization': "Bearer " + accessToken
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
async function POST_joinClassByLinkOfStudent(class_id, class_token)
{
    const url = process.env.STUDENT_JOIN_CLASS_BY_LINK_API + `/${class_token}` + `/${class_id}`
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention).value

    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention).value
    }


    try
    {
        const response = await fetch(url, {
            method:'POST',
            credentials: 'include',
            headers:
            {
                'Cookie': cookieData,
                "Authorization": "Bearer " + accessToken
            }
        })

        const statusCode = response.status
        const responseBody = await response.json()

        console.log("inside teacher join class by link api")
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


async function GET_joinClassByLinkOfTeacher(class_id, class_token)
{
    const url = process.env.TEACHER_JOIN_CLASS_BY_LINK + `/${class_token}` + `/${class_id}`
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention).value

    if(accessToken === undefined)
    {
        console.log("try to refresh")
        await POST_refreshToken()
        
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention).value
    }
    
    console.log(accessToken)
    try
    {
        const response = await fetch(url, {
            method:'GET',
            credentials: 'include',
            headers:
            {
                'Cookie': cookieData,
                "Authorization": "Bearer " + accessToken
            }
        })

        const statusCode = response.status
        const responseBody = await response.json()

        console.log("inside teacher join class by link api")
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


export async function POST_JoinClassByLink(class_id, class_token)
{
    const clonedUserInfo = await getClonedUserData()
    console.log("inside join class by link")
    console.log(clonedUserInfo)
    if(clonedUserInfo === undefined)
    {
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

    if(clonedUserInfo.role == "teacher")
    {
        const {statusCode, responseBody} = await GET_joinClassByLinkOfTeacher(class_id, class_token)
        return {statusCode, responseBody}
    }
    else if(clonedUserInfo.role == "student")
    {
        const {statusCode, responseBody} = await POST_joinClassByLinkOfStudent(class_id, class_token)
        return {statusCode, responseBody}
    }
}