'use server'

import { cookies, headers } from "next/headers"
import { ApiStatusCodes } from "../../ApiStatusCode"
import { RedirectType, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import { rewrites } from "../../../../../next.config"

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

    if(statusCode == ApiStatusCodes.SIGN_IN_SUCCESS)
    {
        console.log("SIGN_IN_SUCCESS")
        cookies().set("accessToken", responseBody.accessToken)
        cookies().set("refreshToken", responseBody.refreshToken)
        return {statusCode, responseBody: undefined}
    }
    else
    {
        return {statusCode, responseBody}
    }

}


async function sendSignInRequest(requestBody)
{
    const api_base_url = process.env.API_URL
    const url = api_base_url + "/auth/local/login"
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
    const googleAuthLink = process.env.API_URL + "/auth/google/login"
    
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
    const googleAuthLink = process.env.API_URL + "/auth/facebook/login"
    
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