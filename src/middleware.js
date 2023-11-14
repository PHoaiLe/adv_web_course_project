'use server'
import { NextResponse } from 'next/server'
import { POST_refreshToken } from './app/api/auth/refresh/api'
import { ApiStatusCodes } from './app/api/ApiStatusCode'
import { useTransition } from 'react';
 

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    console.log("middleware:...............")
    const href = request.nextUrl.href
    const baseURL = request.nextUrl.origin
    const originPath = href.substring((href.indexOf(baseURL)+baseURL.length))

    if(originPath == "/auth/logout")
    {
        const nextResponse = NextResponse.redirect(baseURL, request.url)
        nextResponse.cookies.delete("accessToken")
        nextResponse.cookies.delete("refreshToken")
        return nextResponse;
    }

    const checkResult = isAuthenticatedUser(request)

    if(checkResult == -1) //must login again
    {
        return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
    }
    else if(checkResult == 0)
    {
        const {statusCode, response} = await refreshToken(request.cookies)
        console.log(statusCode)
        console.log(response)
        if(statusCode < 0 || statusCode === undefined) //error
        {
            return NextResponse.redirect(new URL(baseURL + "/not-found"), request.url)
        }
        else if(statusCode != ApiStatusCodes.REFRESH_TOKEN_SUCCESS)
        {
            return NextResponse.redirect(new URL(baseURL +  "/auth/sign_in", request.url))
        }
        else
        {
            const nextResponse = NextResponse.next()
            nextResponse.cookies.set("accessToken", response.accessToken, {expires: new Date(response.expiresAT)})
            nextResponse.cookies.set("refreshToken", response.refreshToken, {expires: new Date(response.expiresRT)})
            return nextResponse;
        }
    }

    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more (activate the middleware)
// Authenticated to access below paths
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/auth/logout'
  ],
}

function isAuthenticatedUser(request)
{
    if(request.cookies.get("refreshToken") == undefined)
    {
        return -1 //must login again
    }
    else if(request.cookies.get("accessToken") == undefined)
    {
        return 0; //get a new access token
    }
    else
    {
        return 1; //available authenticated information
    }

}


async function refreshToken(cookies)
{
    try
    {
        const query_api = process.env.API_URL + "/auth/refresh"
        const response = await fetch(query_api, {
            headers: {
                "cookie": cookies,
            },
            method: "POST",
            credentials: "include",
            body: {}
        })

        const statusCode = response.status;
        const responseBody = await response.json()

        return {statusCode, response: responseBody}
    }
    catch(err)
    {
        const statusCode = err.errno
        const data = err
        return {statusCode, response: data}
    }
}


