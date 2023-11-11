
'use server';

import { cookies, headers } from 'next/headers';

async function GET_getUserInfo()
{
    let url = "http://localhost:3000/user/profile";

    try
    {
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include", //activate cookies 
            headers: {cookie: cookies()} //use cookies in request header
        })
        
        const statusCode = response.status
        const data = await response.json();
        return {statusCode, data};
    }
    catch(err)
    {
        console.log(err)
        return {statusCode: "500", data: null};
    }

}


export default GET_getUserInfo