'use client'

import {POST_sendRegisterOTP, POST_signUp} from "@/app/api/auth/sign_up/api"
import Link from "next/link"
import { useState } from "react"
import OtpModal from "../otp_modal/OtpModal"
import { HttpStatusCode } from "axios"


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

    async function handleSubmit(formData)
    {
        console.log("inside handle Submint")
        if(otpValue === undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please verify your email by the code we have sent to your email!")
            return
        }
        else if(fullname.length <  1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide your full name!")
            return
        }
        else if(email.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide your email!")
            return
        }
        else if(password.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide your password!")
            return
        }
        else if(confirmPassword.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please confirm your password!")
            return
        }
        else if(password != confirmPassword)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("The password is different from value of the confirmed password!")
            return
        }
        else if(birthday.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide your birthday!")
            return
        }


        formData.append("otp", otpValue)
        const {statusCode, responseBody} = await POST_signUp(formData)

        console.log("state:otpValue: " + otpValue)
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

    async function handleVerifyButtonOnClick()
    {
        if(email == undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide email!")
            return
        }
        else if(email.length == 0)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide email!")
            return
        }
        setIsModalOpen(true)
        //TODO: call send-OTP API to certain email
        const {statusCode, responseBody} = await POST_sendRegisterOTP(email)
        console.log(statusCode)
        console.log(responseBody)
    }
    
    let signUpButton = (otpValue === undefined) ? 
    <button type="button" onClick={handleVerifyButtonOnClick} className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700"
    >
        Verify
    </button> :
    <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700"
    >
        Sign Up
    </button>

    let re_verify_otp_button = (otpValue !== undefined) ?
    <div className="py-2">
        <p>I received incorrect CODE</p>
        <button type="button" onClick={handleVerifyButtonOnClick} className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700"
        >
            Send Code again
        </button> 
    </div>
    :
    <></>

    return(
        <>
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center" action={handleSubmit}>
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign up
                            </h1>
                            <div className="py-2 text-left">
                                <input type="text" className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                name="fullname"
                                placeholder="Full name" required
                                value={fullname}
                                onChange={(e) => {setFullname(e.target.value)}}/>
                            </div>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Email" required
                                name="email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Password" required
                                name="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                placeholder="Confirm Password" required
                                value={confirmPassword} 
                                onChange={(e) => {setConfirmPassword(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type='number' className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                placeholder="Phone Number" required
                                name="phone"
                                value={phoneNumber}
                                onChange={(e) => {setPhoneNumber(e.target.value)}}
                                />
                            </div>
                            <div className="py-2 text-left">
                                <input type='date' className="bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                placeholder="Your birthday" required
                                name="birthday"
                                value={birthday}
                                onChange={(e) => {setBirthday(e.target.value)}}
                                />
                            </div>
                            <div className="py-2">
                                {signUpButton}
                            </div>
                            <p>{resultMessage}</p>
                            
                            {re_verify_otp_button}
                        <div style={messageDisplay}>
                        </div>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="text-grey-dark hover:text-indigo-800" href="#"> Terms of Service </a> and 
                            <a className="text-grey-dark hover:text-indigo-800" href="#"> Privacy Policy </a>
                        </div>  
                    <div className="text-center mt-12">
                            <span>
                                Already have an account?
                            </span>
                            <Link href="/auth/sign_in" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800 ml-2">Sign in</Link>
                        </div>
                        </form>   
                    </div>
                </div>
            </section>
            <OtpModal OpenModal={isModalOpen} handleOpenModal={handleModalOpenCallback} handleReturnResult={getOtpValueFromModal}/>
        </>
    )
}

export default SignUpForm