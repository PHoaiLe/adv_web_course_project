'use client'
import {Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons'


function Member({MemberInfo})
{

    const userAvatar = (MemberInfo !== undefined && MemberInfo.avatar !== 'null') ? MemberInfo.avatar : "../user.png"
    const userName = (MemberInfo !== undefined && MemberInfo.fullname !== 'null') ? MemberInfo.fullname : "No provided full name"

    return(
        <>
            <div className="p-4 md:w-auto flex items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Avatar className='w-full h-full'
                            src={userAvatar}
                            size={"large"}
                            icon={<UserOutlined/>}
                        />
                </div>
                <div className="flex-grow pl-4 h-full">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{userName}</h2>
                </div>
            </div>
        </>
    )
}

export default Member