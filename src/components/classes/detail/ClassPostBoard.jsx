'use client';
//import {EditOutlined} from '@ant-design/icons'

function ClassPostBoard()
{
    return(
        <>
            <div className="block rounded-lg bg-indigo-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Anh Le
                </div>
                <div className="mx-4 p-6">
                    <blockquote>
                        <p className="text-xl">
                        The next class will take place at Auditorium I from 1:00 PM to 4:00 PM. This session will feature professional exchanges with representatives from the following companies:
                        </p>
                    </blockquote>
                    <figcaption className="text-md text-neutral-600 dark:text-neutral-400">
                    <span className="font-semibold text-xs text-gray-700">
                        Netcompany:
                            </span>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    What are microservices and their benefits?
                                </span>
                            </li>
                                <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    Key principles of building microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    When to use microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    Core components of microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">                 
                                    Micro-frontend
                                </span>
                            </li> 
                    </figcaption>
                </div>
            </div>

            <div className="mt-4 block rounded-lg bg-indigo-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Anh Le
                </div>
                <div className="mx-4 p-6">
                    <blockquote>
                        <p className="text-xl">
                        Our class will have a mid-term test. Prepare carefully!
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className="mt-4 block rounded-lg bg-indigo-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Anh Le
                </div>
                <div className="mx-4 p-6">
                    <blockquote>
                        <p className="text-xl">
                        Anh Le has post a new assignment: Authentication
                        </p>
                        <button className="w-20 h-8 pl-2 mt-3 rounded-lg text-xl text-black bg-cyan-600 hover:bg-indigo-300 inline-flex items-center "
                        >Submit</button> 
                    </blockquote>
                </div>
            </div>
            {/* <div className="p-4 lg:w-5/2 md:w-full">
                <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le <a href="#"><EditOutlined className='text-lg text-black px-4 hover:text-indigo-500'/></a></h2>
                    <div className="border-t-4 border-neutral-400">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h1 className="text-gray-400 font-bold text-xl">
                                The next class will take place at Auditorium I from 1:00 PM to 4:00 PM. This session will feature professional exchanges with representatives from the following companies:
                            </h1>
                            <span className="font-semibold text-xs text-gray-700">
                                Netcompany:
                            </span>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    What are microservices and their benefits?
                                </span>
                            </li>
                                <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    Key principles of building microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    When to use microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">
                                    Core components of microservices
                                </span>
                            </li>
                            <li>
                                <span className="font-semibold text-xs text-gray-700">                 
                                    Micro-frontend
                                </span>
                            </li> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="p-4 lg:w-5/2 md:w-full">
                <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le <a href="#"><EditOutlined className='text-lg text-black px-4 hover:text-indigo-500'/></a></h2>
                    
                    <div className="border-t-4 border-neutral-400">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h1 className="text-gray-400 font-bold text-xl">
                    Our class will have a mid-term test. Prepare carefully!
                    </h1>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-5/2 md:w-full">
                <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col hover:bg-cyan-500 transition duration-300">
                    <div className="flex-grow">
                    <a href="#"><button className="w-full text-left font-bold rounded-md "><h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le has post a new assignment: Authentication</h2></button></a>
                    
                </div>
                </div>
            </div> */}
        </>
    )
}


export default ClassPostBoard