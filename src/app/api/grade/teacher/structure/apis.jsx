'use server';

import { ApiStatusCodes } from "@/app/api/ApiStatusCode";
import { POST_refreshToken } from "@/app/api/auth/refresh/api";
import { cookies } from "next/headers";



export async function POST_createGradeComposition(formData)
{
    let map = new Map()

    formData.forEach((value, key, parent) =>
    {
        map.set(key, value)
    })

    let JsObject = Object.fromEntries(map)
    JsObject.scale = Number.parseInt(JsObject.scale)
    
    const requestBody = JSON.stringify(JsObject)

    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention)

    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention)
    
    }


    try
    {
        const url = process.env.TEACHER_CREATE_GRADE_COMPOSITION;
        const response = await fetch(url, {
            method: 'POST',
            credentials: "include",
            body: requestBody,
            headers: {
                'Cookie': cookieData,
                "Content-Type": 'application/json',
                "Authorization": "Bearer " + accessToken.value
            }
        })

        const statusCode = response.status
        const responseBody = await response.json()

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

export async function GET_getCurrentGradeStructure(classId)
{
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention)

    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention)
    }

    try
    {
        const url = process.env.TEACHER_GET_GRADE_COMPOSITION + `/${classId}`
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include",
            headers: 
            {
                "Cookie": cookieData,
                "Authorization": "Bearer " + accessToken.value
            }
        })


        const statusCode = response.status
        const responseBody = await response.json()

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

export async function DELETE_removeGradeComposition(classId, compositionName)
{
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention)

    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention)
    }

    let map = new Map()
    map.set("class_id", classId)
    map.set("name", compositionName)

    const JsObject = Object.fromEntries(map)
    const requestBody = JSON.stringify(JsObject)

    try
    {
        const url = process.env.TEACHER_REMOVE_GRADE_COMPOSITION
        const response = await fetch(url, {
            method: "DELETE",
            credentials: 'include',
            body: requestBody,
            headers:
            {
                "Cookie": cookieData,
                "Authorization": "Bearer " + accessToken.value,
                "Content-Type": "application/json",
            }
        })

        const statusCode = response.status
        const responseBody = await response.json()

        return {statusCode, responseBody}
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }
}

export async function PATCH_updateGradeCompostion(formData)
{
    const access_token_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION

    let cookieData = cookies()
    let accessToken = cookies().get(access_token_name_convention)
    if(accessToken === undefined)
    {
        await POST_refreshToken()
        cookieData = cookies()
        accessToken = cookies().get(access_token_name_convention)
    }

    let map = new Map()

    formData.forEach((value, key, parent) =>
    {
        map.set(key, value)
    })

    const JsObject = Object.fromEntries(map)
    JsObject.scale = Number.parseInt(JsObject.scale)

    const requestBody = JSON.stringify(JsObject)

    try
    {
        const url = process.env.TEACHER_UPDATE_GRADE_COMPOSITION
        const response = await fetch(url, {
            method: 'PATCH',
            credentials: "include",
            body: requestBody, 
            headers:
            {
                "Cookie": cookieData,
                "Authorization" : "Bearer "+ accessToken.value,
                "Content-Type": "application/json",
            }
        })

        const statusCode = response.status;
        const responseBody = await response.json()

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