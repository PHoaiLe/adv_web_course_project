'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

function JoinClassByLinkTab()
{

    const [classLink, setClassLink] = useState(undefined)
    const [resultMessage, setResultMessage] = useState(undefined)
    const [messageDisplay, setMessageDisplay] = useState({display: 'none'})

    const router = useRouter()

    async function handleJoinClassSubmit(formData)
    {
        if(classLink === undefined)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide class code...")
            return
        }
        else if(classLink.length < 1)
        {
            setMessageDisplay({display:'block', color:'red'})
            setResultMessage("Please provide class code...")
            return
        }

        
    }

    return(
        <>
            <div>
                <form className="text-left text-lg py-2" action={handleJoinClassSubmit}>
                    <div className="py-2">
                        <label className="w-full">Invitation link</label>
                        <input className="mt-2 bg-gray-100 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                        name="classLink" placeholder="Provide the invitation link to join a class" value={classLink} onChange={(e) => {setClassLink(e.target.value)}}/>
                    </div>
                    <div className="text-center py-2" style={messageDisplay}>
                        {resultMessage}
                    </div>
                    <div className="w-full text-center py-2">
                        <button type="submit" className="w-full bg-blue-600 py-2 text-white font-sans text-lg font-medium">Join now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default JoinClassByLinkTab