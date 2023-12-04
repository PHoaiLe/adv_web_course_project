'use server';

import { cookies } from "next/headers";
import GET_getUserInfo from "../../user/account/personal_info/api";
import { ApiStatusCodes } from "../../ApiStatusCode";

export async function loadUserData()
{
    try
    {
        const {statusCode, responseBody} = await GET_getUserInfo()
        if(statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
        {
            const simpleUserData = {
                id: responseBody.id,
                email: responseBody.email,
                fullname: responseBody.fullname,
                role: responseBody.role,
                avatar: responseBody.avatar,
                is_ban: responseBody.is_ban,
                birthday: responseBody.birthday,
                login_type: responseBody.login_type,
                createdAt: responseBody.createdAt
            }
            const key = process.env.SIMPLE_USER_DATA_KEY
            cookies().set(key, JSON.stringify(simpleUserData))
            return true;
        }
        else
        {
            return false;
        }
    }
    catch(err)
    {
        console.log(err)
        return false;
    }
}

export async function getClonedUserData()
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    console.log("getClonedUserData")
    const UserData = cookies().get(key)
    if(UserData)
    {
        return JSON.parse(UserData.value)
    }

    const check = await loadUserData()
    if(check == false)
    {
        return undefined
    }

    const ReloadUserData = cookies().get(key)
    return JSON.parse(ReloadUserData.value)
}

export async function removeClonedUserData()
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    cookies().delete(key)
}