"use client"
import React, {useState} from "react";


export default function Table({ data }){
    const [finalGrades, setFinalGrades] = useState(data.map(() => 0));

    const limitValue = (value) => {
      let parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) {
        return 0;
      }
      return Math.max(0, Math.min(10, parsedValue));
    };
    
    const handleFinalGradeChange = (index, value) => {
      const newFinalGrades = [...finalGrades];
      newFinalGrades[index] = limitValue(value);
      setFinalGrades(newFinalGrades);
    };
    

    return(
    <table className="max-w-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-sky-200 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Type Grade
            </th>
            <th scope="col" className="px-6 py-3">
              Current Grade
            </th>
            <th scope="col" className="px-6 py-3">
              Expected Grade
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Final Grade
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`bg-white ${
                index % 2 === 0 ? 'border-b' : ''
              } dark:bg-gray-800 dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.type}
              </th>
              <td className="px-6 py-4 text-center">{item.currentGrade}</td>
              <td className="px-6 py-4 text-center">{item.expectedGrade}</td>
              <td><input
                    className="px-6 py-4 text-center" 
                    type="number"
                    value={finalGrades[index]}
                    onChange={(e) => handleFinalGradeChange(index, e.target.value)}
                    placeholder="Enter final grade"
                    />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}