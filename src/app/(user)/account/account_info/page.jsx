import AccountInfoTitle from "@/components/user/account/account/view/title/AccountInfoTitle"
import AccountInfoTextContent from '@/components/user/account/account/view/info/AccountInfoTextContent'
import './page.css'
import { EditComponent } from "@/components/user/account/title/TitleComponents/TitleComponents"
import DetailPageTitle from "@/components/user/account/title/DetailPageTitle"
import GET_getUserInfo from "@/app/api/user/account/personal_info/api"
import { ApiStatusCodes } from "@/app/api/ApiStatusCode"
import NotFound from "../not-found"
import {redirect} from 'next/navigation'




async function AccountInfoPage()
{
    const editLink = '/account/change_password'
    const mainTitle = "Account Information"
    const description = "Here you can review account's infomation and edit the password"
    const titleComponent = <EditComponent EditLink={editLink}/>
    

    // const AccountData = {
    //     _id: '65617b57d1e817dd17a393f6',
    //     email: 'lehoaiphuong13042002@gmail.com',
    //     fullname: 'Lê Phương',
    //     role: 'user',
    //     avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJc4qlizIVfcKdLFE6lnaJ43vvDO60NwPEP9ctWhgW9=s96-c',
    //     birthday: '2002-01-09T00:00:00.000Z',
    //     login_type: 'google',
    //     createdAt: '2023-11-25T04:43:03.936Z',
    //     id: '65617b57d1e817dd17a393f6'
    //   }

    const {statusCode, responseBody} = await GET_getUserInfo();
    console.log(statusCode)

    let TextContent = <></>

    if(statusCode == ApiStatusCodes.GET_USER_INFO_SUCCESS)
    {
        TextContent = <AccountInfoTextContent Account_data={responseBody} />
    }
    else
    {
        redirect("/not-found")
    }

    let ImageContent = <div></div>

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