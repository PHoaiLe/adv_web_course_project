'use server';

import './page.css'
import UserInfoTextContent from '@/components/user/account/personal/view/info/UserInfoTextContent.jsx'
import UserInfoAvatarContent from '@/components/user/account/personal/view/avatar_block/UserInfoAvatarContent.jsx'
import UserInfoTitle from '@/components/user/account/personal/view/title/UserInfoTitle.jsx'
import GET_getUserInfo from '@/app/api/user/account/personal_info/api';
import { notFound, redirect } from 'next/navigation'
import ApiStatusCodes from '@/app/api/ApiStatusCode';



async function UserInfoPage()
{
    const editLink = '/account/personal_edit'



    const result = await GET_getUserInfo();
    console.log(result)

    let TextContent = <UserInfoTextContent User_data={result.data}/>

    let ImageContent = <UserInfoAvatarContent />
    
    if(result.statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
    {
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
    else{
        redirect("/not-found")
    }

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