import './login.css'
import '../../../globals.css'
import Link from 'next/link';

function Page()
{    

    let backButton = 'login_back_homepage_button'
    return(
        <>
           <header className="text-gray-600 body-font">
                <div className='login-back-homepage'>
                    <Link key={backButton} href='/'>Back</Link>
                </div>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-50 text-xl">Education</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">About</a>
                        <a className="mr-5 hover:text-gray-900">Education</a>
                            <a className="mr-5 hover:text-gray-900">Service</a>
                </nav>
        </div>
            </header>
            
            <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign in
                        </h1>
                        <div className="py-2 text-left">
                            <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Enter your email" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Enter password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:text-blue-700" >Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Not having have an account?
                        </span>
                        <a href="/auth/sign_up" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sign up here</a>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">University of Science</span>
                    </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Web Advanced Progamming-20KTPM2</h2>
                    </div>
                </div>
            </div>
        </footer>

        </>

    )
}

export default Page