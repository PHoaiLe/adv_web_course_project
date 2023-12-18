"use client";

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Member from './member/Member';
function MemberModal({ModalOpen, handleModalOpenCallback})
{
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        handleModalOpenCallback(false)
        }, 3000);
    };


    function handleCancel()
    {
        handleModalOpenCallback(false)
    }


    const MockTeachers = 
    [
        {_id:"du932ut893w8", fullname: "Ky Anh", avatar:'null'},
        {_id:"du932ut893w9", fullname: "Hao Toan", avatar:'null'}

    ]

    const MockStudents = 
    [
        {_id:"du932ut893w0", fullname: "Ky Anh", avatar:'null'},
        {_id:"du932ut893w1", fullname: "Phuong le", avatar:'null'},
        {_id:"du932ut893w2", fullname: "Lang Thao", avatar:'null'},
        {_id:"du932ut893w3", fullname: "Minh Quang", avatar:'null'},
        {_id:"du932ut893w4", fullname: "Nguyen Khanh", avatar:'null'},
        {_id:"du932ut893w5", fullname: "Hao Toan", avatar:'null'},
        {_id:"du932ut893w6", fullname: "Tuan Tran", avatar:'null'},
        {_id:"du932ut893w7", fullname: "Nguyen Minh Hieu", avatar:'null'},
        {_id:"du932ut893e1", fullname: "Trong Dat", avatar:'null'},
        {_id:"du932ut893e2", fullname: "Minh Quan", avatar:'null'},
        {_id:"du932ut893e3", fullname: "Nhat Minh", avatar:'null'},
        {_id:"du932ut893e4", fullname: "Hao Phong", avatar:'null'},
        {_id:"du932ut893e5", fullname: "Minh Chien", avatar:'null'},
        {_id:"du932ut893e6", fullname: "Quan Nguyen", avatar:'null'},
    ]

    const teachersDisplay = MockTeachers.map((value, index) =>
    {
        return <Member key={value._id} MemberInfo={value}/>
    })

    const studentsDisplay = MockStudents.map((value, index) =>
    {
        return <Member key={value._id} MemberInfo={value}/>
    })

    return (
        <>
            <Modal
                open={ModalOpen}
                title="Class Members"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                <Button key="back" onClick={handleCancel} className="text-black">
                    Return
                </Button> 
                ]}
            >
                <div className="text-2xl text-cyan-600 mx-auto font-bold">Teachers</div>
                <div className="border-t-2 border-cyan-700 mt-4">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <div class="divide-y divide-gray-300 font-semibold text-xl">
                        {teachersDisplay}
                    </div>
                    </div>
                </div>
                <div className="text-2xl text-cyan-600 mx-auto font-bold mt-6">Students</div>
                <div className="border-t-2 border-cyan-700 mt-4">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <div class="divide-y divide-gray-300 font-semibold text-xl">
                            {studentsDisplay}            
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};
export default MemberModal