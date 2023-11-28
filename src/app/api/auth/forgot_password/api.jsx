'use server';

import { cookies } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode";


export async function POST_sendResetPasswordOtp(email)
{
    let map = new Map()
    map.set("email", email)
    console.log(map)
    let requestBody = JSON.stringify(Object.fromEntries(map))

    try
    {
        let url = process.env.API_URL + "/user/send_resetOtp"
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: requestBody,
            headers: {
                'Cookie': cookies(),
                'Content-Type': 'application/json'
            }
        })

        const statusCode = response.status;
        const responseBody = await response.json();
        console.log(statusCode)
        return {statusCode, responseBody}

    }
    catch(err)
    {
        console.log(err)
        return {statusCode: err.errno, responseBody: "Connection error!"}
    }
}

export async function POST_sendResetPasswordRequest(formData)
{
    let map = new Map()

    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    const JsObject = Object.fromEntries(map)
    const otp = JsObject.otp
    JsObject.otp = Number.parseInt(otp)

    const requestBody = JSON.stringify(JsObject)
    console.log(requestBody)

    const {isError, response} = await sendResetPasswordRequest(requestBody)

    if(isError == true)
    {
        return {statusCode: ApiStatusCodes.ERROR_CONNECT_REFUSED, responseBody: undefined}
    }

    const statusCode = response.status
    const responseBody = await response.json()

    console.log(responseBody)
    return {statusCode, responseBody}

}

async function sendResetPasswordRequest(requestBody)
{
    const url = process.env.API_URL + "/user/reset_password"
    try
    {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: requestBody,
            headers: {
                'cookie' :cookies(),
                'Content-Type': "application/json"
            }
        })

        return {isError: false, response}
    }
    catch(err)
    {
        console.error(err)
        return {isError: true, response: undefined}
    }
}