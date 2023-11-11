import './UserInfoTitle.css'
import Link from 'next/link'
import {EditOutlined} from '@ant-design/icons'

function UserInfoTitle({EditLink})
{
    return(
        <div className='user-detail-info-title'>
            <div className='user-detail-info-title-detail'>
                <h2>Personal Infomation</h2>
                <Link  href={EditLink}><EditOutlined className='edit-link'/></Link>
            </div>
            <p>Here you can review or edit your account's personal information</p>
        </div>
    )
}

export default UserInfoTitle;
