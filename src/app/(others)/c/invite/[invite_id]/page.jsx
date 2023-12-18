import { getClonedUserData } from '@/app/api/others/cloned_user_detail/api';
import InviteLink from '@/components/others/invite_link/InviteLink';
import '@/styles/globals.css';
import { cookies } from 'next/headers';



async function InvitationPage({params, searchParams})
{
    console.log(params)
    console.log(searchParams)
    const refreshTokenNameConvention = process.env.REFRESH_TOKEN_NAME_CONVENTION

    const refreshToken = cookies().get(refreshTokenNameConvention)
    console.log(refreshToken)
    let isUserLoggedIn = undefined
    if(refreshToken === undefined)
    {
        isUserLoggedIn = false
    }
    else
    {
        isUserLoggedIn = true
    }

    return(
        <div className="flex justify-center items-start py-5 w-full bg-gray-50">
            <div className="rounded bg-white h-full shawdow-lg sm:w-4/5 h-20 flex items-center justify-center my-4 pt-6">
                <InviteLink ClassId={searchParams.class_id} ClassToken={searchParams.class_token} IsUserLoggedIn={isUserLoggedIn}/>
            </div>
        </div>
    )
}

export default InvitationPage