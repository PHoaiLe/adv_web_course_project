
'use server';

import { ApiStatusCodes } from '@/app/api/ApiStatusCode';
import { cookies, headers } from 'next/headers';

async function GET_getUserInfo()
{
    let url = process.env.API_URL + "/user/profile";
    const cookieData = cookies();
    const accessToken = cookies().get("accessToken").value
    try
    {
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include", //activate cookies
            headers: {
                "cookie": cookieData, //use cookies in request header
                "Authorization": "Bearer " + accessToken
            } 
        })
        
        const statusCode = response.status
        const responseBody = await response.json();
        console.log("inside get user data")
        console.log(statusCode)
        console.log(responseBody)
        return {statusCode, responseBody};
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: "500", data: undefined};
    }

}


export default GET_getUserInfo