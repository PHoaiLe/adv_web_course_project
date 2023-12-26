'use client';

import {Tabs} from 'antd'
import GradeStructureOfTeacher from './grade_structure/teacher/GradeStructureOfTeacher';
import GradeReviewOfTeacher from './grade_review/teacher/GradeReviewOfTeacher';

function GradeDashboard({ClassId, UserRole})
{

    const GradeStructure = <GradeStructureOfTeacher ClassId={ClassId} />
    const GradeReview = <GradeReviewOfTeacher ClassId={ClassId}/>

    const classOfItems = 
    [
        {
            icon: undefined,
            keyOfValue: "",
            description: "Grade structure",
            view: GradeStructure
        },

        {
            icon: undefined,
            keyOfValue: "",
            description: "Grade review",
            view: GradeReview
        }
    ]

    return(
        <>
            <div className="w-full h-full">
                <Tabs
                    defaultActiveKey='1'
                    items=
                    {
                        classOfItems.map((value, index) =>
                            {
                                const id = new String(index)
                                const Icon = value.icon
                                const description = value.description
                                const childrenView = value.view
                                return {
                                        label: (
                                            <span>{description}</span>
                                        ),
                                        key: id,
                                        children: childrenView
                                    }
                            }
                        )
                    }
                />
            </div>
        </>
    )
}

export default GradeDashboard