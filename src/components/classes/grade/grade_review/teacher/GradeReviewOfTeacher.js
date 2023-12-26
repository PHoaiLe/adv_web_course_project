"use client"

import React, { useState } from "react"
import Pagination from "react-js-pagination";
import Comment from "@/components/classes/grade/grade_review/teacher/component/Comment"
import Table from "@/components/classes/grade/grade_review/teacher/component/Table"

function GradeReviewOfTeacher({ClassId}){
    
    const tableData1 = [
        { studentInfo: 'Anh Ky - Student ID', type: 'Quiz', currentGrade: 6, expectedGrade: 9, explaination:'I want higher grade' },
        { studentInfo: 'Anh Ky - Student ID', type: 'Assignments', currentGrade: 7, expectedGrade: 9, explaination:'I want higher grade' },
        { studentInfo: 'Anh Ky - Student ID', type: 'Mid-term', currentGrade: 8, expectedGrade: 9, explaination:'I want higher grade' },
      ];
    
      const tableData2 = [
        { studentInfo: 'Student1 - Student ID', type: 'Quiz', currentGrade: 6, expectedGrade: 7, explaination:'I want higher grade please' },
      ];

      const tableData3 = [
        { studentInfo: 'Student2 - Student ID', type: 'Quiz', currentGrade: 6, expectedGrade: 7, explaination:'I want higher grade' },
        { studentInfo: 'Student2 - Student ID', type: 'Assignments', currentGrade: 7, expectedGrade: 9, explaination:'I want higher grade' },
      ];

      const tableData4 = [
        { studentInfo: 'Student3 - Student ID', type: 'Mid-term', currentGrade: 8, expectedGrade: 9, explaination:'I want higher grade' },
      ];

      const tableData5 = [
        { studentInfo: 'Student4 - Student ID', type: 'Mid-term', currentGrade: 5, expectedGrade: 8, explaination:'I want higher grade' },
      ];

      const tableData6 = [
        { studentInfo: 'Student5 - Student ID', type: 'Mid-term', currentGrade: 7, expectedGrade: 10, explaination:'I want higher grade' },
      ];

      const tableData7 = [
        {  studentInfo: 'Student6 - Student ID', type: 'Quiz', currentGrade: 6, expectedGrade: 7, explaination:'I want higher grade'},
        {  studentInfo: 'Student6 - Student ID', type: 'Mid-term', currentGrade: 7, expectedGrade: 10, explaination:'I want higher grade' },
      ];

      const itemsPerPage = 3;

      const [activePage, setActivePage] = useState(1);

        const startIndex = (activePage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const allTableData = [tableData1, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7]; // Thêm dữ liệu bảng khác nếu có
        
        // Lấy dữ liệu của bảng hiện tại dựa trên chỉ số bắt đầu và kết thúc
        const currentTableData = allTableData.slice(startIndex, endIndex);

        // Hàm xử lý khi chuyển trang
        const handlePageChange = (pageNumber) => {
            setActivePage(pageNumber);
        };

    return(
        <>
        <div className="flex justify-center item-center">
            <div className="flex flex-col ">
            {currentTableData.map((table, index) => (
                <div key={index} className="mt-4 ml-4 block w-full rounded-lg border border-success bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-success-300 dark:bg-neutral-600">
                <div className="text-xl font-medium border-b-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50">
                    {table[0].studentInfo}
                </div>
                <div className="p-6">
                    <Table data={table} />
                    <h5 className="mt-2 mb-2 text-xs font-medium leading-tight text-success dark:text-success-300">
                    Explaination: {table[0].explaination}
                    </h5>
                    
                </div>
                <div className="border-t-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50">
                    <Comment />
                </div>
                </div>
            ))}
        </div>
        </div>
            <div className="flex justify-end items-center mt-4">
                <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={allTableData.length}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                innerClass="flex space-x-2" 
                activeLinkClass="bg-success text-xl text-indigo-600  py-2 rounded-full" 
                itemClass="hover:bg-success text-xl text-success  py-2 rounded-full cursor-pointer" 
                />
            </div>
        

        </>
    )
}
export default GradeReviewOfTeacher