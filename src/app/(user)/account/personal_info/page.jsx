
import './page.css'
import UserInfoTextContent from '@/components/user/account/personal/view/info/UserInfoTextContent.jsx'
import UserInfoAvatarContent from '@/components/user/account/personal/view/avatar_block/UserInfoAvatarContent.jsx'
import UserInfoTitle from '@/components/user/account/personal/view/title/UserInfoTitle.jsx'


function UserInfoPage()
{
    const editLink = "/account/personal_edit"


    let TextContent = <UserInfoTextContent />

    let ImageContent = <UserInfoAvatarContent />


    return(
        <>
            <UserInfoTitle EditLink={editLink}/>
            <div className="user-detail-info-content-frame">
                <div className="user-detail-info-content-container">
                    {TextContent}
                    {ImageContent}
                </div>
            </div>
        </>
    )
}

export default UserInfoPage