'use server'
import { NextResponse } from 'next/server'
import { POST_refreshToken } from './app/api/auth/refresh/api'
import { ApiStatusCodes } from './app/api/ApiStatusCode'
import { useTransition } from 'react';
import { SimpleUserData, loadGlobalUserData } from './data/SimpleData';
import { redirect } from 'next/dist/server/api-utils';

const AccToken_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
const RefToken_name_convention = process.env.REFRESH_TOKEN_NAME_CONVENTION
const separate_query_char = '&'

class UserData
{
    static instance = undefined

    static getInstance()
    {
        if(this.instance == undefined)
        {
            this.instance = new SimpleUserData()
        }
        else if(!this.instance)
        {
            this.instance = new SimpleUserData()
        }
        return this.instance
    }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    console.log("middleware:...............")
    const href = request.nextUrl.href
    const baseURL = request.nextUrl.origin
    const originPath = request.nextUrl.pathname

    if(originPath == process.env.GOOGLE_LOGIN_CALLBACK_PATH_NAME)
    {
        const search = request.nextUrl.search
        if(search.length < 1)
        {
            return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
        }

        const startIndexOfAccessToken = search.indexOf(AccToken_name_convention.concat("=")) + AccToken_name_convention.concat("=").length
        const startIndexOfRefreshToken = search.indexOf(RefToken_name_convention.concat("=")) + RefToken_name_convention.concat("=").length
        if(startIndexOfAccessToken < 0 || startIndexOfRefreshToken < 0)
        {
            return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
        }

        const indexOfSeparator = search.indexOf(separate_query_char)
        const accessToken = search.substring(startIndexOfAccessToken, indexOfSeparator)
        const refreshToken = search.substring(startIndexOfRefreshToken)
        const nextResponse = NextResponse.redirect(new URL(baseURL + "/dashboard"), request.url)
        nextResponse.cookies.set("accessToken", accessToken)
        nextResponse.cookies.set("refreshToken", refreshToken)
        return nextResponse;
    }
    else if(originPath == process.env.FACEBOOK_LOGIN_CALLBACK_PATH_NAME)
    {
        const search = request.nextUrl.search
        if(search.length < 1 || search.indexOf("error") > 0)
        {
            return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
        }

        const startIndexOfAccessToken = search.indexOf(AccToken_name_convention.concat("=")) + AccToken_name_convention.concat("=").length
        const startIndexOfRefreshToken = search.indexOf(RefToken_name_convention.concat("=")) + RefToken_name_convention.concat("=").length
        if(startIndexOfAccessToken < 0 || startIndexOfRefreshToken < 0)
        {
            return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
        }

        const indexOfSeparator = search.indexOf(separate_query_char)
        const accessToken = search.substring(startIndexOfAccessToken, indexOfSeparator)
        const refreshToken = search.substring(startIndexOfRefreshToken)
        const nextResponse = NextResponse.redirect(new URL(baseURL + "/dashboard"), request.url)
        nextResponse.cookies.set("accessToken", accessToken)
        nextResponse.cookies.set("refreshToken", refreshToken)
        return nextResponse;

    }
    else if(originPath == "/auth/logout")
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

            const nextResponse = NextResponse.redirect(new URL(baseURL + "/dashboard"), request.url)
            nextResponse.cookies.set("accessToken", response.accessToken)
            nextResponse.cookies.set("refreshToken", response.refreshToken)
            return nextResponse
        }
    }
 
    const check = await checkUserRoleAssigned()
    //TODO: handle expirated access token in server's session whilt stored accessToken still exists in the client side
    if(check == false)
    {
        return NextResponse.redirect(new URL(baseURL + "/select_role"), request.url)
    }

    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more (activate the middleware)
// Authenticated to access below paths
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/auth/logout',
    '/auth/google/callback:path*',
    '/auth/facebook/callback:path*',
  ],
}

//expiration is along with session
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
                "Authorization": "Bearer " + cookies.get("refreshToken").value
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


async function checkUserRoleAssigned()
{
    await UserData.getInstance().loadGlobalUserData()

    //check user's role
    //if user's role hasnot been definded yet, redirect to Role Selection
    if(UserData.getInstance().getUserRole() === undefined)
    {
        return undefined
    }
    else if(UserData.getInstance().getUserRole() == 'null')
    {
        return false
    }
    else if(UserData.getInstance().getUserRole() == null)
    {
        return false
    }
    else if(UserData.getInstance().getUserRole().length < 1)
    {
        return false
    }
    return true
} 