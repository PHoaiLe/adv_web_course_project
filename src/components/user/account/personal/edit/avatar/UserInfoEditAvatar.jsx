'use client';

import './UserInfoEditAvatar.css'
import { Avatar, Button, Upload } from 'antd'
import {FileImageOutlined, UploadOutlined, LoadingOutlined} from '@ant-design/icons'
import { useEffect, useState } from 'react'


function UserInfoEditAvatar({AvatarLink})
{
    const [avatarDisplay, setDisplay] = useState(undefined)
    const [currentAvatar, setCurrentAvatar] = useState(AvatarLink)
    const [message, setMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display:'none', color:'red'})
    const [loading, setLoading] = useState(false)
    const [fileToUpload, setFileToUpLoad] = useState(undefined)

    const validImageFile = [
        'image/png', 'image/jpg', 'image/jpeg'
    ]

    const invalidImageTypeMessage = "Only allow image/png/jpg/jpeg"
    const invalidImageSizeMessage = "Allow image whose size is smaller or equal 2MB"

    const avatarExist = <Avatar 
    size={{
        xs: 48,
        sm: 56,
        md: 64,
        lg: 90,
        xl: 106,
        xxl: 126,
        }}
    icon={<FileImageOutlined/>}
    src={currentAvatar}
    />

    const noAvatar = <Avatar 
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

    
    useEffect(() =>
    {
        if(AvatarLink !== undefined)
        {
            setDisplay(avatarExist)
            setCurrentAvatar(AvatarLink)
        }
        else if(AvatarLink.length < 1)
        {
            setDisplay(noAvatar)
        }
        else
        {
            setDisplay(noAvatar)
        }
    }, [AvatarLink] )

    async function handleBeforeUpload(file)
    {
        console.log(file)
        //check type
        validImageFile.forEach((value, index, array) =>
        {
            if(file.type !== value)
            {
                setMessageDisplay({display: 'block', color: 'red'})
                setMessage(invalidImageTypeMessage)
                return false;
            }
        })

        //check size
        if((file.size / 1024 / 1024) > 2)
        {
            setMessageDisplay({display: 'block', color: 'red'})
            setMessage(invalidImageSizeMessage)
            return false;
        }

        console.log(file.url)
        setFileToUpLoad(file)
        //break the default uploading action
        
        if(!file.url || !file.preview)
        {
            file.preview = await getBase64(file.originFileObj)
        }
        setCurrentAvatar(file.url || file.preview)

        return false;
    }

    function handleOnRemove(file)
    {
        setFileToUpLoad(undefined)
        setCurrentAvatar(AvatarLink)
    }

    function handleChangeAvatarOnClick(e)
    {
        let formData = new FormData()
        console.log(fileToUpload.url)
    }

    const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

    return(
        <div className='user-detail-info-image-content-frame'>
            <div className='user-detail-info-image-content-container'>
                {avatarDisplay}
                <div className='user-detail-info-image-upload-container'>
                    <Upload
                    name='avatar'
                    beforeUpload={handleBeforeUpload}
                    onRemove={handleOnRemove}
                    >
                        <UploadOutlined /> Choose a picture here!
                    </Upload>
                </div>
                <div>
                    <Button
                        disabled={loading}
                        onClick={handleChangeAvatarOnClick}
                    >Change avatar</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoEditAvatar