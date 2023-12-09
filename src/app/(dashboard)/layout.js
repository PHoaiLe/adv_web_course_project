'use server';

import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';
import { getClonedUserData } from "../api/others/cloned_user_detail/api";
import GET_getUserInfo from "../api/user/account/personal_info/api";
import { GET_getAllClassesOfTeacher, GET_getJoinedClassesOfTeacher } from "../api/classes/get_class/teacher/api";
import { GET_getJoinedClassesOfStudent } from "../api/classes/get_class/student/api";
import { ApiStatusCodes } from "../api/ApiStatusCode";




async function DashboardRootLayout({children})
{
    // return (
    //     <html lang='en'>
    //         <body>
    //             <Sidebar />
    //             <Navbar />
    //             {children}
    //             <Footer />
    //         </body>
    //     </html>
    // )

    let userInfo = await getClonedUserData()
    if(userInfo === undefined)
    {
        userInfo = (await GET_getUserInfo()).responseBody
    }

    let JoinedClasses = undefined
    let CreatedClasses = undefined

    if(userInfo.role == "teacher")
    {
        const responseOfAllClasses = await GET_getAllClassesOfTeacher()
        const responseOfJoinedClasses = await GET_getJoinedClassesOfTeacher();
        if(responseOfAllClasses.statusCode == ApiStatusCodes.TEACHER_GET_ALL_CLASSES_SUCCESS)
        {
            CreatedClasses = responseOfAllClasses.responseBody
        }
        else
        {
            CreatedClasses = []
        }

        if(responseOfJoinedClasses.statusCode == ApiStatusCodes.TEACHER_GET_JOINED_CLASSES_SUCCESS)
        {
            JoinedClasses = responseOfJoinedClasses.responseBody
        }
        else
        {
            JoinedClasses = []
        }
    }
    else if(userInfo.role == "student")
    {
        const responseOfJoinedClasses = await GET_getJoinedClassesOfStudent()

        if(responseOfJoinedClasses.statusCode == ApiStatusCodes.STUDENT_GET_JOINED_CLASSES_SUCCESS)
        {
            JoinedClasses = responseOfJoinedClasses.responseBody
        }
        else
        {
            JoinedClasses = []
        }
    }

    if(CreatedClasses !== undefined)
    {
        
    }

    

    return(
        <html lang='en'>
            <body>
                <Sidebar />
                <Navbar UserInfor={userInfo}/>
                {children}
            </body>
        </html>
    )
}

export default DashboardRootLayout