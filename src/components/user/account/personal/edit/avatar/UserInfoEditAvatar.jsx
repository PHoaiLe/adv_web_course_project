import './UserInfoEditAvatar.css'
import { Avatar, Button, Upload } from 'antd'
import {FileImageOutlined, UploadOutlined} from '@ant-design/icons'


function UserInfoEditAvatar()
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
                <div className='user-detail-info-image-upload-container'>
                    <Upload>
                        <Button>
                            <UploadOutlined /> Choose a picture here!
                        </Button>
                    </Upload>
                </div>
            </div>
        </div>
    )
}

export default UserInfoEditAvatar