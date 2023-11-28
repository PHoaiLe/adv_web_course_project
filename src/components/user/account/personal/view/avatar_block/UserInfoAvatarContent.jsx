'use client';

import './UserInfoAvatarContent.css'
import { Avatar, Button } from 'antd'
import {FileImageOutlined} from '@ant-design/icons'
import { useEffect, useState } from 'react'


function UserInfoAvatarContent({AvatarLink})
{
    const avatarExist = 
        <Avatar 
            size={{
                xs: 48,
                sm: 56,
                md: 64,
                lg: 90,
                xl: 106,
                xxl: 126,
                }}
            icon={<FileImageOutlined/>}
            src={AvatarLink}
        />

    const noAvatar = 
            <Avatar 
                size={{
                    xs: 48,
                    sm: 56,
                    md: 64,
                    lg: 90,
                    xl: 106,
                    xxl: 126,
                    }}
                icon={<FileImageOutlined/>}
            />

    const [avatarDisplay, setDisplay] = useState(noAvatar)

    useEffect(() =>
    {
        if(AvatarLink !== undefined)
        {
            setDisplay(avatarExist)
        }
        else if(AvatarLink.length < 1)
        {
            setDisplay(noAvatar)
        }
        else
        {
            setDisplay(noAvatar)
        }
    }, [AvatarLink])

    return(
        <div className='user-detail-info-image-content-frame'>
            <div className='user-detail-info-image-content-container'>
                    {avatarDisplay}
                <p className="avatar-label">Your Avatar</p>
            </div>
        </div>
    )
}

export default UserInfoAvatarContent