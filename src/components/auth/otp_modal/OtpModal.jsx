'use client';

import { useEffect, useState } from "react";
import './OtpModal.css'

function OtpModal({OpenModal, handleOpenModal, TargetEmail, handleReturnResult})
{
    const [style, setStyle] = useState({display: 'none'})
    const [otpValue, setOtpValue] = useState(undefined)
    const [errorMessage, setMessage] = useState(undefined)
    const [messageStyle, setMessageStyle] = useState({display: 'none', color:'red'})

    useEffect(() => 
    {
        modalHandler(OpenModal)
    }, [OpenModal])

    function modalHandler(val) 
    {
        if (val)    
        {
            // fadeIn();
            setStyle({display: "block"})
        } 
        else 
        {
            // fadeOut();
            setStyle({display: "none"})
        }
    }

    function handleSubmitOtpValue()
    {
        if(otpValue === undefined)
        {
            setMessage("please provide the OTP code to verify your email")
            setMessageStyle({display: 'block', color: 'red'})
        }
        else if(checkCorrectOTPFormat(otpValue) == false)
        {
            setMessage("please provide the correct OTP code sent to your email")
            setMessageStyle({display: 'block', color: 'red'})
        }
        else
        {
            setMessage(undefined)
            setMessageStyle({display: 'none', color:'red'})
            handleReturnResult(otpValue)
            handleOpenModal(false)
        }
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
        <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-otp-modal" id="modal" style={style}>
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">

                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Email verification</h1>
                    <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">The OTP code sent to your registered email</label>
                    <input id="name" required
                    onChange={(e) => {setOtpValue(e.target.value)}}
                    className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" 
                    placeholder="6 digits" />
                    <div className="mb-5" style={messageStyle}>{errorMessage}</div>
                    <div className="flex items-center justify-start w-full">
                        <button onClick={handleSubmitOtpValue}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={() => {handleOpenModal(false)}}>Cancel</button>
                    </div>
                    <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button" onClick={() => {handleOpenModal(false)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>
    )
}

export default OtpModal