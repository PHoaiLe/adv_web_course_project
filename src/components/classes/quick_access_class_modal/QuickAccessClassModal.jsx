'use client';

import { useEffect, useState } from "react"
import './QuickAccessClassModal.css'
import {CloseOutlined} from '@ant-design/icons'
import {Tabs} from 'antd'
import CreatedClassesTabs from "./created_classes/CreatedClassesTabs";
import JoinedClassesTabs from "./joined_classes/JoinedClassesTabs";


function QuickAccessClassModal({OpenModal, handleOpenModalCallback, UserRole, ProvidedJoinedClasses, ProvidedAllClasses})
{
    
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

    const AllClassesTab = <CreatedClassesTabs CreatedClasses={ProvidedAllClasses}/>
    const JoinedClassesTab = <JoinedClassesTabs JoinedClasses={ProvidedJoinedClasses}/>

    const listOfTeacherTabs = [
        {icon: undefined, keyOfValue: 'created-classes', description: "Created", view: AllClassesTab},
        {icon: undefined, keyOfValue: 'joined-classes', description: "Joined", view: JoinedClassesTab},
    ]

    const listOfStudentTabs = [
        {icon: undefined, keyOfValue: 'joined-classes', description: "Joined", view: JoinedClassesTab},
    ]

    function getListOfTabs()
    {
        if(UserRole == "teacher")
        {
            return listOfTeacherTabs
        }
        else if(UserRole == "student")
        {
            return listOfStudentTabs
        }
        // return []
        return listOfTeacherTabs
    }

    const listOfTabs = getListOfTabs()

    const displayTabs = 
    <Tabs
        defaultActiveKey="0"
        items={listOfTabs.map((value, i) => {
                const id = String(i+1)
                const Icon = value.icon
                const description = value.description
                const keyOfValue = value.key
                const childrenView = value.view
                return {
                    label: (
                        <span>
                            {description}
                        </span>
                    ),
                    key: id,
                    children: childrenView
                }
            })
        }
    />

    return(
        <>
            <div className="absolute md:ml-64 bg-gray-100 top-0 left-0 right-0 bottom-0 h-full" style={modalDisplay}>
                <div className="relative bg-blue-200 md:pt-32 pb-32 pt-12 h-full">
                    <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-quick-access-class-modal" id="modal">
                                <div role="alert" className="container mx-auto md:w-4/5 h-full overflow-hidden">
                                <button className="close-modal-button" onClick={() => handleOpenModalCallback(false)}>
                                    <CloseOutlined/>
                                </button>
                                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 md:w-full shadow-xl shadow-gray-700 access-modal-display">
                                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 overflow-hidden">Your classes</h1>
                                        {displayTabs}
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