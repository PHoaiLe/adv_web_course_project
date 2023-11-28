import Navbar from "@/components/Navbar.js";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';

function DashboardRootLayout({children})
{
    return (
        <html lang='en'>
            <body>
                <Sidebar />
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default DashboardRootLayout