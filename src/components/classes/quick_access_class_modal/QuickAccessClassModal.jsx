import { useEffect, useState } from "react"
import './QuickAccessClassModal.css'
import {CloseOutlined} from '@ant-design/icons'
import Link from "next/link";


const randomImages = ['../blackboard.png', '../online-course.png', '../webinar.png']

function getRandomImage()
{
    const index = Math.floor(Math.random() * 101 + randomImages.length) % randomImages.length
    return randomImages[index]
}

function QuickAccessClassModal({OpenModal, handleOpenModalCallback, Classes})
{

    const Mock_classes = [
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
        {className: "Advanced Web course", description: "nothing", host: "65631813c9e3f1be5d3d8f98", grade_compositions: {gradeCompo_name: "quiz 1", scale: 1, is_finalized: false}},
    ]

    const displayClasses = Mock_classes.map((value) =>
    {
        return (

            <Link href='#' className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
                <div className="p-8 hover:bg-slate-100 flex justify-between">
                    <img className="inline max-w-4 w-10" src={getRandomImage()}/>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold inline">{value.className}</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black inline">Event Date</p>
                    <p className="mt-2 text-gray-500 inline max-w-10 truncate">Description: {value.description}</p>
                    <p className="mt-2 text-gray-500 inline">Event Details...</p>
                </div>
            </Link>
        )
    })

    const [modalDisplay, setModalDisplay] = useState({display: 'none'})

    useEffect(() =>
    {
        if(OpenModal == true)
        {
            setModalDisplay({display: 'block'})
        }
        else
        {
            setModalDisplay({display: 'none'})
        }
    }, [OpenModal])

    return(
        <>
            <div className="absolute md:ml-64 bg-gray-100 top-0 left-0 right-0 bottom-0 h-full" style={modalDisplay}>
                <div className="relative bg-blue-200 md:pt-32 pb-32 pt-12 h-full">
                    <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-quick-access-class-modal" id="modal">
                                <div role="alert" className="container mx-auto md:w-4/5 h-full">
                                <button className="close-modal-button" onClick={() => handleOpenModalCallback(false)}>
                                    <CloseOutlined/>
                                </button>
                                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 md:w-full shadow-xl shadow-gray-700 access-modal-display">
                                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Your classes</h1>
                                        {displayClasses}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default QuickAccessClassModal