import './UserEditTitle.css'
import Link from 'next/link'
import {UndoOutlined} from '@ant-design/icons'

function UserEditTitle({EditLink})
{
    return(
        <div className='user-detail-info-title'>
            <div className='user-detail-info-title-detail'>
                <h2>Edit Personal Infomation</h2>
                <Link  href={EditLink}><UndoOutlined className='edit-link'/></Link>
            </div>
            <p>Here you can review or edit your account's personal information</p>
        </div>
    )
}

export default UserEditTitle