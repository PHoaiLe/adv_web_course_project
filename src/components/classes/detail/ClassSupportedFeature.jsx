'use client'

import { useState } from "react"
import MemberModal from "../member_modal/MemberModal"




function ClassSupportedFeature({ProvideProperties})
{

    const [viewMemberModalOpen, setViewMemberModalOpen] = useState(false)

    function handleViewMemberModalOpenCallback(value)
    {
        setViewMemberModalOpen(value)
    }

    return(
        <>

            <div className="container px-4 py-12 flex flex-wrap">
                <div className="flex flex-auto -m-4">
                    <div className="p-4 lg:w-64 md:w-full">
                        <div className="flex border-2 rounded-lg border-neutral-600 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Danh sách điểm</h2>
                                <button className="mt-3 text-indigo-500 hover:text-black hover:bg-indigo-300 inline-flex items-center ring ring-indigo-600 ring-offset-2">Xem tại đây</button> 
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-64 md:w-full">
                        <div className="flex border-2 rounded-lg border-neutral-600 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Danh sách lớp</h2>
                                <button className="mt-3 text-indigo-500 hover:text-black hover:bg-indigo-300 inline-flex items-center ring ring-indigo-600 ring-offset-2"
                                onClick={(e) => {setViewMemberModalOpen(true)}}
                                >Xem tại đây</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MemberModal ModalOpen={viewMemberModalOpen} handleModalOpenCallback={handleViewMemberModalOpenCallback}/>
        </>
    )
}

export default ClassSupportedFeature