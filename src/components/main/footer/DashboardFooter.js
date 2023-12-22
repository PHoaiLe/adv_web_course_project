export default function DashboardFooter(){
    return(
        <>
        <div>
        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Web Advanced Programming</span>
                </div>
                <div className="grid grid-cols-2 text-right gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-sm text-right font-semibold text-gray-900 uppercase dark:text-white">Email</h2>
                        <ul className="text-gray-600 text-right dark:text-gray-400">
                            <li>
                                <p>bhtoan20@clc.fitus.edu.vn</p>
                            </li>
                            <li>
                                <p>lhphuong20@clc.fitus.edu.vn</p>
                            </li>
                            <li>
                                <p>lqkanh20@clc.fitus.edu.vn</p>
                            </li>
                        </ul>    
                    </div>
                    <div>
                    <h3 className="mb-6 text-sm text-right font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h3>
                        <ul className="text-gray-600 text-right dark:text-gray-400">
                            <li>
                                <p>227 Nguyen Van Cu, District 5, Ho Chi Minh city, Vietnam</p>
                            </li>
                            <li>
                                <p>Phone : (012) 3456 0987</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        </>
    )
}