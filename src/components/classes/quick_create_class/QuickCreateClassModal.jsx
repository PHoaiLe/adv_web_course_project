'use client';

import { useEffect, useState } from "react"
import './QuickCreateClassModal.css'
import {CloseOutlined} from '@ant-design/icons'
import Link from "next/link";
import { POST_createAClass } from "@/app/api/classes/create_class/api";
import { HttpStatusCode } from "axios";
import {Modal, Button} from 'antd'
import {revalidatePath} from 'next/cache'
import { QuickModalTypes } from "../quick_modal_types";
import { useRouter } from "next/navigation";

function QuickCreateClassModal({OpenModal, handleOpenModalCallback, handleCreatedActionCallback})
{
    const [modalDisplay, setModalDisplay] = useState({display:'none'})
    const [resultMessage, setResultMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display:'none'})
    const [className, setClassName] = useState(undefined)
    const [classDescription, setClassDescription] = useState(undefined)
    
    const [successCreateModal, setSuccessCreateModal] = useState(false)
    const [newClass, setNewClass] = useState({})

    const router = useRouter()

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
            setMessageDisplay({display:'none'})
            setResultMessage(undefined)
            setClassName(undefined)
            setClassDescription(undefined)

            
            const createdClass = responseBody.class
            const latestCreatedClass = 
            {
                _id: createdClass.class_id,
                className: createdClass.class_name,
                description: createdClass.class_description,
                id: class_id
            }
            setNewClass(latestCreatedClass)
            setSuccessCreateModal(true)

            handleCreatedActionCallback(latestCreatedClass)
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

    function handleSuccessModalOk()
    {
        const class_id = newClass._id;
        const url = `/classes/${class_id}`
        router.push(url)
    }

    function handleSuccessModalCancel()
    {
        setSuccessCreateModal(false)
    }

    const successModalFooters = [
        <Button key={"cancel-button"} type="primary" onClick={handleSuccessModalCancel}>
            <p className="text-black hover:text-white">No, I will stay</p>
        </Button>,
        
        <Button key={"ok-button"} type="primary" onClick={handleSuccessModalOk} className="bg-blue-300"
            >
            <p className="text-black hover:text-white">Yes, go to the new class</p>
        </Button>
    ]

    return(
        <>
            <div className="fixed z-20 md:ml-64 bg-gray-100 top-0 left-0 right-0 bottom-0 h-full" style={modalDisplay}>
                <div className="relative bg-blue-200 md:pt-32 pb-32 pt-12 h-full">
                    <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-quick-create-class-modal" id="modal">
                                <div className="container mx-auto md:w-4/5 h-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="md:w-1/2">
                                            <button className="close-modal-button" onClick={() => handleOpenModalCallback(QuickModalTypes.QUICK_CREATE_CLASS_MODAL, false)}>
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

            <Modal
                key={"create-class-success"}
                open={successCreateModal}
                title={"Create class" + newClass.class_id + " successfully"}
                onOk={handleSuccessModalOk}
                onCancel={handleSuccessModalCancel}
                footer= {successModalFooters}
                >
                    Do you want to visit your new class {newClass.class_name}?
            </Modal>
        </>
    )
}

export default QuickCreateClassModal