'use client'

import { Button, DatePicker, Input } from 'antd'
import { useRouter } from "next/navigation"
import { useState }  from "react"
import './ChangePasswordForm.css'
import "@/styles/globals.css"
import { POST_changePassword } from '@/app/api/user/account/password_edit/api'
import { ApiStatusCodes } from '@/app/api/ApiStatusCode'
import { HttpStatusCode } from 'axios'


function ChangePasswordForm()
{
    const old_password_key = 'old-password-key'
    const new_password_key = 'new-password-key'
    const old_password_label_key = 'old-password-label-key'
    const new_password_label_key = 'new-password-label-key'
    const saveButton_key = 'confirm-change-password'
    const cancelButton_key = 'cancel-change-password'
    const editForm_key = 'change-password-form-page'
    const cancel_path = "/account/account_info"

    const router = useRouter()

    const [oldPassword, setOldPassword] = useState(undefined)
    const [newPassword, setNewPassword] = useState(undefined)
    const [messageStyle, setMessageStyle] = useState({display: "none", color: 'red'})
    const [message, setMessage] = useState("")


    async function handleSubmitEditForm(formData)
    {
        const {statusCode, responseBody} = await POST_changePassword(formData)
        if(statusCode == HttpStatusCode.Ok)
        {
            setMessage(responseBody.message)
            setMessageStyle({display: 'block', color: 'green'})
        }
        else if (statusCode < 0)
        {
            setMessage('Error connection')
            setMessageStyle({display: 'block', color: 'red'})
        }
        else
        {
            setMessage('Change password failed')
            setMessageStyle({display: 'block', color: 'red'})
        }
    }

    function handleCancelButtonClick(event)
    {
        router.push(cancel_path)
    }

    return(
        <>
        <div className='user-detail-edit-text-content-container'>
            <div className='user-detail-edit-text-content-grid'>
                <div className='user-detail-edit-text-content-labels'>
                    <label htmlFor={old_password_label_key}>Old password</label>
                    <label htmlFor={new_password_label_key}>New password</label>
                    <label htmlFor={saveButton_key} style={{visibility:"hidden", }}>Hidden label</label>
                </div>
                <form key={editForm_key} className='user-detail-edit-text-content-info' action={handleSubmitEditForm}>
                    <Input type='password' key={old_password_key} value={oldPassword}
                    name='password' required
                    onChange={(e) => {setOldPassword(e.target.value)}}
                    placeholder="Input your password here"/>
                    <Input type='password' key={new_password_key} value={newPassword}
                    name='rewrite_password' required
                    onChange={(e) => {setNewPassword(e.target.value)}}
                    placeholder="Your new password!!!"/>

                    <div style={messageStyle}>
                        <p>{message}</p>
                    </div>
                    
                    <div className='user-detail-edit-text-content-buttons flex space-x-4'>
                        <Input key={saveButton_key} className='border-solid border-2 rounded-full w-1/3 text-black hover:text-white hover:bg-cyan-500'type='submit' value='Save'/>
                        <Input type='button'
                        key={cancelButton_key} className='border-solid border-2 rounded-full w-1/3 text-black hover:text-white hover:bg-cyan-500' onClick={handleCancelButtonClick} value='Cancel' />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default ChangePasswordForm