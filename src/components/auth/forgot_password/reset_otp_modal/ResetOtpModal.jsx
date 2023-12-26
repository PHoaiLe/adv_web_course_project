'use client';

import { ApiStatusCodes } from "@/app/api/ApiStatusCode";
import { POST_sendResetPasswordOtp } from "@/app/api/auth/forgot_password/api";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
//import './ResetOtpModal.css'
import "@/styles/globals.css"


function ResetOtpModal({ModalDisplay, handleReturnResultCallback})
{
    const router = useRouter()
    const [email, setEmail] = useState(undefined)

    async function handleResetOtp(formData)
    {
        console.log('submit reset otp')
        const {statusCode, responseBody} = await POST_sendResetPasswordOtp(email)
        // let statusCode = new Number(201)
        if(statusCode == HttpStatusCode.Created)
        {
            alert("Please check your email to get the reset code")
            handleReturnResultCallback({email})
        }
        else if(statusCode < 0)
        {
            alert("Something go wrong, please check your input")
        }
        else
        {
            alert(responseBody.message)
        }
        // alert("Please check your email to get the reset code")
        // handleReturnResultCallback({email})
    }

    function handleClick()
    {
        router.push('/auth/sign_in')
    }

    return(
        <>
            <div style={ModalDisplay}
            className="md:container md:mx-auto h-dvh px-4 bg-violet-500 rounded-lg py-32 mt-10 transition duration-150 ease-in-out z-10 absolute top-16 right-0 bottom-0 left-0">
                <form className="w-full border-black border-2 max-w-md mx-auto bg-white p-8 rounded-md shadow-md" action={handleResetOtp}>
                <h1 className="text-center font-bold mb-3">FORGOT PASSWORD</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
                    Email
                    </label>
                    <input required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="email"
                    id="reset-email"
                    name="email"
                    placeholder="Your email here to receive the reset code"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <button
                    type='submit'
                    className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-900 transition duration-300"
                >
                    Send Reset Code
                </button>
                <button
                    type='button'
                    className=" mt-3 w-full text-black text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-400 hover:text-white transition duration-300"
                    onClick={handleClick}
                >Cancel</button>
                </form>
            </div>
        </>
    )
}

export default ResetOtpModal