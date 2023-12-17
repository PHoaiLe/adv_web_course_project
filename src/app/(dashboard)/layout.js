'use server';

import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
//import Footer from "@/components/main/footer/Footer";
import { getClonedUserData } from "@/data/ClonedUserData";
import '@/styles/globals.css';

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
    const userInfo = await getClonedUserData()
    console.log(userInfo)

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
                {/* <Footer/> */}
            </body>
        </html>
    )
}

export default DashboardRootLayout


