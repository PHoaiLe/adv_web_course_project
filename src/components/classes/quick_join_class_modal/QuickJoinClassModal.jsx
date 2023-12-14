'use client';

import { useEffect, useState } from "react";
import {CloseOutlined, LinkOutlined, KeyOutlined} from '@ant-design/icons'
import {Tabs} from 'antd'
import JoinClassByKeyTab from "./tab_childrens/JoinClassByKeyTab";
import JoinClassByLinkTab from "./tab_childrens/JoinClassByLinkTab";
import { JoinClassModalMode } from "./JoinClassModalMode";
import { QuickModalTypes } from "../quick_modal_types";

const samples = [
    {icon: KeyOutlined, description: "Class key", key: JoinClassModalMode.JOIN_BY_CODE, view: <JoinClassByKeyTab key={JoinClassModalMode.JOIN_BY_CODE}/>}, 
    {icon: LinkOutlined, description: "Link", key: JoinClassModalMode.JOIN_BY_LINK, view: <JoinClassByLinkTab key={JoinClassModalMode.JOIN_BY_LINK}/>}
]
const modes = new Map()

samples.forEach((value, index) => 
{
    modes.set(value.key, value)
})

function QuickJoinClassModal({OpendModal, handleOpenModalCallback, ModalModes})
{
    const [modalDisplay, setModalDisplay] = useState({display: 'none'})
    const [listOfTabs, setListOfTabs] = useState([])

    useEffect(() =>
    {
        if(OpendModal == true)
        {
            setModalDisplay({display: 'block'})
        }
        else
        {
            setModalDisplay({display:'none'})
        }
    }, [OpendModal])

    useEffect(() =>
    {
        const clonedListOfTabs = []
        ModalModes.forEach((value, index) => 
        {
            clonedListOfTabs.push(modes.get(value))
        })

        setListOfTabs(clonedListOfTabs)
        
    }, [])


    // const listOfTabs = [
    //     {icon: KeyOutlined, description: "Class key", key:'by_class', view: <JoinClassByKeyTab />}, 
    //     {icon: LinkOutlined, description: "Link", key:'by_link', view: <JoinClassByLinkTab />}
    // ]

    return(
        <>
            <div className="absolute md:ml-64 bg-gray-100 top-0 left-0 right-0 bottom-0 h-full" style={modalDisplay}>
                <div className="relative bg-blue-200 md:pt-32 pb-32 pt-12 h-full">
                    <div className="px-4 md:px-10 mx-auto w-full h-full">
                            <div className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 custom-quick-create-class-modal" id="modal">
                                <div className="container mx-auto md:w-4/5 h-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="md:w-1/2">
                                            <button className="close-modal-button" onClick={() => handleOpenModalCallback(QuickModalTypes.QUICK_JOIN_CLASS_MODAL, false)}>
                                                <CloseOutlined/>
                                            </button>
                                        </div>
                                        <div className="py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 md:w-1/2 sm-w-full shadow-xl shadow-gray-700 create-modal-display">
                                            <div>
                                                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Join class by</h1>
                                                <Tabs
                                                    defaultActiveKey="1"
                                                    items={listOfTabs.map((value, i) => {
                                                            const id = String(i+1)
                                                            const Icon = value.icon
                                                            const description = value.description
                                                            const keyOfValue = value.key
                                                            const childrenView = value.view
                                                            return {
                                                                label: (
                                                                    <span>
                                                                        {<Icon />}
                                                                        {description}
                                                                    </span>
                                                                ),
                                                                key: id,
                                                                children: childrenView
                                                            }
                                                        })
                                                    }
                                                />
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickJoinClassModal