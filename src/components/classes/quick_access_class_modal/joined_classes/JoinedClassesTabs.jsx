'use client'

import {Modal, Button, Tooltip} from 'antd'
import {MoreOutlined, EditOutlined, ShareAltOutlined, CloseOutlined, CopyOutlined} from "@ant-design/icons"
import Link from "next/link";
import { useEffect, useState } from "react";
import { GET_getInvitation } from '@/app/api/classes/get_invitation/api';
import { HttpStatusCode } from 'axios';


const randomImages = ['../blackboard.png', '../online-course.png', '../webinar.png']

function getRandomImage()
{
    const index = Math.floor(Math.random() * 101 + randomImages.length) % randomImages.length
    return randomImages[index]
}


function JoinedClassesTabs({JoinedClasses})
{
    // const Mock_classes = 
    // [
    //     {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkase", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkasf", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkasg", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkass", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkash", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkasj", className: "Advanced Web course", description: "nothing"},
    //     {_id: "asdkoiw29ri90rjasjdfkask", className: "Advanced Web course", description: "nothing"},
    // ]


    console.log("joinClassTab")
    console.log(JoinedClasses)

    const defaultClassCodeCopyInstruction = "Copy class code"
    const defaultInvitationLinkInstruction = "Copy invitation link"
    const copiedAnnouncement = "Copied"
    const class_code_copy_button_key = "class-code-copy-button-key"
    const invitation_link_copy_button_key = "invitation-link-copy-button-key"

    const [openMoreButtons, setOpenMoreButtons] = useState([]);
    const [classSelectedToInvite, setClassSelectedToInvite] = useState(undefined)
    const [selectedIndex, setSelectedIndex] = useState(undefined)
    const [openGetInviteModal, setOpenGetInviteModal] = useState(false)
    

    const [tooltipClassCodeButtonMessage, setClassCodeButtonMessage] = useState(defaultClassCodeCopyInstruction)
    const [tooltipInvitationLinkButtonMessage, setInvitationLinkButtonMessage] = useState(defaultInvitationLinkInstruction)

    useEffect(() =>
    {
        if(JoinedClasses !== undefined && JoinedClasses.length > 0)
        {
            const initialClassStates = []
            JoinedClasses.forEach((value, index) =>
            {
                const item = 
                {
                    class: value,
                    invite_link: undefined,
                    createdAt: undefined,
                    updatedAt: undefined
                }
        
                initialClassStates.push(item)
            })

            const initialOpenMoreButtons = new Array(JoinedClasses.length).fill(false)

            setClassSelectedToInvite(initialClassStates)
            setOpenMoreButtons(initialOpenMoreButtons)
        }

    }, [])

    if(JoinedClasses === undefined)
    {
        return(
            <div className='flex justify-center items-center'>
                No class found
            </div>
        )
    }
    else if(JoinedClasses.length == 0)
    {
        return(
            <div className='flex justify-center items-center'>
                No class found
            </div>
        )
    }

    function handleMoreButtonClick(index)
    {
        const clonedOpenMoreButtons = openMoreButtons.slice()
        const nextStatus = !clonedOpenMoreButtons[index]
        clonedOpenMoreButtons[index] = nextStatus
        setOpenMoreButtons(clonedOpenMoreButtons)
    }

    async function handleInviteByLinkButtonClick(selectedClass, index)
    {
        setSelectedIndex(index)
        const storedSelectedClass = classSelectedToInvite[index]
        if(storedSelectedClass.invite_link === undefined)
        {
            const {statusCode, responseBody} = await GET_getInvitation(selectedClass._id)

            if(statusCode == HttpStatusCode.Created)
            {
                const invite_id = responseBody._id
                const class_id = responseBody.class_id
                const class_token = responseBody.class_token
                const createdAt = responseBody.createdAt
                const updatedAt = responseBody.updatedAt
                const newInviteLink = `${window.location.hostname}/c/invite/${encodeURIComponent(invite_id)}?class_id=${encodeURIComponent(class_id)}&class_token=${encodeURIComponent(class_token)}&updated=${encodeURIComponent(updatedAt)}`
                console.log(newInviteLink)
                const newItem = 
                {
                    class: selectedClass,
                    invite_link: newInviteLink,
                    createdAt: createdAt,
                    updatedAt: updatedAt
                }

                let clonedClassesSelectedToInvite = classSelectedToInvite.slice()
                clonedClassesSelectedToInvite[index] = newItem
                setClassSelectedToInvite(clonedClassesSelectedToInvite)
            }
            else if(statusCode < 0)
            {
                alert("Error connection...!")
            }
        }

        setOpenGetInviteModal(true)
    }

    function handleModalCancel()
    {
        setOpenGetInviteModal(false)
    }

    function handleModalOk()
    {
        setOpenGetInviteModal(false)
    }


    const displayClasses = JoinedClasses.map((value, index) =>
    {
        return (
            <div key={value._id} className='container flex rounded-xl shadow-sm overflow-hidden m-2 bg-white mx-auto hover:bg-slate-100'>
                <Link prefetch={false} href={`/classes/${value._id}`} className='w-full'>
                    <div className="p-8 flex justify-between items-center max-h-50 sm:max-h-40">
                        <img className="inline max-w-4 w-10 max-h-10" src={getRandomImage()}/>
                        <div className="uppercase tracking-wide text-sm w-40 text-wrap text-indigo-500 font-semibold inline text-left">{value.className}</div>
                        <div className="mt-2 inline w-1/2 text-justify line-clamp-3 text-wrap">
                            <p>Description: {value.description}</p>
                        </div>

                    </div>
                </Link>
                <div className="flex items-center w-20 justify-center">
                    <button key="more-button" className='hover:bg-blue-500 hover:text-white w-6 rounded-full h-6 relative flex justify-center items-center' onClick={(e) => {handleMoreButtonClick(index)}}>
                                <MoreOutlined style={{fontSize:'large'}}/>
                    </button>
                    <div className="absolute bg-white w-40 z-10 py-2 px-2 rounded shawdow-md right-0" style={openMoreButtons[index] == true ? {display: 'block'}: {display:'none'}}>
                        <div className="flex-col px-3 justify-end flex">
                            <button className="text-left hover:text-blue-600 text-sm font-normal block w-full whitespace-nowrap bg-white text-black-700 mb-2"><EditOutlined/> Edit</button>
                            <button className="text-left hover:text-blue-600 text-sm font-normal block w-full whitespace-nowrap bg-white text-black-700 mb-2"
                            onClick={(e) => {handleInviteByLinkButtonClick(value, index)}}><ShareAltOutlined /> Invite by link</button>
                            <button className="text-left text-gray-300 hover:text-blue-600 text-sm text-gray-300 font-normal block w-full whitespace-nowrap bg-white text-black-700"
                            onClick={(e) => {handleMoreButtonClick(index)}}><CloseOutlined/> Close</button>
                        </div>
                    </div>  
                </div>
            </div>
        )
    })

    let modalTitle = selectedIndex !== undefined ? classSelectedToInvite[selectedIndex].class.className : undefined
    let modalClassCode = selectedIndex !== undefined ? classSelectedToInvite[selectedIndex].class._id : undefined
    let modalInviteLink = selectedIndex !== undefined ? classSelectedToInvite[selectedIndex].invite_link : undefined

    function handleCopyToClickBoard(parent, textValue)
    {
        console.log(textValue)
        navigator.clipboard.writeText(textValue)
        if(parent == class_code_copy_button_key)
        {
            setClassCodeButtonMessage(copiedAnnouncement)
        }
        else if(parent == invitation_link_copy_button_key)
        {
            setInvitationLinkButtonMessage(copiedAnnouncement)
        }
    }
    
    return(
        <>
            <div className="overflow-auto">
                {displayClasses}
            </div>
            <Modal
                key={"get-invite-modal"}
                open={openGetInviteModal}
                title={"Invitation of ".concat(modalTitle)}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                footer= {undefined}
                >
                    <div className='font-sans'>
                        <h1 className='text-left text-lg py-2'>Class code</h1>
                        <div className='flex-row flex w-full bg-slate-50 items-center rounded hover:bg-slate-100'>
                            <p className='py-2 w-full px-2'>{modalClassCode}</p>
                            <Tooltip placement='top' title={tooltipClassCodeButtonMessage}>
                                <button key={class_code_copy_button_key} type='primary' className='w-12 text-center h-12 hover:bg-blue-500 hover:text-white'
                                onClick={(e) => {handleCopyToClickBoard(class_code_copy_button_key, modalClassCode)}}
                                onMouseLeave={(e) => {setClassCodeButtonMessage(defaultClassCodeCopyInstruction)}}
                                >
                                    <CopyOutlined style={{fontSize:'x-large'}}/>
                                </button>
                            </Tooltip>
                        </div>
                        <h3 className='text-left text-lg py-2'>Link of invitation</h3>
                        <div className='flex-row flex w-full bg-slate-50 items-center rounded hover:bg-slate-100'>
                            <p className='py-2 w-full px-2 overflow-x-auto overflow-y-hidden nowrap'>{modalInviteLink}</p>
                            <Tooltip placement='top' title={tooltipInvitationLinkButtonMessage}>
                                <button key={invitation_link_copy_button_key} type='primary' className='w-12 text-center h-12 hover:bg-blue-500 hover:text-white'
                                onClick={(e) => {handleCopyToClickBoard(invitation_link_copy_button_key, modalInviteLink)}}
                                onMouseLeave={(e) => {setInvitationLinkButtonMessage(defaultInvitationLinkInstruction)}}
                                >
                                    <CopyOutlined style={{fontSize:'x-large'}}/>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
            </Modal>
        </>
    )
}

export default JoinedClassesTabs