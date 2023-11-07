'use client';

import { useEffect, useState } from "react"
import './QuickCreateClassModal.css'
import {CloseOutlined} from '@ant-design/icons'
import Link from "next/link";
import { POST_createAClass } from "@/app/api/classes/create_class/api";
import { HttpStatusCode } from "axios";

function QuickCreateClassModal({OpenModal, handleOpenModalCallback})
{
    const [modalDisplay, setModalDisplay] = useState({display:'none'})
    const [resultMessage, setResultMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display:'none'})
    const [className, setClassName] = useState(undefined)
    const [classDescription, setClassDescription] = useState(undefined)

    useEffect(() =>
    {
        if(OpenModal == true)
        {
            setModalDisplay({display:'block'})
        }
        else
        {
            setModalDisplay({display:'none'})
        }
    }, [OpenModal])

    async function handleCreateClassSubmit(formData)
    {
        const {statusCode, responseBody} = await POST_createAClass(formData);

        if(statusCode == HttpStatusCode.Created)
        {
            setMessageDisplay({display:'block', color:'green'})
            setClassName(undefined)
            setClassDescription(undefined)
            setResultMessage("Create class successfully")
        }
        else if(statusCode < 0)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Error connection")
        }
        else
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage(responseBody.message)
        }
    }

    return(
        <>
            <div className="absolute md:ml-64 bg-gray-100 top-0 left-0 right-0 bottom-0 h-full" style={modalDisplay}>
                <div className="relative bg-blue-200 md:pt-32 pb-32 pt-12 h-full">
                    <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-quick-create-class-modal" id="modal">
                                <div className="container mx-auto md:w-4/5 h-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="md:w-1/2">
                                            <button className="close-modal-button" onClick={() => handleOpenModalCallback(false)}>
                                                <CloseOutlined/>
                                            </button>
                                        </div>
                                        <div className="py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 md:w-1/2 sm-w-full shadow-xl shadow-gray-700 create-modal-display">
                                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Create a new class</h1>
                                            <form className="text-center" action={handleCreateClassSubmit}>
                                                <div className="py-2 text-left">
                                                    <input type="text" className="bg-gray-50 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                                                    name="className"
                                                    placeholder="Class's name" required
                                                    value={className}
                                                    onChange={(e) => {setClassName(e.target.value)}}
                                                    />
                                                </div>
                                                <div className="py-2 text-left">
                                                    <input type="text" className="bg-gray-50 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " 
                                                    placeholder="Description" required
                                                    name="description"
                                                    value={classDescription}
                                                    onChange={(e) => {setClassDescription(e.target.value)}}
                                                    />
                                                </div>
                                                <div style={messageDisplay}>
                                                    <p>{resultMessage}</p>
                                                </div>
                                                <div className="py-2 my-2 bg-blue-700 rounded">
                                                    <button type="submit" className="w-full text-white text-lg rounded font-medium">Create</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickCreateClassModal