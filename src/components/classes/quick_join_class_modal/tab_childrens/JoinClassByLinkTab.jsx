'use client';

import { POST_JoinClassByLink, POST_joinClassByLinkOfStudent } from "@/app/api/classes/join_class/api";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function JoinClassByLinkTab()
{

    const [classLink, setClassLink] = useState("")
    const [resultMessage, setResultMessage] = useState("")
    const [messageDisplay, setMessageDisplay] = useState({display: 'none'})
    const nameOfInputForm = "classLink"

    const router = useRouter()

    function extract_ClassId_ClassToken_FromLink(inviteLink)
    {
        let result = {class_id: undefined, class_token: undefined}
        const classIdParamName = "class_id="
        const classTokenParamName = "class_token="
        const separator = "&"

        if(inviteLink === undefined)
        {
            return result
        }
        else if(inviteLink.length < 1)
        {
            return result
        }

        const indexOfClassIdParamName = inviteLink.indexOf(classIdParamName)
        if(indexOfClassIdParamName < 0)
        {
            return result
        }
        const endIndexOfClassId = inviteLink.indexOf(separator, indexOfClassIdParamName)

        const indexOfClassTokenParamName = inviteLink.indexOf(classTokenParamName)
        if(indexOfClassTokenParamName < 0)
        {
            return result
        }
        const endIndexOfClassToken = inviteLink.indexOf(separator, endIndexOfClassId + 1)

        const class_id = inviteLink.substring((indexOfClassIdParamName + classIdParamName.length), endIndexOfClassId)
        const class_token = inviteLink.substring((indexOfClassTokenParamName + classTokenParamName.length), endIndexOfClassToken)
        console.log(`classId: ${class_id}`)
        console.log(`classToken: ${class_token}`)

        if(class_id !== undefined && class_token !== undefined)
        {
            result =
            {
                class_id: class_id,
                class_token: class_token
            }
        }

        return result
    }

    async function handleJoinClassSubmit(formData)
    {
        if(classLink === undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide valid link...")
            return
        }
        else if(classLink.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide valid link...")
            return
        }

        const inviteLink = formData.get(nameOfInputForm)
        const result = extract_ClassId_ClassToken_FromLink(inviteLink)

        if(result.class_id === undefined || result.class_token === undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide valid link...")
            return
        }

        const {statusCode, responseBody} = await POST_JoinClassByLink(result.class_id, result.class_token)
        if(statusCode == HttpStatusCode.Ok)
        {
            setMessageDisplay({display:'block', color:'green'})
            setResultMessage("Join class successfully...")
        }
        else if(statusCode < 0)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Error in connection...")
        }
        else
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Join class failed. Cannot find the valid invitation.")
        }
    }

    return(
        <>
            <div>
                <form className="text-left text-lg py-2" action={handleJoinClassSubmit}>
                    <div className="py-2">
                        <label className="w-full">Invitation link</label>
                        <input className="mt-2 bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                        name={nameOfInputForm} placeholder="Provide the invitation link to join a class" value={classLink} onChange={(e) => {setClassLink(e.target.value)}}/>
                    </div>
                    <div className="text-center py-2" style={messageDisplay}>
                        {resultMessage}
                    </div>
                    <div className="w-full text-center py-2">
                        <button type="submit" className="w-full bg-blue-600 py-2 text-white font-sans text-lg font-medium"
                        >Join now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default JoinClassByLinkTab