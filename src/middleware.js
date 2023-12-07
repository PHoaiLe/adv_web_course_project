'use server'
import { NextResponse } from 'next/server'
import { ApiStatusCodes } from './app/api/ApiStatusCode'
import { getClonedUserData } from './app/api/others/cloned_user_detail/api';
import GET_getUserInfo from './app/api/user/account/personal_info/api';

const AccToken_name_convention = process.env.ACCESS_TOKEN_NAME_CONVENTION
const RefToken_name_convention = process.env.REFRESH_TOKEN_NAME_CONVENTION
const separate_query_char = '&'


// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    console.log("middleware:...............")
    const href = request.nextUrl.href
    const baseURL = request.nextUrl.origin
    const originPath = request.nextUrl.pathname
    console.log("path " + originPath)
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
        const time = Date.now()
        nextResponse.cookies.set("accessToken", accessToken, {expires: time + 1000*60*15})
        nextResponse.cookies.set("refreshToken", refreshToken, {expires: time + 1000*60*60*24})

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
        const time = Date.now()
        nextResponse.cookies.set("accessToken", accessToken, {expires: time + 1000*60*15})
        nextResponse.cookies.set("refreshToken", refreshToken, {expires: time + 1000*60*60*24})

        return nextResponse;

    }
    else if(originPath == "/auth/logout")
    {
        const key = process.env.SIMPLE_USER_DATA_KEY
        const nextResponse = NextResponse.redirect(baseURL, request.url)
        nextResponse.cookies.delete("accessToken")
        nextResponse.cookies.delete("refreshToken")
        nextResponse.cookies.delete(key)
        return nextResponse;
    }

    const checkResult = isAuthenticatedUser(request)

    if(checkResult == -1) //must login again
    {
        return NextResponse.redirect(new URL(baseURL + "/auth/sign_in"), request.url)
    }
    else if(checkResult == 0)
    {
        const {statusCode, responseBody} = await refreshToken(request.cookies)
        console.log(statusCode)
        console.log(responseBody)
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
            const time = Date.now();
            nextResponse.cookies.set("accessToken", responseBody.accessToken, {expires: time + 1000*60*15})
            nextResponse.cookies.set("refreshToken", responseBody.refreshToken, {expires: time + 1000*60*60*24})
            return nextResponse
        }
    }

    let response = NextResponse.next(request.url);
    const key = process.env.SIMPLE_USER_DATA_KEY
    
    const {check, simpleUserData} = await checkUserRoleAssigned(request.cookies)
    if(check == undefined)//error
    {
        return NextResponse.redirect(new URL(baseURL + "/error_connection"), request.url)
    }
    if(check == false)
    {
        response = NextResponse.redirect(new URL(baseURL + "/select_role"), request.url)
    }

    response.cookies.set(key, JSON.stringify(simpleUserData))

    return response;
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
        const query_api = process.env.REFRESH_TOKEN_API
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

        return {statusCode, responseBody}
    }
    catch(err)
    {
        const statusCode = err.errno
        const data = err
        return {statusCode, responseBody: data}
    }
}

//user must have user detail cloned.
async function checkUserRoleAssigned(cookies)
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    let JSON_string_object = cookies.get(key)
    let UserData = undefined
    if(JSON_string_object === undefined)
    {
        UserData = (await GET_getUserInfo()).responseBody
        console.log("reload")
        console.log(UserData)
        if(UserData === undefined)
        {
            return {check: undefined, simpleUserData: undefined}
        }
    }
    else
    {
        UserData = JSON.parse(JSON_string_object.value)
    }

    console.log("final")
    console.log(UserData)
    let check = false
    //check user's role
    //if user's role hasnot been definded yet, redirect to Role Selection
    const role = UserData.role
    console.log(role)
    if(role === undefined)
    {
        check = false
    }
    else if(role == 'null')
    {
        check = false
    }
    else if(role == null)
    {
        check = false
    }
    else
    {
        check = true
    }


    const simpleUserData = {
        id: UserData.id,
        email: UserData.email,
        fullname: UserData.fullname,
        role: UserData.role,
        avatar: UserData.avatar,
        is_ban: UserData.is_ban,
        birthday: UserData.birthday,
        login_type: UserData.login_type,
        createdAt: UserData.createdAt
    }

    return {check, simpleUserData}
}
