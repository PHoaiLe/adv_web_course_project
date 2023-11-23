
import './page.css'
import UserInfoTextContent from '@/components/user/account/personal/view/info/UserInfoTextContent.jsx'
import UserInfoAvatarContent from '@/components/user/account/personal/view/avatar_block/UserInfoAvatarContent.jsx'
import UserInfoTitle from '@/components/user/account/personal/view/title/UserInfoTitle.jsx'
import GET_getUserInfo from '@/app/api/user/account/personal_info/api';
import { notFound, redirect } from 'next/navigation'
import { ApiStatusCodes } from '@/app/api/ApiStatusCode';
import { EditComponent } from '@/components/user/account/title/TitleComponents/TitleComponents';
import DetailPageTitle from '@/components/user/account/title/DetailPageTitle';



async function UserInfoPage()
{
    const editLink = '/account/personal_edit'
    const mainTitle = "Personal Information"
    const description = "Here you can review or edit your account's personal information"
    const titleComponent = <EditComponent EditLink={editLink}/>



    const result = await GET_getUserInfo();
    console.log(result)

    let TextContent = <UserInfoTextContent User_data={result.responseBody}/>

    let ImageContent = <UserInfoAvatarContent />
    
    if(result.statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
    {
        return(
            <>
                <DetailPageTitle MainTitle={mainTitle} Description={description} TitleComponent={titleComponent}/>
                <div className="user-detail-info-content-frame">
                    <div className="user-detail-info-content-container">
                        {TextContent}
                        {ImageContent}
                    </div>
                </div>
            </>
        )
    }
    else{
        redirect("/not-found")
    }

    return(
        <>
            <DetailPageTitle MainTitle={mainTitle} Description={description} TitleComponent={titleComponent}/>
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