import TopNavBar from "@/components/main/top_nav_bar_2/TopNavBar"

function AuthRootLayout({children})
{
    return(
        <html lang='en'>
            <body>
                <TopNavBar />
                {children}
            </body>
        </html>
    )
}

export default AuthRootLayout