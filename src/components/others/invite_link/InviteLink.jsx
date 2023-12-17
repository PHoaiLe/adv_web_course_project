'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { POST_JoinClassByLink } from "@/app/api/classes/join_class/api"
import { HttpStatusCode } from "axios"
import {Modal} from 'antd'
import { useRouter } from "next/navigation"



function InviteLink({ClassId, ClassToken, IsUserLoggedIn})
{

    const join_button_key = 'join-button-key'
    const loginLink = '/auth/sign_in'
    const [askToLoginDisplay, setAskToLoginDisplay] = useState({display:'none'})
    const [openModal, setOpenModal] = useState(false)
    const [modalText, setModalText] = useState("")
    const [modalTextDisplay, setModalTextDisplay] = useState({color:'red'})
    const router = useRouter()
    const goToClassDetailLink = `/classes/${ClassId}`

    useEffect(() =>
    {
        if(IsUserLoggedIn == true)
        {
            setAskToLoginDisplay({display:'none'})
        }
        else
        {
            setAskToLoginDisplay({display:'block'})
        }
    }, [IsUserLoggedIn])


    function handleOpenNewWindow(event, refUrl)
    {
        event.preventDefault()
        window.open(refUrl)
    }

    async function handleJoinClassClick(event)
    {
        if(IsUserLoggedIn == false)
        {
            handleOpenNewWindow(event, loginLink)
            return
        }

        const {statusCode, responseBody} = await POST_JoinClassByLink(ClassId, ClassToken)
        if(statusCode == HttpStatusCode.Ok)
        {
            setModalText(`Join class ${ClassId} successfully. Do you want to visit the class?`)
            setModalTextDisplay({color:'black'})
            setOpenModal(true)
        }
        else if(statusCode < 0)
        {
            setModalText("Error connection. Please check you connection again...")
            setModalTextDisplay({color:'red'})
        }
        else
        {
            setModalText(`Join class ${ClassId} failed! Invalid invitation or missing some arguments`)
            setModalTextDisplay({color:'red'})
        }
    }

    function handleModalOk(e)
    {
        if(IsUserLoggedIn)
        {
            router.replace(goToClassDetailLink)
        }
    }

    function handleModalCancel(e)
    {
        setOpenModal(false)
    }

    return(
        <>
            <div className="flex justify-center flex-col items-center shadow-lg h-20 w-full rounded-lg">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="font-sans text-lg text-left mr-4">
                        Invitation of 
                        <span className="text-blue-700 px-2">{ClassId}.</span>
                    </div>
                    <button key={join_button_key}
                    className="font-sans text-lg text-center bg-blue-500 text-white rounded-full w-40 flex justify-center items-center h-8 hover:bg-blue-700"
                    onClick={handleJoinClassClick}
                    >Join now</button>
                </div>
                <div className="py-2" style={askToLoginDisplay}>
                    <div className="">
                        You haven't signed in our system yet.
                        <span className="text-blue-700 px-2 underline-offset-2 underline font-semibold">
                            <Link prefetch={false}
                            onClick={(e) => {handleOpenNewWindow(e, loginLink)}}
                            href={loginLink}>
                                Sign in now!
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <Modal
            open={openModal}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            title={"Join class"}
            >
                <div className="flex justify-center items-center py-2 px-2">
                    <div style={modalTextDisplay}>{modalText}</div>
                </div>
            </Modal>
        </>
    )
}

export default InviteLink