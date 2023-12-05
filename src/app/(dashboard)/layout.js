'use server';

import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';
import { getClonedUserData } from "../api/others/cloned_user_detail/api";
import GET_getUserInfo from "../api/user/account/personal_info/api";




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

    return(
        <html lang='en'>
            <body>
                <Navbar UserInfor={userInfo}/>
                <Sidebar />
                <div className="relative md:ml-64 bg-gray">
                    <div className="relative bg-blue md:pt-32 pb-32 pt-12">
                        <div className="px-4 md:px-10 mx-auto w-full">
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default DashboardRootLayout


