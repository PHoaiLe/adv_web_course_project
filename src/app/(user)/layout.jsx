import WebTopNavBar from "@/components/main/top_nav_bar/TopNavBar"
import UserLeftMenu from "@/components/user/menu/UserLeftMenu"
import './layout.css'



export const metadata = {
    title: 'Advanced Web Project',
    description: 'Generated by create next app',
  }
function LayoutOfUserPages({children})
{
    return(
        <html>
            <head>
                <title>{metadata.title}</title>
            </head>
            <body>
                <WebTopNavBar/>
                <div className="hiden-frame"></div>
                <div className="user-main-frame">
                    <UserLeftMenu/>
                    <div className="user-detail-frame">
                        <div className="user-detail-container">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default LayoutOfUserPages