export default function Page(){
    return(
    <>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold uppercase text-gray-900 dark:text-white">About</h2>
                    <p className="mb-4">This project is about a learning website like Google Classroom, which is built by 3 members studying at HCMUS University.</p>
                    <p>Special thanks to our instructors who have guided us to learn and built.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="../classroom1.jpg"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="../classroom2.jpg"/>
            </div>
            </div>
        </section>
    </>
    )
}