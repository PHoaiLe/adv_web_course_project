export default function Footer(){
    return(
        <>
            <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-dark-gray-800">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Web Advanced Programming</span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Members</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li>
                                <p>Banh Hao Toan</p>
                            </li>
                            <li>
                                <p>Le Hoai Phuong</p>
                            </li>
                            <li>
                                <p>Le Quoc Ky Anh</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Github</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Email</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
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
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">University of Science</span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">227 Nguyen Van Cu, District 5, Ho Chi Minh City</span>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}