import Link from "next/link"
import UserDropdown from "@/components/UserDropdown"
import './NavBar.css'

function TopNavBar({UserInfo})
{

    // let signInNavigator = 
    // <Link href='/auth/sign_in'>
    //     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //         Sign In
    //         <svg
    //         fill="none"
    //         stroke="currentColor"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         className="w-4 h-4 ml-1"
    //         viewBox="0 0 24 24"
    //         >
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //         </svg>
    //     </button>
    // </Link>

    // let useDropdown = <UserDropdown/>

    // let userInfoDisplay = <></>

    // if(UserInfo != undefined)
    // {
    //     userInfoDisplay = useDropdown
    // }
    // else
    // {
    //     userInfoDisplay = signInNavigator
    // }

    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-large items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-50 text-xl app-name-logo">Educa</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/dashboard/">
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
                {/* {userInfoDisplay} */}
            </div>
        </header>
    )
}

export default TopNavBar