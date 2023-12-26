'use client'


import { POST_createGradeComposition } from "@/app/api/grade/teacher/structure/apis"
import {Modal} from "antd"
import { HttpStatusCode } from "axios"
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

function AddCompositionModal({OpenModal, handleOpenModalCallback, ClassId, CompositionList, handleReloadCompositionListCallback})
{

    const [class_id, setClassId] = useState(ClassId)
    const [composition_name, setCompositionName] = useState("")
    const [scale, setScale] = useState(undefined)
    const [resultMessage, setResultMessage] = useState("")
    const [resultMessageDisplay, setResultMessageDisplay] = useState({display: 'none', color: "green"})

    const inputName_classID = "class_id";
    const inputName_newName = "name";
    const inputName_scale = "scale";
    const successMessageDisplay = {display: 'block', color:"green"}
    const errorMessageDisplay = {display: 'block', color: 'red'}
    const hiddenMessageDisplay = {display: 'none', color: "green"}


    const customFooter = 
    [
        <button key={"add-composition-modal-cancel-button"} className="rounded-full w-20 bg-white hover:bg-blue-900 text-black hover:text-white mr-3 h-10"
        onClick={handleModalCancel}
        >Cancel</button>,
        <button key={'add-composition-modal-ok-button'} className="rounded-full w-20 bg-blue-500 hover:bg-blue-900 text-white hover:text-white h-10"
        onClick={handleModalOk}
        >Apply</button>,
    ]

    function handleModalCancel(e)
    {
        handleOpenModalCallback(false)
    }

    async function handleModalOk(e)
    {
        //check if the composition_name has already existed in the data_source
        if(CompositionList === undefined)
        {
            return
        }
        else if(CompositionList.length < 1)
        {
            return 
        }

        if(composition_name.length < 1)
        {
            setResultMessage("Please provide composition's name")
            setResultMessageDisplay(errorMessageDisplay)
            return
        }
        else if(scale === undefined)
        {
            setResultMessage("Please provide composition's scale")
            setResultMessageDisplay(errorMessageDisplay)
            return
        }
        else if(scale <= 0)
        {
            setResultMessage("Invalid value of composition's scale")
            setResultMessageDisplay(errorMessageDisplay)
            return
        }

        
        const isExisted =  CompositionList.findIndex((value, index) => value.nameOfGrade == composition_name)
        if(isExisted > -1)
        {
            setResultMessage("Already existed grade composition. May you want update it?")
            setResultMessageDisplay(errorMessageDisplay)
            return
        }

        setResultMessage("")
        setResultMessageDisplay(hiddenMessageDisplay)

        const formData = new FormData()
        formData.append(inputName_classID, class_id)
        formData.append(inputName_newName, composition_name)
        formData.append(inputName_scale, scale)

        const {statusCode, responseBody} =  await POST_createGradeComposition(formData)
        if(statusCode == HttpStatusCode.Created)
        {
            setResultMessage("Created grade composition successfully")
            setResultMessageDisplay(successMessageDisplay)
            handleReloadCompositionListCallback();
        }
        else if(statusCode < 0)
        {
            setResultMessage("Error connection from server...")
            setResultMessageDisplay(errorMessageDisplay)
        }
        else
        {
            if(responseBody.message)
            {
                setResultMessage(responseBody.message)
                setResultMessageDisplay(errorMessageDisplay)
            }
            else
            {
                setResultMessage("Created grade composition failed...")
                setResultMessageDisplay(errorMessageDisplay)
            }
        }

        setTimeout(() =>
        {
            setResultMessage("")
            setResultMessageDisplay(hiddenMessageDisplay)
        }, 3000)

    }

    return(
        <>
            <Modal
            title={"Add Composition"}
            open={OpenModal}
            onCancel={handleModalCancel}
            onOk={handleModalOk}
            footer={customFooter}
            >
                <div className="py-4">
                    <input key={"add-composition-class-id"} name={inputName_classID} type="text"
                    value={class_id}
                    className="hidden"
                    onChange={(e) => {
                        const clonedClassId = class_id
                        setClassId(clonedClassId)
                    }}/>
                    <label key={"label-add-composition-name"} htmlFor="add-composition-name"
                    >Name of composition <span className="text-red-600">*</span></label>
                    <input key={"add-composition-name"} name={inputName_newName} type="text" value={composition_name}
                    className="w-full my-4 h-10 text-left px-2 bg-blue-50 rounded"
                    placeholder="Provide the new composition's name"
                    onChange={(e) => setCompositionName(e.target.value)}
                    />
                    <label key={"label-add-composition-scale"} htmlFor="add-composition-scale">Scale <span className="text-red-600">*</span></label>
                    <input key={"add-composition-scale"} name={inputName_scale} type="number" value={scale}
                    className="w-full my-2 h-10 text-left px-2 bg-blue-50 rounded"
                    placeholder="Provide the new composition's scale"
                    onChange={(e) => setScale(e.target.value)}
                    />
                </div>
                <div className="text-center w-full" style={resultMessageDisplay}>
                    {resultMessage}
                </div>
            </Modal>
        </>
    )
}

export default AddCompositionModal