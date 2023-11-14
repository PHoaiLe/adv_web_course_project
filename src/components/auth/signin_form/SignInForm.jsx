'use client'

import { POST_signIn } from "@/app/api/auth/sign_in/api"
import Link from "next/link"

function SignInForm()
{
    async function handleSubmit(formData)
    {
        //handle some error scenarioes
        //....

        const result = await POST_signIn(formData)
        console.log(result)
    }

    return(
        <>
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center" action={handleSubmit}>
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign in
                            </h1>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Enter your email"
                                name="email"
                                required
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Enter password"
                                name="password"
                                required
                                />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link href="#" className="hover:text-blue-700" >Forgot password?</Link>
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
        </>
    )
}

export default SignInForm