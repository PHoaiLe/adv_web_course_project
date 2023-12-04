'use client'
import Link from "next/link";

const randomImages = ['../blackboard.png', '../online-course.png', '../webinar.png']

function getRandomImage()
{
    const index = Math.floor(Math.random() * 101 + randomImages.length) % randomImages.length
    return randomImages[index]
}


function CreatedClassesTabs({CreatedClasses})
{
    const Mock_classes = 
    [
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
        {_id: "asdkoiw29ri90rjasjdfkasd", className: "Advanced Web course", description: "nothing"},
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

    return(
        <>
            <div className="overflow-auto">
                {displayClasses}
            </div>
        </>
    )
}


export default CreatedClassesTabs