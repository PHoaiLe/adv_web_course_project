import Footer from "@/components/main/footer/Footer"
import NavBar from "@/components/main/top_nav_bar/NavBar"

function AuthRootLayout({children})
{
    return(
        <html lang='en'>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default AuthRootLayout
