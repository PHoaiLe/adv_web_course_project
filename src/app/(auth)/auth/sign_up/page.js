import './register.css';
import React from 'react';
import Link from 'next/link';
import '../../../globals.css'

function Page()
{
    return(
        <>
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-50 text-xl">Education</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="#">
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
            </div>
            </header>
            <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign up
                        </h1>
                        <div className="py-2 text-left">
                            <input type="fullname" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Full name" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="confirm_password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Confirm Password" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="phone_number" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Phone Number" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                Sign Up
                            </button>
                        </div>
                        <button type="submit" className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="text-grey-dark hover:text-indigo-800" href="#"> Terms of Service </a> and 
                        <a className="text-grey-dark hover:text-indigo-800" href="#"> Privacy Policy </a>
                    </div>  
                <div className="text-center mt-12">
                        <span>
                            Already have an account?
                        </span>
                        <a href="/auth/sign_in" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sign in</a>
                    </div>
                    </form>   
                </div>
            </div>
        </section>
        <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-dark-gray-800">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Web Advanced Programming</span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Members</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li>
                                <p>Banh Hao Toan</p>
                            </li>
                            <li>
                                <p>Le Hoai Phuong</p>
                            </li>
                            <li>
                                <p>Le Quoc Ky Anh</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Github</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Email</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li>
                                <p>bhtoan20@clc.fitus.edu.vn</p>
                            </li>
                            <li>
                                <p>lhphuong20@clc.fitus.edu.vn</p>
                            </li>
                            <li>
                                <p>lqkanh20@clc.fitus.edu.vn</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">University of Science</span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">227 Nguyen Van Cu, District 5, Ho Chi Minh City</span>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Page