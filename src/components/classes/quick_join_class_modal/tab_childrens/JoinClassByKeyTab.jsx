'use client'

import { POST_joinClassByCode, POST_joinClassByCodeOfStudent } from "@/app/api/classes/join_class/api"
import { HttpStatusCode } from "axios"
import { useState } from "react"
import {Modal, Button} from 'antd'
import { useRouter } from "next/navigation"


function JoinClassByKeyTab()
{
    const [classCode, setClassCode] = useState(undefined)
    const [resultMessage, setResultMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display: 'none'})

    const [successJoinClassModal, setSuccessJoinClassModal] = useState(false)
    const [newClass, setNewClass] = useState({})
    const router = useRouter()

    async function handleJoinClassSubmit(formData)
    {
        if(classCode === undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide class code...")
            return
        }
        else if(classCode.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide class code...")
            return
        }

        const classKey = formData.get("classKey")
        const {statusCode, responseBody} = await POST_joinClassByCodeOfStudent(classKey)

        if(statusCode == HttpStatusCode.Created)
        {
            setNewClass(responseBody)
        }
        else if(statusCode < 0)
        {
            setMessageDisplay({display: 'block', color:'red'})
            setResultMessage("Error connection...")
            return
        }
        else
        {
            const responseMessage = responseBody.message
            if(responseMessage)
            {
                setMessageDisplay({display: 'block', color:'red'})
                setResultMessage(responseMessage)
                return
            }
            else
            {
                setMessageDisplay({display: 'block', color:'red'})
                setResultMessage(`Failed to join class ${classKey}`)
                return
            }
        }

    }

    //go to the new class
    function handleSuccessModalOk()
    {
        const linkToClassDetail = `/classes/${newClass._id}`
        router.push()
    }

    //close modal
    function handleSuccessModalCancel()
    {
        setSuccessJoinClassModal(false)   
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
            <div>
                <form className="text-left text-lg py-2" action={handleJoinClassSubmit}>
                    <div className="py-2">
                        <label className="w-full">Class key</label>
                        <input className="mt-2 bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                        name="classKey" placeholder="Provide the key of the class" value={classCode} onChange={(e) => {setClassCode(e.target.value)}}/>
                    </div>
                    <div className="text-center py-2" style={messageDisplay}>
                        {resultMessage}
                    </div>
                    <div className="w-full text-center py-2">
                        <button type="submit" className="w-full bg-blue-600 py-2 text-white font-sans text-lg font-medium">Join now</button>
                    </div>
                </form>
            </div>

            <Modal
                key={"join-class-success"}
                open={successJoinClassModal}
                title={"Join class" + newClass.class_id + " successfully"}
                onOk={handleSuccessModalOk}
                onCancel={handleSuccessModalCancel}
                footer= {successModalFooters}
                >
                    Do you want to visit your new class?
            </Modal>
        </>
    )
}

export default JoinClassByKeyTab