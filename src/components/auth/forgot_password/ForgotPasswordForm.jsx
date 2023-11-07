'use client'

import { useEffect, useState } from "react"
import ResetOtpModal from "./reset_otp_modal/ResetOtpModal"
import ResetPasswordForm from "./reset_password_form/ResetPasswordForm"

function ForgotPasswordForm()
{
    const [modalDisplay, setModalDisplay] = useState({display:'block'})
    const [email, setEmail] = useState(undefined)

    function handleOtpModalReturnResult(result)
    {
        setEmail(result.email)
        setModalDisplay({display:'none'})
    }

    return(
        <>
            <ResetOtpModal ModalDisplay={modalDisplay} handleReturnResultCallback={handleOtpModalReturnResult}/>
            <ResetPasswordForm ProvidedEmail={email}/>
        </>
    )
}

export default ForgotPasswordForm