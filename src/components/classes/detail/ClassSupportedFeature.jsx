'use client'

import { useState } from "react"
import MemberModal from "../member_modal/MemberModal"
import { usePathname, useRouter } from "next/navigation"
//import CreatePostModal from "../create_post_modal/CreatePostModal"



function ClassSupportedFeature({ProvideProperties})
{

    const [viewMemberModalOpen, setViewMemberModalOpen] = useState(false)
    const router = useRouter();
    const pathOfGrade = usePathname() + "/grade";

    function handleViewMemberModalOpenCallback(value)
    {
        setViewMemberModalOpen(value)
    }


    function handleGradeRedirect(event)
    {
        router.push(pathOfGrade)
    }

    return(
        <>
        <div className="container py-12 flex flex-wrap">
            <div className="mx-4 max-w-sm rounded overflow-hidden shadow-lg bg-violet-200">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Grade List</div>
                    <button className="w-20 h-8 pl-1.5 mt-3 rounded-full text-black bg-cyan-600 hover:bg-indigo-300 inline-flex items-center "
                    onClick={(e) => {handleGradeRedirect(e)}}
                    >Click here</button> 
            </div>
            </div>

            <div className="mx-4 max-w-sm rounded overflow-hidden shadow-lg bg-violet-200">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Member List</div>
                    <button className="w-20 h-8 pl-1.5 mt-3 rounded-full text-black bg-cyan-600 hover:bg-indigo-300 inline-flex items-center "
                    onClick={(e) => {setViewMemberModalOpen(true)}}
                    >Click here</button> 
            </div>
            </div>            
        </div>
            <MemberModal ModalOpen={viewMemberModalOpen} handleModalOpenCallback={handleViewMemberModalOpenCallback}/>
        </>
    )
}

export default ClassSupportedFeature