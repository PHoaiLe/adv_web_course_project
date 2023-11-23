import '../DetailPageTitle.css'
import Link from 'next/link'
import {EditOutlined, UndoOutlined} from '@ant-design/icons'

export function EditComponent({EditLink})
{
    return(
        <>
            <Link  href={EditLink}><EditOutlined className='edit-link'/></Link>
        </>
    )
}

export function UndoComponent({UndoLink})
{
    return(
        <>
            <Link  href={UndoLink}><UndoOutlined className='edit-link'/></Link>
        </>
    )
}