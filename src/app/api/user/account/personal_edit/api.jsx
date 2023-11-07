'use server'

import { cookies } from "next/headers"


export async function PATCH_editUserProfile(formData)
{
    let map = new Map()
    formData.forEach((value, key, parent) =>
    {
        map.set(key, value)
    })
    console.log(JSON.stringify(Object.fromEntries(map)))
    const {isError, response} = await sendEditUserProfileRequest(JSON.stringify(Object.fromEntries(map)))

    if(isError == true)
    {
        return {statusCode: response.errno, responseBody: response}
    }

    //no error
    const statusCode = response.status
    const responseBody = await response.json()
    console.log(statusCode)
    console.log(responseBody)
    return {statusCode, responseBody}

}

async function sendEditUserProfileRequest(responseBody)
{
    const url = process.env.API_URL + "/user/edit_profile"
    try
    {
        const response = await fetch(url, {
            method:"PATCH",
            credentials: "include",
            body: responseBody,
            headers: {
                "cookie": cookies(),
                'Content-Type': "application/json"
            },
        })

        return {isError: false, response: response}
    }
    catch(err)
    {
        return {isError: true, response: err}
    }
}