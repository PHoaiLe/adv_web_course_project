function classDetailPage({class_id})
{
    return(
        <>
        <div className="relative bg-cyan-600 md:pt-32 pb-32 pt-12 border-5 rounded-lg">
            <div className="text-6xl text-center uppercase ">Educa - Class 1</div>
        </div>
        <section className="text-gray-600 body-font">
            <div className="container px-4 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-auto -m-4">
            <div className="p-4 lg:w-64 md:w-full">
                <div className="flex border-2 rounded-lg border-neutral-600 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Danh sách điểm</h2>
                    <button><a className="mt-3 text-indigo-500 hover:text-black hover:bg-indigo-300 inline-flex items-center ring ring-indigo-600 ring-offset-2">Xem tại đây</a></button> 
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-64 md:w-full">
                <div className="flex border-2 rounded-lg border-neutral-600 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Danh sách lớp</h2>
                    <button><a className="mt-3 text-indigo-500 hover:text-black hover:bg-indigo-300 inline-flex items-center ring ring-indigo-600 ring-offset-2">Xem tại đây</a></button> 
                </div>
                </div>
            </div>
            </div>
            </div>  
            <div className="p-4 lg:w-5/2 md:w-full">
              <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le</h2>
                {/* Add your content for the new container here */}
                <div className="border-t-4 border-neutral-400">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h1 className="text-gray-400 font-bold text-xl">
                  The next class will take place at Auditorium I from 1:00 PM to 4:00 PM. This session will feature professional exchanges with representatives from the following companies:
                  </h1>
                  <span className="font-semibold text-xs text-gray-700">
                  Netcompany:
                  </span>
                  <li>
                  <span className="font-semibold text-xs text-gray-700">
                  What are microservices and their benefits?
                  </span>
                  </li>
                  <li>
                  <span className="font-semibold text-xs text-gray-700">
                  Key principles of building microservices
                  </span>
                  </li>
                  <li>
                  <span className="font-semibold text-xs text-gray-700">
                  When to use microservices
                  </span>
                  </li>
                  <li>
                  <span className="font-semibold text-xs text-gray-700">
                  Core components of microservices
                  </span>
                  </li>
                  <li>
                  <span className="font-semibold text-xs text-gray-700">                 
                  Micro-frontend
                  </span>
                  </li> 
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-5/2 md:w-full">
              <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le</h2>
                {/* Add your content for the new container here */}
                <div className="border-t-4 border-neutral-400">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h1 className="text-gray-400 font-bold text-xl">
                  Our class will have a mid-term test. Prepare carefully!
                  </h1>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-5/2 md:w-full">
              <div className="flex border-2 rounded-lg border-neutral-300 border-opacity-50 p-8 sm:flex-row flex-col hover:bg-cyan-500 transition duration-300">
                <div className="flex-grow">
                <a href="#"><button className="w-full text-left font-bold rounded-md "><h2 className="text-gray-900 text-lg title-font font-bold mb-3">Anh Le has post a new assignment: Authentication</h2></button></a>
                {/* Add your content for the new container here */}
              </div>
            </div>
          </div>
        </section>
   
        </>
    )
}


export default classDetailPage