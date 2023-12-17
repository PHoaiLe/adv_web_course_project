'use client';
import './UserInfoTextContent.css'
import { Spin } from 'antd'
import { useEffect, useState } from 'react';


function UserInfoTextContent({User_data})
{
    // const data = await GET_getUserInfo();
    // console.log(data)
    useEffect(
        () => 
        {
            if(User_data != null)
            {
                setFinalUI(loadedUi)
            }
            else
            {
                setFinalUI(loadingUI)
            }
        },
        [User_data]
    )
    const seperateChar = 'T'

    let loadingUI = 
    <div className='loading-spin'>
        <Spin tip="Loading" size='large'/>
        <p>Loading</p>
    </div>

    let loadedUi = 
        <div className='user-detail-info-text-content-container'>
            <div className='user-detail-info-text-content-grid'>
                <div className='user-detail-info-text-content-labels'>
                    <p>Full name</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Birthday</p>
                </div>
                <div className='user-detail-info-text-content-info'>
                    <p>{User_data.fullname}</p>
                    <p>Unknown</p>
                    <p>{User_data.email}</p>
                    <p>{User_data.birthday.split(seperateChar)[0]}</p>
                </div>
            </div>
        </div>

    const [finalUI, setFinalUI] = useState(loadingUI)


    return(
        <>
            {finalUI}
        </>
    )
}



export default UserInfoTextContent