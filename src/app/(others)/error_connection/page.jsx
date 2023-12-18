import '@/app/globals.css'

function ErrorConnectionPage()
{
    return(
        <div className='w-full h-full flex justify-center items-center font-sans'>
            <h1 className='text-red-600'>Error Connection</h1>
            <p>There are some unknown errors happen in the server-side.</p>
            <p>Please check your connection.</p>
            <p>Or we will fix them as soon as possible</p>
        </div>
    )
}

export default ErrorConnectionPage