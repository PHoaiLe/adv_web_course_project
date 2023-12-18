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
                _id: responseBody._id,
                email: responseBody.email,
                fullname: responseBody.fullname,
                role: responseBody.role,
                avatar: responseBody.avatar,
                birthday: responseBody.birthday,
                login_type: responseBody.login_type,
                createdAt: responseBody.createdAt
            }

            return simpleUserData;
        }
        else
        {
            return undefined;
        }
    }
    catch(err)
    {
        console.log(err)
        return undefined;
    }
}

export async function getClonedUserData()
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    console.log("getClonedUserData")
    const UserData = cookies().get(key)
    console.log(UserData)
    if(UserData)
    {
        return JSON.parse(UserData.value)
    }

    //reload user info
    const result = await loadUserData()
    if(result == undefined)
    {
        return undefined
    }

    cookies().set(key, JSON.stringify(result))

    // const ReloadUserData = cookies().get(key)
    // return JSON.parse(ReloadUserData.value)
    return result;
}

export async function removeClonedUserData()
{
    console.log("delete cloned user's data")
    const key = process.env.SIMPLE_USER_DATA_KEY
    cookies().delete(key)
}