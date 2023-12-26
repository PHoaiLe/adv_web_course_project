'use client';


import { PATCH_updateGradeCompostion } from '@/app/api/grade/teacher/structure/apis';
import {DownOutlined} from '@ant-design/icons'
import {Modal, Dropdown} from "antd"
import { HttpStatusCode } from 'axios';
import { useEffect, useState } from "react"

// CompositionList
// [
//     {
//       "gradeCompo_name": "Quiz 1",
//       "gradeCompo_scale": 10,
//       "is_finalized": false,
//       "_id": "6582c26a7b9c22f52ff54750",
//       "id": "6582c26a7b9c22f52ff54750"
//     }
// ]

function EditCompositionModal({OpenModal, handleOpenModalCallback, CompositionList, ClassId, handleReloadCompositionListCallback})
{
    const [selectedComposition, setSelectedComposition] = useState('')
    const [oldCompositionSelections, setOldCompositionSelections] = useState([])
    const [class_id, setClassId] = useState(ClassId)
    const [newCompositionName, setNewCompositionName] = useState("")
    const [scale, setScale] = useState(undefined)
    const [resultMessage, setResultMessage] = useState("")
    const [resultMessageDisplay, setResultMessageDisplay] = useState({display: 'none', color:'green'})

    const inputName_classID = "class_id";
    const inputName_oldName = "oldName";
    const inputName_newName = "name";
    const inputName_scale = "scale";

    const successResultMessageDisplay = {display: 'block', color: 'green'}
    const errorResultMessageDisplay = {display: 'block', color: 'red'}
    const hiddenResultMessageDisplay = {display: 'none', color: 'green'}
    
    useEffect(() =>
    {
        if(CompositionList === undefined || CompositionList.length == 0)
        {
            setOldCompositionSelections([])
        }
        const items = CompositionList.map((value, index) =>
        {
            const item = 
            {
                key: index,
                label: <button className="w-full bg-white hover:bg-blue-100">{value.nameOfGrade}</button>,
                current_name: value.nameOfGrade,
                current_scale: value.gradeScale,
            }
            return item
        });

        setOldCompositionSelections(items)

    }, [CompositionList])


    const customFooter = 
    [
        <button key={"edit-composition-modal-cancel-button"} className="rounded-full w-20 bg-white hover:bg-blue-900 text-black hover:text-white mr-3 h-10"
        onClick={handleModalCancel}
        >Cancel</button>,
        <button key={"edit-composition-modal-ok-button"} className="rounded-full w-20 bg-blue-500 hover:bg-blue-900 text-white hover:text-white h-10"
        onClick={handleModalOk}
        >Apply</button>,
    ]


    function handleModalCancel(e)
    {
        handleOpenModalCallback(false)
    }

    async function handleModalOk(e)
    {

        if(selectedComposition.length < 1)
        {
            setResultMessage("Please select a composition to update")
            setResultMessageDisplay(errorResultMessageDisplay)
            return;
        }
        else if(newCompositionName.length < 1)
        {
            setResultMessage("Please provide the new composition's name")
            setResultMessageDisplay(errorResultMessageDisplay)
            return
        }
        else if(scale === undefined)
        {
            setResultMessage("Please provide the composition's scale")
            setResultMessageDisplay(errorResultMessageDisplay)
            return
        }
        else if(scale <= 0)
        {
            setResultMessage("The composition's scale must be greater than 0")
            setResultMessageDisplay(errorResultMessageDisplay)
            return;
        }


        let formData = new FormData()
        formData.append(inputName_classID, class_id)
        formData.append(inputName_oldName, selectedComposition)
        formData.append(inputName_newName, newCompositionName)
        formData.append(inputName_scale, scale)

        const {statusCode, responseBody} = await PATCH_updateGradeCompostion(formData);

        if(statusCode == HttpStatusCode.Ok)
        {
            setResultMessage("Updated composition successfully")
            setResultMessageDisplay(successResultMessageDisplay)
            handleReloadCompositionListCallback()
        }
        else if(statusCode < 0)
        {
            setResultMessage("Error connection from server")
            setResultMessageDisplay(errorResultMessageDisplay)
        }
        else
        {
            if(responseBody.message !== undefined)
            {
                setResultMessage(responseBody.message)
                setResultMessageDisplay(errorResultMessageDisplay)
            }
            else
            {
                setResultMessage("Update composition failed")
                setResultMessageDisplay(errorResultMessageDisplay)
            }
        }

        setTimeout(() => 
        {
            setResultMessage("")
            setResultMessageDisplay(hiddenResultMessageDisplay)
        }, 3000)
    }

    function handleCompositionSelectionsOnClick(menuInfo)
    {
        const selectedKey = Number.parseInt(menuInfo.key)
        const selectedItem = oldCompositionSelections[selectedKey]
        const selectedCompositionName = selectedItem.current_name;
        const selectedCompositionScale = selectedItem.current_scale;

        setSelectedComposition(selectedCompositionName)
        setNewCompositionName(selectedCompositionName)
        setScale(selectedCompositionScale)
    }

    return(
        <>
            <Modal
            title="Edit Composition"
            open={OpenModal}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
            footer={customFooter}
            >
                <div className="py-4">
                    <input key={"add-composition-class-id"} name={inputName_classID} type="text"
                    value={class_id}
                    className="hidden"
                    required={true}
                    onChange={(e) => {
                        const clonedClassId = class_id
                        setClassId(clonedClassId)
                    }}/>
                    <label key={"label-edit-old-composition-name"} htmlFor="edit-old-composition-name"
                    >Name of composition <span className='text-red-600'>*</span></label>

                    <div className='flex w-full bg-blue-50 h-10 my-4'>
                        <input key={"edit-old-composition-name"} name={inputName_oldName} type="text" value={selectedComposition}
                        className="w-full h-10 text-left px-2 bg-blue-50 rounded"
                        placeholder="Provide the new composition's name"
                        onChange={(e) => setSelectedComposition(e.target.value)}
                        required={true}
                        />
                        <Dropdown
                        className='hover:bg-blue-500 w-8 h-10 flex justify-center items-center hover:text-white'
                            menu={{items: oldCompositionSelections, onClick: handleCompositionSelectionsOnClick}}
                            trigger={['click']}
                        >
                            <DownOutlined/>
                        </Dropdown>
                    </div>
                    <label key={"label-edit-composition-name"} htmlFor="edit-composition-name"
                    >Name of new composition <span className='text-red-600'>*</span></label>
                    <input key={"edit-composition-name"} name={inputName_newName} type="text" value={newCompositionName}
                    className="w-full my-4 h-10 text-left px-2 bg-blue-50 rounded"
                    placeholder="Provide the new composition's name"
                    onChange={(e) => setNewCompositionName(e.target.value)}
                    required={true}
                    />
                    <label key={"label-edit-composition-scale"} htmlFor="edit-composition-scale">Scale <span className='text-red-600'>*</span></label>
                    <input key={"edit-composition-scale"} name={inputName_scale} type="number" value={scale}
                    className="w-full my-2 h-10 text-left px-2 bg-blue-50 rounded"
                    placeholder="Provide the new composition's scale"
                    onChange={(e) => setScale(e.target.value)}
                    required={true}
                    />
                </div>
                <div className='text-center' style={resultMessageDisplay}>
                    {resultMessage}
                </div>
            </Modal>
        </>
    )
}

export default EditCompositionModal