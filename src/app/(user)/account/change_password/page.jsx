
import ChangePasswordForm from '@/components/user/account/account/password/ChangePasswordForm'
import './page.css'
import { UndoComponent } from "@/components/user/account/title/TitleComponents/TitleComponents"
import DetailPageTitle from '@/components/user/account/title/DetailPageTitle'


function ChangePasswordPage()
{

    const undoChangePassword = "/account/account_info"
    const mainTitle = "Change Password"
    const description = "Here you can change your current password by providing below information"
    const titleComponent = <UndoComponent UndoLink={undoChangePassword}/>

    return(
        <>
            <DetailPageTitle MainTitle={mainTitle} Description={description} TitleComponent={titleComponent}/>
            <div className="user-detail-edit-content-frame">
                <div className="user-detail-edit-content-container">
                    <div className="user-detail-edit-form-frame">
                        <ChangePasswordForm />
                    </div>
                    <div className="user-detail-edit-avatar-frame">
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePasswordPage