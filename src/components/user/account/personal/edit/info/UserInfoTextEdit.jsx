"use client";

import { Button, DatePicker, Input } from 'antd'
import './UserInfoTextEdit.css'
import { useEffect, useState } from 'react';
import { PATCH_editUserProfile } from '@/app/api/user/account/personal_edit/api';
import { ApiStatusCodes } from '@/app/api/ApiStatusCode';
import { c_revalidatePath } from '@/app/api/general/revalidatePath/api';
import { c_redirect } from '@/app/api/general/redirect/api';
import { useRouter } from 'next/navigation';
import { HttpStatusCode } from 'axios';

function UserInfoTextEdit({UserProfile})
{
    const router = useRouter()
    let fullname_key = 'user-detail-fullname'
    let username_key = 'user-detail-username'
    let email_key = 'user-detail-email'
    let birthday_key = 'user-detail-birthday'
    let saveButton_key = 'save-button'
    let cancelButton_key = 'cancel-button'
    let editForm_key = 'edit-form-key'

    let [fullname, setFullname] = useState("Full name")
    let [phone, setPhone] = useState("Phone number")
    let [email, setEmail] = useState("Email")
    let [birthday, setBirthday] = useState("Birthday")

    function handleDatePickerChange(date, date_string)
    {
        setBirthday(() => date_string)
    }

    function handleCancelButtonClick(e)
    {
        router.push("/account/personal_info")
    }

    async function handleSubmitEditForm(formData)
    {
        const {statusCode, responseBody} = await PATCH_editUserProfile(formData)
        if(statusCode == HttpStatusCode.Created)
        {
            console.log("Ok")
            router.push("/account/personal_info")
        }
    }

    useEffect(() => 
    {
        if(UserProfile != null)
        {
            setFullname(UserProfile.fullname)
            setEmail(UserProfile.email)
            setPhone(UserProfile.phone)
        }
    },
    [UserProfile])

    return(
        <div className='user-detail-edit-text-content-container'>
            <div className='user-detail-edit-text-content-grid'>
                <div className='user-detail-edit-text-content-labels'>
                    <label htmlFor={fullname_key}>Full name</label>
                    <label htmlFor={username_key}>Phone number</label>
                    <label htmlFor={email_key}>Email</label>
                    <label htmlFor={birthday_key}>Birthday</label>
                    <label htmlFor={saveButton_key} style={{visibility:"hidden", }}>Hidden label</label>
                </div>
                <form key={editForm_key} className='user-detail-edit-text-content-info' action={handleSubmitEditForm}>
                    <Input type='text' key={fullname_key} value={fullname}
                    name='fullname'
                    onChange={(e) => {setFullname(e.target.value)}}
                    />
                    <Input type='text' key={username_key} value={phone}
                    name='phone'
                    onChange={(e) => {setPhone(e.target.value)}}
                    />
                    <Input type='email' key={email_key} value={email} disabled='true'
                    name='email'
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <DatePicker className='user-detail-edit-text-content-info-datepicker'
                    onChange={handleDatePickerChange}
                    />
                    <Input type='date' name='birthday' style={{display:"none"}} key={birthday_key} value={birthday}/>
                    <div className='user-detail-edit-text-content-buttons flex space-x-4'>
                        <Input key={saveButton_key} className='border-solid border-2 rounded-full w-1/3 text-black hover:text-white hover:bg-cyan-500' type='submit' value='Save'/>
                        <Input type='button'
                        key={cancelButton_key} className='border-solid border-2 rounded-full w-1/3 text-black hover:text-white hover:bg-cyan-500' onClick={handleCancelButtonClick} value='Cancel' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserInfoTextEdit