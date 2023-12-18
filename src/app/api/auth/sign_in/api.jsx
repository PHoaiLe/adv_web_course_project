'use server'

import { cookies, headers } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"
import { RedirectType, redirect } from "next/navigation"

export async function POST_signIn(formData)
{
    let map = new Map()
    formData.forEach((value, key, parent) => 
    {
        map.set(key, value)
    })

    const requestBody = JSON.stringify(Object.fromEntries(map))
    console.log(requestBody)

    const response = await sendSignInRequest(requestBody)
    if(response.isError == true)
    {
        console.log("error")
        return {statusCode: response.response.errno, responseBody: undefined}
    }

    
    //no error
    const statusCode = response.response.status
    const responseBody = await response.response.json()
    const expiredTime = Date.now()


    if(statusCode == ApiStatusCodes.SIGN_IN_SUCCESS)
    {
        console.log("SIGN_IN_SUCCESS")
        console.log(responseBody.accessToken)
        console.log(responseBody.refreshToken + " !!!!!")
        cookies().set("accessToken", responseBody.accessToken, {expires: expiredTime + 1000*60*15,})
        cookies().set("refreshToken", responseBody.refreshToken, {expires: expiredTime + 1000*60*60*24,})
        return {statusCode, responseBody: undefined}
    }
    else
    {
        return {statusCode, responseBody}
    }

}


async function sendSignInRequest(requestBody)
{
    // const api_base_url = process.env.API_URL
    // const url = api_base_url + "/auth/local/login"
    const url = process.env.LOCAL_LOGIN_API
    try
    {
        const response = await fetch(url, {
            method: 'POST',
            body: requestBody,
            credentials: "include",
            headers: {
                "Cookie": cookies(),
                "Content-Type": "application/json",
                "Accept" : "application/json"
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


export async function GET_signInWithGoogle()
{
    // const googleAuthLink = process.env.API_URL + "/auth/google/login"
    
    const googleAuthLink = process.env.GOOGLE_LOGIN_API

    redirect(googleAuthLink, 'push')
    // const response = await fetch(googleAuthLink, {
    //     method: 'GET',
    //     credentials: 'include',
    //     headers: {
    //         "Accept": '*/*'
    //     },
    // })

    // const statusCode = response.status
    // const responseBody = await response.json();

    // console.log(responseBody)
}

export async function GET_signInWithFacebook()
{
    // const facebookAuthLink = process.env.API_URL + "/auth/facebook/login"
    const facebookAuthLink = process.env.FACEBOOK_LOGIN_API
    
    redirect(facebookAuthLink, 'push')
    // const response = await fetch(googleAuthLink, {
    //     method: 'GET',
    //     credentials: 'include',
    //     headers: {
    //         "Accept": '*/*'
    //     },
    // })

    // const statusCode = response.status
    // const responseBody = await response.json();

    // console.log(responseBody)
}