"use client";

import { Button, DatePicker, Input } from 'antd'
import './UserInfoTextEdit.css'
import { useState } from 'react';

function UserInfoTextEdit()
{
    let fullname_key = 'user-detail-fullname'
    let username_key = 'user-detail-username'
    let email_key = 'user-detail-email'
    let birthday_key = 'user-detail-birthday'
    let saveButton_key = 'save-button'
    let cancelButton_key = 'cancel-button'

    let [fullname, setFullname] = useState("Full name")
    let [username, setUsername] = useState("Username")
    let [email, setEmail] = useState("Email")
    let [birthday, setBirthday] = useState("Birthday")

    function handleDatePickerChange(date, date_string)
    {
        setBirthday(() => date_string)
    }   

    return(
        <div className='user-detail-edit-text-content-container'>
            <div className='user-detail-edit-text-content-grid'>
                <div className='user-detail-edit-text-content-labels'>
                    <label htmlFor={fullname_key}>Full name</label>
                    <label htmlFor={username_key}>Username</label>
                    <label htmlFor={email_key}>Email</label>
                    <label htmlFor={birthday_key}>Birthday</label>
                </div>
                <form className='user-detail-edit-text-content-info'>
                    <Input type='text' key={fullname_key} value={fullname}/>
                    <Input type='text' key={username_key} value={username}/>
                    <Input type='email' key={email_key} value={email}/>
                    <DatePicker className='user-detail-edit-text-content-info-datepicker'
                    onChange={handleDatePickerChange}/>
                    <Input type='date' style={{display:"none"}} key={birthday_key} value={birthday}/>
                </form>
                <div className='user-detail-edit-text-content-buttons'>
                    <Button key={saveButton_key} className='save-button'>Save</Button>
                    <Button key={cancelButton_key} className='cancel-button'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoTextEdit