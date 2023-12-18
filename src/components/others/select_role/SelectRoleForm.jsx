'use client';

import { useState } from 'react';
import './SelectRoleForm.css'
import { PATCH_updateUserRole } from '@/app/api/others/select_role/api';
import { useRouter } from 'next/navigation';
import { HttpStatusCode } from 'axios';
import { getClonedUserData, loadUserData, removeClonedUserData } from '@/app/api/others/cloned_user_detail/api';

export default function SelectRoleForm()
{
    const student_role_img = "../reading-book.png"
    const teacher_role_img = "../teacher.png"
    const studentRole = "student"
    const teacherRole = "teacher"

    const unselectedStatus = {borderColor: 'tranparent', borderWidth: '0px'}
    const selectedStatus = {borderColor: 'black', borderWidth: '4px'}

    const router = useRouter();
    const [role, setRole] = useState("none")
    const [studentSelectionStyle, setStudentStyle] = useState(unselectedStatus)
    const [teacherSelectionStyle, setTeacherStyle] = useState(unselectedStatus)

    function handleSelect(roleValue)
    {
        setRole(roleValue)
        if(role == studentRole)
        {
            setStudentStyle(selectedStatus)
            setTeacherStyle(unselectedStatus)
        }
        else if(role == teacherRole)
        {
            setStudentStyle(unselectedStatus)
            setTeacherStyle(selectedStatus)
        }
        console.log(role)
    }

    async function handleSubmit(formData)
    {
        const {statusCode, responseBody} = await PATCH_updateUserRole(formData)

        if(statusCode == HttpStatusCode.Ok)
        {
            removeClonedUserData()
            await getClonedUserData()
            router.push("/dashboard")
        }
        else
        {
            alert("Connection error")
        }
    }

    return(
        <>
            <form action={handleSubmit}>
                <div className='bg-white text-center select-role-title'>
                    <h1>Select your role</h1>
                </div>
                <div className="select-role-container">
                    <div>
                        <button type='button' onClick={(e) => {handleSelect(studentRole)}} style={studentSelectionStyle}>
                            <img src={student_role_img}/>
                        </button>
                        <h2>Student</h2>
                    </div>
                    <div>
                        <button type='button' onClick={(e) => {handleSelect(teacherRole)}} style={teacherSelectionStyle}>
                            <img src={teacher_role_img} />
                        </button>
                        <h2>Teacher</h2>
                    </div>
                </div>
                <input type='text' name='role' value={role} style={{display:'none'}} onChange={(e) => {}}/>
                <div className='select-role-submit-button-container'>
                    <button type='submit'>Confirm</button>
                </div>
            </form>
        </>
    )
}