'use client';

import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {Popconfirm, Table, notification} from 'antd';

import {DndContext, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';

import DndGradeStructureRow from '../components/DndGradeStructureRow';

import React, { useEffect } from 'react';
import { useState } from 'react';
import AddCompositionModal from './modal/AddCompositionModal';
import EditCompositionModal from './modal/EditCompositionModal';
import { DELETE_removeGradeComposition, GET_getCurrentGradeStructure } from '@/app/api/grade/teacher/structure/apis';
import { HttpStatusCode } from 'axios';



// ProvideGradeStructure
// [
//     {
//       "gradeCompo_name": "Quiz 1",
//       "gradeCompo_scale": 10,
//       "is_finalized": false,
//       "_id": "6582c26a7b9c22f52ff54750",
//       "id": "6582c26a7b9c22f52ff54750"
//     }
// ]


function GradeStructureOfTeacher({ClassId})
{
          


    // const MockData = 
    // [
    //     {
    //         key: '1',
    //         nameOfGrade: "Quiz 1",
    //         gradeScale: "1",
    //         isFinalized: false,
    //     },
    //     {
    //         key: '2',
    //         nameOfGrade: "Quiz 2",
    //         gradeScale: "1",
    //         isFinalized: false,
    //     },
    //     {
    //         key: '3',
    //         nameOfGrade: "Project 1",
    //         gradeScale: "1.5",
    //         isFinalized: false,
    //     },
    //     {
    //         key: '4',
    //         nameOfGrade: "Project 2",
    //         gradeScale: "1.5",
    //         isFinalized: false,
    //     },
    //     {
    //         key: '5',
    //         nameOfGrade: "Midterm",
    //         gradeScale: "2",
    //         isFinalized: false,
    //     },
    //     {
    //         key: '6',
    //         nameOfGrade: "Final",
    //         gradeScale: "3",
    //         isFinalized: false,
    //     },
    // ]

    const [data, setDataSource] = useState([])
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [needToReloadCompositionStructure, setNeedToReloadCompositionStructure] = useState(false)
    const [api, contextHolder] = notification.useNotification();

    useEffect(() =>
    {
      let ignore = false
      //load composition structure
      
      async function loadGradeCompositions()
      {
        const {statusCode, responseBody} = await GET_getCurrentGradeStructure(ClassId)

        if(statusCode == HttpStatusCode.Created)
        {
          let migratedGradeComposition = []
          responseBody.forEach((value, index) =>
          {
            const item = 
            {
              key: value._id,
              index: index,
              nameOfGrade: value.gradeCompo_name,
              gradeScale: value.gradeCompo_scale,
              isFinalized: value.is_finalized,
              isDeleting: false
            }
            migratedGradeComposition.push(item)
          })
    
          setDataSource(migratedGradeComposition)
        }
        else if(statusCode < 0)
        {
          setDataSource([])
          alert("Error connection from server...")
        }
        else
        {
          setDataSource([])
        }
      }

      loadGradeCompositions()

      return () =>
      {
        ignore = true;
      }

    }, [needToReloadCompositionStructure])


    const columns = 
    [
        {
          title: "",
          dataIndex: "key",
          key: "sort",
          width: 80,
        },
        {
          title: "Grade composition",
          dataIndex: "nameOfGrade",
          key: "nameOfGrade",
          width: 550,
        },
        {
          title: "Grade scale",
          dataIndex: "gradeScale",
          key: "scale",
          width: 120,

        },
        {
          title: "",
          key: "action",
          width: 120,
          render: (_, record) =>
          {
            //record schema
            //     {
            //       "gradeCompo_name": "Quiz 1",
            //       "gradeCompo_scale": 10,
            //       "is_finalized": false,
            //       "_id": "6582c26a7b9c22f52ff54750",
            //       "id": "6582c26a7b9c22f52ff54750"
            //     }
            return(
              <>
                <Popconfirm
                  open={record.isDeleting}
                  title={"Warning"}
                  description={"Do you want to delete this composition? This action can be undo!"}
                  onCancel={(e) => {handleRemoveGradeCompositionCancel(record)}}
                  onConfirm={(e) => {handleRemoveGradeCompositionConfirm(record)}}
                  >
                    <button className="hover:bg-blue-600 hover:text-white"><DeleteOutlined style={{fontSize: 'larger'}}
                    onClick={(e) => {handleRemoveGradeCompositionClick(record)}}
                    /></button>
                </Popconfirm>
              </>
            )
          }
        }
    ]


    function onDragEnd({ active, over }) 
    {
      if (active.id !== over?.id) 
      {
        setDataSource((previous) => 
        {
          const activeIndex = previous.findIndex((i) => i.key === active.id);
          const overIndex = previous.findIndex((i) => i.key === over?.id);
          return arrayMove(previous, activeIndex, overIndex);
        });
      }
    };

    ///////////////////////////////////////////////////////////////////////////////

    function handleOpenAddModalCallback(value)
    {
      setOpenAddModal(value)
    }

    function handleOpenEditModalCallback(value)
    {
      setOpenEditModal(value)
    }

    function handleReloadCompositionListCallback()
    {
      const flat = !needToReloadCompositionStructure
      setNeedToReloadCompositionStructure(flat)
    }

    function handleRemoveGradeCompositionClick(record)
    {
      let copiedData = data.slice()
      const selectedIndex = record.index
      copiedData[selectedIndex].isDeleting = true;
      setDataSource(copiedData)
    }

    function handleRemoveGradeCompositionCancel(record)
    {
      let copiedData = data.slice()
      const selectedIndex = record.index
      copiedData[selectedIndex].isDeleting = false;
      setDataSource(copiedData)
    }

    async function handleRemoveGradeCompositionConfirm(record)
    {
      const targetCompositionName = record.nameOfGrade;
      const targetClassId = ClassId
      
      const {statusCode, responseBody} = await DELETE_removeGradeComposition(targetClassId, targetCompositionName)
      if(statusCode == HttpStatusCode.Ok)
      {
        alert("deleted composition successfully...")
        const nextState = !needToReloadCompositionStructure
        setNeedToReloadCompositionStructure(nextState)
      }
      else if(statusCode < 0)
      {
        alert("Error connection from server")
      }
      else
      {
        alert("Deleted failed...")
      }
    }

    return(
        <>
            {contextHolder}
            <div className="w-full h-full px-40">
                <div key={"grade-structure-buttons"} className="w-full mt-3 flex overflow-y-auto mb-6">
                    <button className='px-4 py-2 bg-blue-500 hover:bg-blue-900 text-white rounded-full mr-3'
                    onClick={(e) => {setOpenAddModal(true)}}
                    ><PlusOutlined/> Add composition</button>
                    <button className='px-4 py-2 bg-blue-200 hover:bg-blue-900 text-white rounded-full mr-3'
                    onClick={(e) => {setOpenEditModal(true)}}
                    ><EditOutlined /> Edit composition</button>
                </div>
                <div key={"grade-struture-table"} className='w-full h-full mt-4'>
                    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
                        <SortableContext
                            // rowKey array
                            items={data.map((value) => value.key)}
                            strategy={verticalListSortingStrategy}
                        >
                            <Table
                                components={{
                                    body: {
                                    row: DndGradeStructureRow,
                                    },
                                }}
                                rowKey="key"
                                columns={columns}
                                dataSource={data}
                                scroll={{y:400}}
                            />
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
            <AddCompositionModal OpenModal={openAddModal} handleOpenModalCallback={handleOpenAddModalCallback} ClassId={ClassId} CompositionList={data} handleReloadCompositionListCallback={handleReloadCompositionListCallback}/>
            <EditCompositionModal OpenModal={openEditModal} handleOpenModalCallback={handleOpenEditModalCallback} ClassId={ClassId} CompositionList={data} handleReloadCompositionListCallback={handleReloadCompositionListCallback}/>
        </>
    )


}

export default GradeStructureOfTeacher