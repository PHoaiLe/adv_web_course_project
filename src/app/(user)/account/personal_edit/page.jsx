import UserInfoTextEdit from '@/components/user/account/personal/edit/info/UserInfoTextEdit'
import './page.css'
import UserInfoEditAvatar from '@/components/user/account/personal/edit/avatar/UserInfoEditAvatar'
import UserEditTitle from '@/components/user/account/personal/edit/title/UserEditTitle'
import GET_getUserInfo from '@/app/api/user/account/personal_info/api'
import { ApiStatusCodes } from '@/app/api/ApiStatusCode'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import DetailPageTitle from '@/components/user/account/title/DetailPageTitle'
import { UndoComponent } from '@/components/user/account/title/TitleComponents/TitleComponents'


async function UserEditInfoPage()
{
    const userInfoLink = '/account/personal_info'
    const mainTitle = "Edit Personal Information"
    const description = "Here you can review or edit your account's personal information"
    const titleComponent = <UndoComponent UndoLink={userInfoLink}/>

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
            <DetailPageTitle MainTitle={mainTitle} Description={description} TitleComponent={titleComponent}/>
            <div className="user-detail-edit-content-frame">
                <div className="user-detail-edit-content-container">
                    <div className="user-detail-edit-form-frame">
                        <UserInfoTextEdit UserProfile={responseBody}/>
                    </div>
                    <div className="user-detail-edit-avatar-frame">
                        <UserInfoEditAvatar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEditInfoPage