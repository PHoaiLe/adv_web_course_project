'use client';

import { ApiStatusCodes } from "@/app/api/ApiStatusCode";
import { POST_sendResetPasswordRequest } from "@/app/api/auth/forgot_password/api";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import './ResetPasswordForm.css'
import { HttpStatusCode } from "axios";

function ResetPasswordForm({ProvidedEmail})
{
    const router = useRouter()
    const [email, setEmail] = useState(undefined)
    const [otp, setOtp] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)
    const [messageStyle, setMessageStyle] = useState({display:'none', color:'red'})
    const [errorMessage, setMessage] = useState(undefined)

    useEffect(() =>
    {
        setEmail(ProvidedEmail)
    }, [])

    async function handleResetPasswordSubmition(formData)
    {
        if(checkCorrectOTPFormat(otp) == false)
        {
            setMessage("Incorrect format of reset code, please check again")
            setMessageStyle({display:'block', color:'red'})
        }
        else if(password != confirmPassword)
        {
            setMessage("Password and confirm password are not similar, please check again")
            setMessageStyle({display:'block', color:'red'})
        }
        else
        {
            setMessage(undefined)
            setMessageStyle({display:'none', color:'red'})
            const {statusCode, responseBody} = POST_sendResetPasswordRequest(formData)

            if(statusCode == HttpStatusCode.Created)
            {
                setMessage(responseBody.message)
                setMessageStyle({display:'block', color:'green'})
            }
            else if(statusCode < 0)
            {
                setMessage(responseBody.message)
                setMessageStyle({display:'block', color:'red'})
            }
            else if(statusCode === undefined)
            {
                setMessage(responseBody.message)
                setMessageStyle({display:'block', color:'red'})
            }
        }
    }

    function handleCancelButtonClick()
    {
        router.push("/auth/sign_in")
    }

    function checkCorrectOTPFormat(value)
    {
        if(value.length < 6 || value.length > 6)
        {
            return false;
        }


        for(let i = 0; i < value.length; i++)
        {
            let parsedValue = Number.parseInt(value.charAt(i))
            if(Number.isNaN(parsedValue) == true)
            {
                return false;
            }
        }
        
        return true;
    }

    return(
        <>
            <div className="container mx-auto py-8 w-100 reset-password-frame">
                <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-md shadow-md" action={handleResetPasswordSubmition}>
                    <h1 className="text-center font-bold mb-3">RESET PASSWORD</h1>
                    <div className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Reset code sent!</span> Now you can change your password.
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
                        Your email
                        </label>
                        <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your OTP sent by your email"
                        value={email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="otp">
                        OTP
                        </label>
                        <input required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="otp"
                        name="otp"
                        placeholder="Enter your OTP sent by your email"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="password">Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="password" id="password" name="password" placeholder="Enter your new password" required
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="confirm-password">Confirm Password</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="password" id="rewrite-password" name="rewrite_password" placeholder="Confirm password" required
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>  
                    <div className="mt-5" style={messageStyle}>{errorMessage}</div>
                    <button
                        className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-900 transition duration-300 mt-4"
                        type="submit"
                    >
                        Update Password
                    </button>
                    <button
                        className="w-full text-black text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-400 hover:text-white transition duration-300 mt-4"
                        type="button" onClick={handleCancelButtonClick}
                    >
                        Cancel
                    </button>
                </form>

            </div>
        </>
    )
}

export default ResetPasswordForm