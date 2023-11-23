import AccountInfoTitle from "@/components/user/account/account/view/title/AccountInfoTitle"
import AccountInfoTextContent from '@/components/user/account/account/view/info/AccountInfoTextContent'
import './page.css'
import { EditComponent } from "@/components/user/account/title/TitleComponents/TitleComponents"
import DetailPageTitle from "@/components/user/account/title/DetailPageTitle"
import GET_getUserInfo from "@/app/api/user/account/personal_info/api"
import { ApiStatusCodes } from "@/app/api/ApiStatusCode"
import NotFound from "../not-found"




async function AccountInfoPage()
{
    const editLink = '/account/change_password'
    const mainTitle = "Account Information"
    const description = "Here you can review account's infomation and edit the password"
    const titleComponent = <EditComponent EditLink={editLink}/>

    // const AccountData = {
    //     id: "ajsfoasjfioasjfasjfjaspfjsak",
    //     email: "account_email@email.com",
    //     role: "student",
    //     created_at: "2023-11-18",
    // }

    const {statusCode, responseBody} = await GET_getUserInfo();
    console.log(statusCode)

    let TextContent = <></>

    if(statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
    {
        TextContent = <AccountInfoTextContent Account_data={responseBody} />
    }
    else
    {
        TextContent = <NotFound />
    }

    let ImageContent = <div></div>
    
    // if(result.statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
    // {
    //     return(
    //         <>
    //             <UserInfoTitle EditLink={editLink}/>
    //             <div className="user-detail-info-content-frame">
    //                 <div className="user-detail-info-content-container">
    //                     {TextContent}
    //                     {ImageContent}
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }
    // else{
    //     redirect("/not-found")
    // }

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

export default AccountInfoPage