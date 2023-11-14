import Link from "next/link"
import './TopNavBar.css'

function TopNavBar({UserInfo})
{
    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-50 text-xl">Education</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/dashboard">
                        <button className="mr-5 hover:text-gray-900">Home</button>
                    </Link>
                    <Link href="#">
                        <button className="mr-5 hover:text-gray-900">About</button>
                    </Link>
                    <Link href="#">
                        <button className="mr-5 hover:text-gray-900">Education</button>
                    </Link>
                    <Link href="#">
                        <button className="mr-5 hover:text-gray-900">Service</button>
                    </Link>
                </nav>
                <Link href='/auth/sign_in'>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Sign In
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                        >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                 </Link>
            </div>
        </header>
    )
}

export default TopNavBar