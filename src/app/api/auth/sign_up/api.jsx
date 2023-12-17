'use server';

import { redirect } from "next/navigation";
import { ApiStatusCodes } from "../../ApiStatusCode";

//happen in the Next server
const { cookies } = require("next/headers")

export async function POST_signUp(formData)
{
    let map = new Map();
    const birthday = formData.get("birthday")
    const otpValue = formData.get('otp')

    formData.set("birthday", new Date(birthday).toISOString().split("T")[0])
    
    formData.delete('phone')

    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    let JsObject = Object.fromEntries(map)
    JsObject.otp = Number.parseInt(otpValue, 10)
    const requestBody = JSON.stringify(JsObject)

    console.log(requestBody)

    //config and send the http request to the server
    const response = await sendSignUpRequest(requestBody)

    //check error
    if(response.isError == true)
    {
        return {statusCode: response.response.errno, responseBody: "Connection error"}
    }

    const statusCode = response.response.status
    const data = await response.response.json()

    if(statusCode == ApiStatusCodes.SIGN_UP_SUCCESS)
    {
        redirect("/auth/sign_in")   
    }
    else
    {
        console.log("sign up failed...")
        console.log(data)
        return {statusCode, responseBody: data}
    }
}

async function sendSignUpRequest(requestBody)
{
    // const url = process.env.API_URL + "/user/signup"
    const url = process.env.SIGN_UP_API
    try
    {
        const response = await fetch(url, {
            method: 'POST',
            body: requestBody,
            credentials: "include",
            headers: {
                "cookie": cookies(),
                "Content-Type": 'application/json'
            },
            
        })
        return {isError: false, response: response}
    }
    catch (err)
    {
        console.log(err)
        return {isError: true, response: err}
    }



}


export async function POST_sendRegisterOTP(email)
{
    let map = new Map()
    map.set("email", email)
    console.log(map)
    let requestBody = JSON.stringify(Object.fromEntries(map))

    try
    {
        // let url = process.env.API_URL + "/user/send_registerOtp"
        let url = process.env.SEND_REGISTER_OTP_API
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

        return {statusCode, responseBody}

    }
    catch(err)
    {
        console.log(err)
        return {statusCode: err.errno, responseBody: "Connection error!"}
    }
}