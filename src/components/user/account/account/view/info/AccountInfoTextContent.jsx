'use client';
import './AccountInfoTextContent.css'
import { Spin } from 'antd'
import { useEffect, useState } from 'react';


function AccountInfoTextContent({Account_data})
{
    // const data = await GET_getUserInfo();
    // console.log(data)
    let loadingUI = 
    <div className='loading-spin'>
        <Spin tip="Loading" size='large'/>
        <p>Loading</p>
    </div>
    

    const seperateChar = 'T'


    let loadedUI = 
        <div className='user-detail-info-text-content-container'>
            <div className='user-detail-info-text-content-grid'>
                <div className='user-detail-info-text-content-labels'>
                    <p>Account Id</p>
                    <p>Email</p>
                    <p>Role</p>
                    <p>Login type</p>
                    <p>Created at</p>
                </div>
                <div className='user-detail-info-text-content-info'>
                    <p>{Account_data._id}</p>
                    <p>{Account_data.email}</p>
                    <p>{Account_data.role}</p>
                    <p>{Account_data.login_type? Account_data.login_type: "Unknow"}</p>
                    <p>{Account_data.createdAt}</p>
                </div>
            </div>
        </div>

    const [finalUI, setFinalUI] = useState(loadingUI)

    useEffect(
        () => 
        {
            if(Account_data != null)
            {
                setFinalUI(loadedUI)
            }
            else
            {
                setFinalUI(loadingUI)
            }
        },
        [Account_data]
    )

    return(
        <>
            {finalUI}
        </>
    )
}



export default AccountInfoTextContent