
'use server';

import { ApiStatusCodes } from '@/app/api/ApiStatusCode';
import { cookies, headers } from 'next/headers';

async function GET_getUserInfo()
{
    let url = process.env.API_URL + "/user/profile";

    try
    {
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include", //activate cookies
            headers: {
                "cookie": cookies(), //use cookies in request header
                "Authorization": "Bearer " + cookies().get("accessToken").value
            } 
        })
        
        const statusCode = response.status
        const data = await response.json();
        return {statusCode, responseBody: data};
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: "500", data: undefined};
    }

}


export default GET_getUserInfo