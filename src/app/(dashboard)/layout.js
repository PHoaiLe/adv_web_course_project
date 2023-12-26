'use server';

import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
import DashboardFooter from "@/components/main/footer/DashboardFooter";
import { getClonedUserData } from "../api/others/cloned_user_detail/api";
import '@/styles/globals.css';
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

    let userInfo = undefined
    let JoinedClasses = undefined
    let AllClasses = undefined

    // Dynamic server error, the below lines of code
    try
    {
        userInfo = await getClonedUserData()
        console.log(userInfo)
    }
    catch(err)
    {
        userInfo = undefined
    }

    if(userInfo === undefined)
    {
        userInfo = (await GET_getUserInfo()).responseBody
    }

    if(userInfo.role == "teacher")
    {
        const responseOfAllClasses = await GET_getAllClassesOfTeacher()
        const responseOfJoinedClasses = await GET_getJoinedClassesOfTeacher();
        if(responseOfAllClasses.statusCode == ApiStatusCodes.TEACHER_GET_ALL_CLASSES_SUCCESS)
        {
            if(responseOfAllClasses.responseBody.status === undefined) //a list of classes OR an empty object
            {
                if(responseOfAllClasses.responseBody[0] !== undefined)
                {
                    AllClasses = responseOfAllClasses.responseBody
                }
                else
                {
                    AllClasses = []
                }
            }
        }
        else
        {
            AllClasses = []
        }

        if(responseOfJoinedClasses.statusCode == ApiStatusCodes.TEACHER_GET_JOINED_CLASSES_SUCCESS)
        {
            if(responseOfJoinedClasses.responseBody.status === undefined) //a list of classes OR an empty object
            {
                if(responseOfJoinedClasses.responseBody[0] !== undefined)
                {
                    JoinedClasses = responseOfJoinedClasses.responseBody
                }
                else
                {
                    JoinedClasses = []
                }
            }
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

    

    return(
        <html lang='en'>
            <body>
                <Sidebar />
                <Navbar UserInfor={userInfo} ProvidedAllClasses={AllClasses} ProvidedJoinedClasses={JoinedClasses}/>
                <div className="relative md:ml-64">
                    <div className="relative md:pt-32 pb-32 pt-12">
                        <div className="px-4 md:px-10 mx-auto w-full">
                            <div>
                                <div className="flex flex-wrap">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DashboardFooter/>
            
            </body>
        </html>
    )
}

export default DashboardRootLayout