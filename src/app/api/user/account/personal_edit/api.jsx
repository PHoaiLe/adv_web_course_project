'use server'

import { loadUserData } from "@/app/api/others/cloned_user_detail/api"
import { revalidatePath } from "next/cache"
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
        return {statusCode: response.errno, responseBody: "error connection"}
    }

    //no error
    const statusCode = response.status
    const responseBody = await response.json()
    console.log(statusCode)
    console.log(responseBody)

    //reset the cloned user data
    const key = process.env.SIMPLE_USER_DATA_KEY
    const simpleUserData = JSON.parse(cookies().get(key).value)
    simpleUserData.fullname = map.get("fullname")
    simpleUserData.birthday = map.get("birthday")
    cookies().set(key, JSON.stringify(simpleUserData))
    
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
                'Content-Type': "application/json",
                "Authorization": "Bearer " + cookies().get("accessToken").value,
            },
        })

        return {isError: false, response: response}
    }
    catch(err)
    {
        return {isError: true, response: err}
    }
}

///////////////////////////////////////////////
//avatar

export async function PATCH_uploadAvatar(formData)
{
    
}