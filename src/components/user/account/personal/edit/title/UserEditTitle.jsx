import './UserEditTitle.css'
import "@/styles/globals.css"
import Link from 'next/link'
import {UndoOutlined} from '@ant-design/icons'

function UserEditTitle({EditLink})
{
    return(
        <div className='user-detail-info-title text-white bg-cyan-500 font-sans text-xl'>
            <div className='user-detail-info-title-detail'>
                <h2>Edit Personal Infomation</h2>
                <Link  href={EditLink}><UndoOutlined className='text-xl text-white w-9 h-9 ml-3 hover:text-black hover:bg-amber-600 hover:border-4'/></Link>
            </div>
            <p>Here you can review or edit your account's personal information</p>
        </div>
    )
}

export default UserEditTitle
