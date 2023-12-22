import './AccountInfoTitle.css'
import "@/styles/globals.css"
import Link from 'next/link'
import {EditOutlined} from '@ant-design/icons'

function AccountInfoTitle({EditLink})
{
    return(
        <div className='user-detail-info-title text-white font-sans '>
            <div className='user-detail-info-title-detail'>
                <h2>Account Infomation</h2>
                <Link  href={EditLink}><EditOutlined className='text-xl text-white w-9 h-9 ml-3 hover:text-black hover:bg-amber-600 hover:border-4'/></Link>
            </div>
            <p>Here you can review account's infomation and edit the password</p>
        </div>
    )
}

export default AccountInfoTitle;
