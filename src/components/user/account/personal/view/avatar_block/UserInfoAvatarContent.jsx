import './UserInfoAvatarContent.css'
import { Avatar, Button } from 'antd'
import {FileImageOutlined} from '@ant-design/icons'


function UserInfoAvatarContent()
{
    return(
        <div className='user-detail-info-image-content-frame'>
            <div className='user-detail-info-image-content-container'>
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
                <p>Your Avatar</p>
            </div>
        </div>
    )
}

export default UserInfoAvatarContent