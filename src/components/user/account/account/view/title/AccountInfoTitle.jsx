import './AccountInfoTitle.css'
import Link from 'next/link'
import {EditOutlined} from '@ant-design/icons'

function AccountInfoTitle({EditLink})
{
    return(
        <div className='user-detail-info-title'>
            <div className='user-detail-info-title-detail'>
                <h2>Account Infomation</h2>
                <Link  href={EditLink}><EditOutlined className='edit-link'/></Link>
            </div>
            <p>Here you can review account's infomation and edit the password</p>
        </div>
    )
}

export default AccountInfoTitle;
