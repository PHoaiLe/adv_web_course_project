'use client'

import { ApiStatusCodes } from "@/app/api/ApiStatusCode"
import { GET_signInWithFacebook, GET_signInWithGoogle, POST_signIn } from "@/app/api/auth/sign_in/api"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import './SignInForm.css'

function SignInForm()
{
    const router = useRouter();
    const [error_message_status, setMessageStatus] = useState({display: "none"})
    const [error_message, setError_Message] = useState("")

    async function handleSubmit(formData)
    {
        //handle some error scenarioes
        //...

        const result = await POST_signIn(formData)
        console.log(result)
        if(result.statusCode == ApiStatusCodes.SIGN_IN_SUCCESS)
        {
            setMessageStatus({display:"none"})
            router.push("/dashboard/")
        }
        else if(result.statusCode > 0) //credentials problems
        {
            setError_Message(result.responseBody.message)
            setMessageStatus({display:"block", color:"red"})
        }
        else //statusCode < 0
        {
            setError_Message(result.responseBody)
            setMessageStatus({display:"block"})
        }
    }

    function handleSocialAuth(type)
    {
        switch(type)
        {
            case 'google':
                {
                    GET_signInWithGoogle()
                } break;
            case 'facebook':
                {
                    GET_signInWithFacebook()
                }
        }
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
                        <div className="text-center" style={error_message_status}>
                            <p>{error_message}</p>
                        </div>
                        <div className="text-center">
                            <Link href="/auth/forgot_password" className="hover:text-blue-700" >Forgot password?</Link>
                        </div>
                        <div className="text-center mt-4">
                            <span className="mr-2">
                                Not having have an account?
                            </span>
                            <Link href="/auth/sign_up" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sign up here</Link>
                        </div>
                        <div className="text-center mt-6 mb-3 extend-signin-label font-semibold">
                            Or you can sign in by
                        </div>
                        <div className="social-auth">
                            <ul>
                                <li>
                                    <button onClick={() => handleSocialAuth('google')} className="social-item"><img className="social-item-img" src='../google.png' alt="Google" /></button>
                                </li>
                                <li>
                                    <button onClick={() => handleSocialAuth('facebook')} className="social-item"><img className="social-item-img" src='../facebook.png' alt="Facebook" /></button>
                                </li>
                            </ul>
                        </div>
    
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInForm