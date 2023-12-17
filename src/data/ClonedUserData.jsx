'use server';

const { ApiStatusCodes } = require("@/app/api/ApiStatusCode");
const { default: GET_getUserInfo } = require("@/app/api/user/account/personal_info/api");
const { cookies } = require("next/headers");

//structure
// {
//     _id: 'fasfasdfdgdsga6ga64f6safsafsad56'
//     email: 'email@email.com,
//     fullname: 'Mc Macle M',
//     role: 'admin' || 'student' || 'teacher',
//     avatar: null || "string_of_avatar_link",
//     birthday: '2023-11-26T03:59:05.288Z',
//     login_type: 'local' || 'google' || 'facebook',
//     createdAt: '2023-11-26T03:59:05.292Z',
//     id: 'fasfasdfdgdsga6ga64f6safsafsad56'
//   }

async function loadUserData()
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
                birthday: responseBody.birthday,
                login_type: responseBody.login_type,
                createdAt: responseBody.createdAt
            }
            const key = process.env.SIMPLE_USER_DATA_KEY
            cookies().set(key, simpleUserData)

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

async function removeClonedUserData()
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    cookies().delete(key)
}

async function getClonedUserData()
{
    const key = process.env.SIMPLE_USER_DATA_KEY
    const UserData = cookies().get(key)
    if(UserData)
    {
        return UserData
    }

    const check = await loadUserData()
    if(check == false)
    {
        return undefined
    }

    const ReloadUserData = cookies().get(key)
    return ReloadUserData
}



module.exports = {getClonedUserData, removeClonedUserData}