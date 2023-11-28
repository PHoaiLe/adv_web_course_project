'use server';

import { redirect } from "next/navigation";
import { ApiStatusCodes } from "../../ApiStatusCode";

//happen in the Next server
const { cookies } = require("next/headers")

export async function POST_signUp(formData)
{
    let map = new Map();
    const birthday = formData.get("birthday")
    formData.set("birthday", new Date(birthday).toISOString().split("T")[0])
    formData.set("role", "user")

    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    let requestBody = JSON.stringify(Object.fromEntries(map))

    console.log(requestBody)

    //config and send the http request to the server
    const response = await sendSignUpRequest(requestBody)

    //check error
    if(response.isError == true)
    {
        return {statusCode: response.response.errno, responseBody: response.response}
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
        return {statusCode, data}
    }
}

async function sendSignUpRequest(requestBody)
{
    const url = process.env.API_URL + "/user/signup"

    try
    {
        const response = await fetch(url, {
            method: 'POST',
            body: requestBody,
            credentials: "include",
            headers: {
                "cookie": cookies(),
                "Content-Type": "application/json"
            },
            
        })
        return {isError: false, response: response}
    }
    catch (err)
    {
        return {isError: true, response: err}
    }



}