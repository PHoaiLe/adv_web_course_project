import UserInfoTextEdit from '@/components/user/account/personal/edit/info/UserInfoTextEdit'
import './page.css'
import UserInfoEditAvatar from '@/components/user/account/personal/edit/avatar/UserInfoEditAvatar'
import UserEditTitle from '@/components/user/account/personal/edit/title/UserEditTitle'
import GET_getUserInfo from '@/app/api/user/account/personal_info/api'
import { ApiStatusCodes } from '@/app/api/ApiStatusCode'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


async function UserEditInfoPage()
{
    let userInfoLink = '/account/personal_info'

    const {statusCode, responseBody} = await GET_getUserInfo()
    if(statusCode != ApiStatusCodes.GET_USER_INFO_SUCCESS && statusCode > 0)
    {
        revalidatePath("/account/personal_edit")
    }
    else if(statusCode < 0)
    {
        redirect("/not-found")
    }

    return(
        <>
            <UserEditTitle EditLink={userInfoLink}/>
            <div className="user-detail-edit-content-frame">
                <div className="user-detail-edit-content-container">
                    <div className="user-detail-edit-form-frame">
                        <UserInfoTextEdit UserProfile={responseBody}/>
                    </div>
                    <div className="user-detail-edit-avatar-frame">
                        <UserInfoEditAvatar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEditInfoPage