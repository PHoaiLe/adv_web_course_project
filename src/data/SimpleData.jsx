import { data } from "autoprefixer";

const { default: GET_getUserInfo } = require("@/app/api/user/account/personal_info/api");


//structure
// {
//     _id: 'fasfasdfdgdsga6ga64f6safsafsad56'
//     email: 'email@email.com,
//     fullname: 'Mc Macle M',
//     role: 'admin' || 'student' || 'teacher',
//     avatar: null || "string_of_avatar_link",
//     birthday: '2023-11-26T03:59:05.288Z',
//     login_type: 'local' || 'google' || 'facebook',
//     createdAt: '2023-11-26T03:59:05.292Z',
//     id: 'fasfasdfdgdsga6ga64f6safsafsad56'
//   }


export class SimpleUserData
{
    constructor()
    {
        this.UserData = {}
    }

    async loadGlobalUserData()
    {
        this.UserData = (await GET_getUserInfo()).responseBody;
        console.log(">>>>>>>>> simple user data: <<<<<<<<<<")
        console.log(this.UserData)
    }

    getUserRole()
    {
        return this.UserData.role
    }

    getEmail()
    {
        return this.UserData.email;
    }

    getId()
    {
        return this.UserData._id;
    }

    getFullname()
    {
        return this.UserData.fullname;
    }

    getAvatar()
    {
        return this.UserData.avatar;
    }

    getBirthday()
    {
        return this.UserData.birthday;
    }

    getLoginType()
    {
        return this.UserData.login_type
    }

    getCreatedAt()
    {
        return this.UserData.createdAt;
    }
}

