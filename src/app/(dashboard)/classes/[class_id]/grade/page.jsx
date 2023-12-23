'use server'

import GradeDashboard from "@/components/classes/grade/GradeDashboard"

function GradePage({params})
{
    //load data about grade in backend server

    //mock data
    const gradeStructure = []

    console.log(params)

    return(
        <>
          <GradeDashboard ClassId={params.class_id}/>  
        </>
    )
}

export default GradePage