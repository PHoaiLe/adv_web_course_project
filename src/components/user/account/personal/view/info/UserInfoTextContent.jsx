import GET_getUserInfo from '@/app/api/user/account/personal_info/api'
import './UserInfoTextContent.css'

import { Spin } from 'antd'

function UserInfoTextContent()
{
    // const user_id = ""
    // const let {data, error, isLoading} = GET_getUserInfo(user_id)
    //for testing without API
    let isLoading = true;

    let ui_result = isLoading == true ? 
    <div className='loading-spin'>
        <Spin tip="Loading" size='large'/>
        <p>Loading</p>
    </div> :
        <div className='user-detail-info-text-content-container'>
            <div className='user-detail-info-text-content-grid'>
                <div className='user-detail-info-text-content-labels'>
                    <p>Full name</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Birthday</p>
                </div>
                <div className='user-detail-info-text-content-info'>
                    <p>Le Hoai Phuong</p>
                    <p>Ple123</p>
                    <p>lehoaiphuong@gmail.com</p>
                    <p>15/09/2002</p>
                </div>
            </div>
        </div>

    // let ui_result = isLoading == true ? 
    // <div className='loading-spin'>
    //     <Spin tip="Loading" size='large'/>
    //     <p>Loading</p>
    // </div> :
    //     <div className='user-detail-info-text-content-container'>
    //         <div className='user-detail-info-text-content-grid'>
    //             <div className='user-detail-info-text-content-labels'>
    //                 <p>Full name</p>
    //                 <p>Username</p>
    //                 <p>Email</p>
    //                 <p>Birthday</p>
    //             </div>
    //             <div className='user-detail-info-text-content-info'>
    //                 <p>{data.fullname}</p>
    //                 <p>{data.username}</p>
    //                 <p>{data.email}</p>
    //                 <p>{data.birthday}</p>
    //             </div>
    //         </div>
    //     </div>

    return(
        <>
            {ui_result}
        </>
    )
}

export default UserInfoTextContent