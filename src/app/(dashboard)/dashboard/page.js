import React from "react";


export default function Dashboard() {
  
  return(
    <>
      <div className="w-full h-full">
          <div className="text-3xl text black mx-auto py-6 font-bold">My Classes</div>
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                <div className="flex flex-wrap">
                 <div className="w-full lg:w-48 xl:w-96 x-4">
                   <div className="relative flex flex-col border-2 border-black min-w-0 break-words bg-neutral-300 rounded mb-6 xl:mb-0 shadow-lg">
                     <div className="flex-auto p-4">
                       <div className="flex flex-wrap">
                         <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-black uppercase font-bold text-xl">
                             Introduction to NodeJS
                           </h5>
                         </div>
                       </div>
                       <a href="#"><button className="w-full bg-cyan-500 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-black transition duration-300" type="button">Enter class</button></a>
                     </div>
                   </div>
                 </div>
                 <div className="w-full lg:w-48 xl:w-96 px-4">
                   <div className="relative flex flex-col border-2 border-black min-w-0 break-words bg-neutral-300 rounded mb-6 xl:mb-0 shadow-lg">
                     <div className="flex-auto p-4">
                       <div className="flex flex-wrap">
                         <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-black uppercase font-bold text-xl">
                             ReactJS guide
                           </h5>
                         </div>
                       </div>
                      <a href="#"><button className="w-full bg-cyan-500 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-black transition duration-300" type="button">Enter class</button></a>
                     </div>
                   </div>
                 </div>
            </div>
            </div>
            </div> 
          <div className="text-3xl text black mx-auto py-6 font-bold">Courses</div>
          <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                <div className="flex flex-wrap">
                 <div className="w-full lg:w-48 xl:w-96 x-4">
                   <div className="relative flex flex-col border-2 border-black min-w-0 break-words bg-neutral-300 rounded mb-6 xl:mb-0 shadow-lg">
                     <div className="flex-auto p-4">
                       <div className="flex flex-wrap">
                         <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-black uppercase font-bold text-xl">
                             Tailwind
                           </h5>
                         </div>
                       </div>
                       <a href="#"><button className="w-full bg-cyan-500 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-black transition duration-300" type="button">Join class</button></a>
                     </div>
                   </div>
                 </div>
                 <div className="w-full lg:w-48 xl:w-96 px-4">
                   <div className="relative flex flex-col border-2 border-black min-w-0 break-words bg-neutral-300 rounded mb-6 xl:mb-0 shadow-lg">
                     <div className="flex-auto p-4">
                       <div className="flex flex-wrap">
                         <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-black uppercase font-bold text-xl">
                             Create html css
                           </h5>
                         </div>
                       </div>
                      <a href="#"><button className="w-full bg-cyan-500 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-black transition duration-300" type="button">Join class</button></a>
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

// return (
  //   <>
      // <div className="relative md:ml-64 bg-gray-100">
      //   <div className="relative bg-green-600 md:pt-32 pb-32 pt-12">
      //     <div className="px-4 md:px-10 mx-auto w-full">
      //       <div>
      //         <div className="flex flex-wrap">
      //           <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      //             <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      //               <div className="flex-auto p-4">
      //                 <div className="flex flex-wrap">
      //                   <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
      //                     <h5 className="text-gray-400 uppercase font-bold text-xs">
      //                       Classes
      //                     </h5>
      //                     <span className="font-semibold text-xl text-gray-700">
      //                       5,897
      //                     </span>
      //                   </div>
      //                   <div className="relative w-auto pl-4 flex-initial">
      //                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
      //                       <i className="far fa-chart-bar"></i>
      //                     </div>
      //                   </div>
      //                 </div>
      //                   <p className="text-sm text-gray-400 mt-4">
      //                   <span className="text-emerald-500 mr-2">
      //                     <i className="fas fa-arrow-up"></i> 100%
      //                   </span>
      //                   <span className="whitespace-nowrap">
      //                     Last month
      //                   </span>
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      //             <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      //               <div className="flex-auto p-4">
      //                 <div className="flex flex-wrap">
      //                   <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
      //                     <h5 className="text-gray-400 uppercase font-bold text-xs">
      //                       New users
      //                     </h5>
      //                     <span className="font-semibold text-xl text-gray-700">
      //                       3,000
      //                     </span>
      //                   </div>
      //                   <div className="relative w-auto pl-4 flex-initial">
      //                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
      //                       <i className="fas fa-chart-pie"></i>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <p className="text-sm text-gray-400 mt-4">
      //                   <span className="text-red-500 mr-2">
      //                     <i className="fas fa-arrow-down"></i> 100%
      //                   </span>
      //                   <span className="whitespace-nowrap">
      //                     Last week
      //                   </span>
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      //             <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      //               <div className="flex-auto p-4">
      //                 <div className="flex flex-wrap">
      //                   <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
      //                     <h5 className="text-gray-400 uppercase font-bold text-xs">
      //                       New teachers
      //                     </h5>
      //                     <span className="font-semibold text-xl text-gray-700">
      //                       650
      //                     </span>
      //                   </div>
      //                   <div className="relative w-auto pl-4 flex-initial">
      //                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
      //                       <i className="fas fa-users"></i>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <p className="text-sm text-gray-400 mt-4">
      //                   <span className="text-orange-500 mr-2">
      //                     <i className="fas fa-arrow-down"></i> 100%
      //                   </span>
      //                   <span className="whitespace-nowrap">
      //                     Last week
      //                   </span>
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
      //             <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
      //               <div className="flex-auto p-4">
      //                 <div className="flex flex-wrap">
      //                   <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
      //                     <h5 className="text-gray-400 uppercase font-bold text-xs">
      //                       High Grades
      //                     </h5>
      //                     <span className="font-semibold text-xl text-gray-700">
      //                       48,85%
      //                     </span>
      //                   </div>
      //                   <div className="relative w-auto pl-4 flex-initial">
      //                     <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
      //                       <i className="fas fa-percent"></i>
      //                     </div>
      //                   </div>
      //                 </div>
      //                 <p className="text-sm text-gray-400 mt-4">
      //                   <span className="text-emerald-500 mr-2">
      //                     <i className="fas fa-arrow-up"></i> A+
      //                   </span>
      //                   <span className="whitespace-nowrap">
      //                     Yesterday
      //                   </span>
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="px-4 md:px-10 mx-auto w-full -m-24">
      //     <div className="flex flex-wrap mt-4">
      //       <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      //         <div className="relative flex flex-col min-w-0 break-words bg-amber-200 w-full mb-6 shadow-lg rounded">
      //           <div className="rounded-t mb-0 px-4 py-3 border-0">
      //             <div className="flex flex-wrap items-center">
      //               <div className="relative w-full px-4 max-w-full flex-grow flex-1">
      //                 <h3 className="font-semibold text-base text-gray-700">
      //                   Online Classes
      //                 </h3>
      //               </div>
      //               <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
      //                 <button
      //                   className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
      //                   type="button"
      //                   style={{ transition: "all .15s ease" }}
      //                 >
      //                   See all
      //                 </button>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="block w-full overflow-x-auto">
      //             <table className="items-center w-full bg-transparent border-collapse">
      //               <thead>
      //                 <tr>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Classes
      //                   </th>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Teacher
      //                   </th>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Students attend
      //                   </th>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Rate
      //                   </th>
      //                 </tr>
      //               </thead>
      //               <tbody>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Introduction to programming
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     Vu Quoc Hoang
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     340
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
      //                     46,53%
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Web programming
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     Nguyen Huy Khanh
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     319
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
      //                     46,53%
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     DataStructure and Algorithms
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     Le Ngoc Thanh
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     294
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
      //                     36,49%
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Web Advanced Programming
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     Mai Anh Tuan
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     147
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
      //                     50,87%
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Mobile Application Programming
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     Ho Tuan Thanh
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     190
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <i className="fas fa-arrow-down text-red-500 mr-4"></i>
      //                     46,53%
      //                   </td>
      //                 </tr>
      //               </tbody>
      //             </table>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="w-full xl:w-4/12 px-4">
      //         <div className="relative flex flex-col min-w-0 break-words bg-indigo-300 w-full mb-6 shadow-lg rounded">
      //           <div className="rounded-t mb-0 px-4 py-3 border-0">
      //             <div className="flex flex-wrap items-center">
      //               <div className="relative w-full px-4 max-w-full flex-grow flex-1">
      //                 <h3 className="font-semibold text-base text-gray-700">
      //                   Popular Classes
      //                 </h3>
      //               </div>
      //               <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
      //                 <button
      //                   className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
      //                   type="button"
      //                   style={{ transition: "all .15s ease" }}
      //                 >
      //                   See all
      //                 </button>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="block w-full overflow-x-auto">
      //             <table className="items-center w-full bg-transparent border-collapse">
      //               <thead className="thead-light">
      //                 <tr>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Classes
      //                   </th>
      //                   <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
      //                     Attendants
      //                   </th>
      //                   <th
      //                     className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
      //                     style={{ minWidth: "140px" }}
      //                   >Hot</th>
      //                 </tr>
      //               </thead>
      //               <tbody>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Software Architect
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     1,480
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <div className="flex items-center">
      //                       <span className="mr-2">55%</span>
      //                       <div className="relative w-full">
      //                         <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
      //                           <div
      //                             style={{ width: "55%" }}
      //                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
      //                           ></div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Game Development
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     2,480
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <div className="flex items-center">
      //                       <span className="mr-2">75%</span>
      //                       <div className="relative w-full">
      //                         <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
      //                           <div
      //                             style={{ width: "75%" }}
      //                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
      //                           ></div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Software Testing
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     3,000
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <div className="flex items-center">
      //                       <span className="mr-2">70%</span>
      //                       <div className="relative w-full">
      //                         <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
      //                           <div
      //                             style={{ width: "70%" }}
      //                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
      //                           ></div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Advanced Database
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     3,578
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <div className="flex items-center">
      //                       <span className="mr-2">65%</span>
      //                       <div className="relative w-full">
      //                         <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
      //                           <div
      //                             style={{ width: "65%" }}
      //                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
      //                           ></div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </td>
      //                 </tr>
      //                 <tr>
      //                   <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
      //                     Data Visualization
      //                   </th>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     1,780
      //                   </td>
      //                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      //                     <div className="flex items-center">
      //                       <span className="mr-2">65%</span>
      //                       <div className="relative w-full">
      //                         <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
      //                           <div
      //                             style={{ width: "65%" }}
      //                             className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
      //                           ></div>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </td>
      //                 </tr>
      //               </tbody>
      //             </table>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    
  //   </> 
  //);


