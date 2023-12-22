'use client'

import {POST_signUp} from "@/app/api/auth/sign_up/api"
import Link from "next/link"
import { useState } from "react"
import OtpModal from "../otp_modal/OtpModal"
import { HttpStatusCode } from "axios"
import { useRouter } from "next/navigation"


function SignUpForm()
{
    const [fullname, setFullname] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)
    const [phoneNumber, setPhoneNumber] = useState(undefined)
    const [birthday, setBirthday] = useState(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [otpValue, setOtpValue] = useState(undefined)
    const [resultMessage, setResultMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display:'none'})

    const router = useRouter();

    async function handleSubmit(formData)
    {
        console.log("inside handle Submint")
        if(otpValue === undefined)
        {
            setResultMessage("Please verify your email by the code we have sent to your email!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(fullname.length <  1)
        {
            setResultMessage("Please provide your full name!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(email.length < 1)
        {
            setResultMessage("Please provide your email!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(password.length < 1)
        {
            setResultMessage("Please provide your password!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(confirmPassword.length < 1)
        {
            setResultMessage("Please confirm your password!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(password != confirmPassword)
        {
            setResultMessage("The password is different from value of the confirmed password!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }
        else if(birthday.length < 1)
        {
            setResultMessage("Please provide your birthday!")
            setMessageDisplay({display:'block', color:'red'})
            return
        }


        formData.append("otp", otpValue)
        const {statusCode, responseBody} = await POST_signUp(formData)
        console.log(statusCode)
        console.log(responseBody)
        if(statusCode == HttpStatusCode.Created)
        {
            router.push("/auth/sign_in")
        }
        else
        {
            if(responseBody.message)
            {
                setMessageDisplay({display: 'block', color: 'red'})
                setResultMessage(responseBody.message)
            }
            else
            {
                setMessageDisplay({display: 'block', color: 'red'})
                setResultMessage("Sign up failed, invalid code or invalid email...")
            }
        }
    }

    function handleModalOpenCallback(val)
    {
        setIsModalOpen(val)
    }

    function getOtpValueFromModal(OtpValue)
    {
        console.log("Otp value: " + OtpValue)
        setOtpValue(OtpValue)
    }
    
    return(
        <>
            <section className="mt-6 mb-6 min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center" action={handleSubmit}>
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign up
                            </h1>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                name="fullname"
                                placeholder="Full name" required
                                value={fullname}
                                onChange={(e) => {() => setFullname(e.target.value)}}/>
                            </div>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Email" required
                                name="email"
                                value={email}
                                onChange={(e) => {() => setEmail(e.target.value)}}/>
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Password" required
                                name="password"
                                value={password}
                                onChange={(e) => {() => setPassword(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="confirm_password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Confirm Password" required
                                value={confirmPassword} 
                                onChange={(e) => {() => setConfirmPassword(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type='number' className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                placeholder="Phone Number" required
                                name="phone"
                                value={phoneNumber}
                                onChange={(e) => {() => setPhoneNumber(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type='date' className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                placeholder="Your birthday" required
                                name="birthday"
                                value={birthday}
                                onChange={(e) => {() => setBirthday(e.target.value)}}
                                />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700"
                                >
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
                            <Link href="/auth/sign_in" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sign in</Link>
                        </div>
                        </form>   
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpForm