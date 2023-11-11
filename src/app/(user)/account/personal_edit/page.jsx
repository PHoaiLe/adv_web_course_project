import UserInfoTextEdit from '@/components/user/account/personal/edit/info/UserInfoTextEdit'
import './page.css'
import UserInfoEditAvatar from '@/components/user/account/personal/edit/avatar/UserInfoEditAvatar'
import UserEditTitle from '@/components/user/account/personal/edit/title/UserEditTitle'


function UserEditInfoPage()
{
    let userInfoLink = '/account/personal_info'
    return(
        <>
            <UserEditTitle EditLink={userInfoLink}/>
            <div className="user-detail-edit-content-frame">
                <div className="user-detail-edit-content-container">
                    <div className="user-detail-edit-form-frame">
                        <UserInfoTextEdit />
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