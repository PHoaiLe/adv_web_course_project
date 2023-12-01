<<<<<<< HEAD
import SignInForm from '@/components/auth/signin_form/SignInForm';
import './login.css'
// import '../../../globals.css'
// import Link from 'next/link';
=======
import './login.css'
import '../../../globals.css'
import Link from 'next/link';
>>>>>>> b4fcfd8 (fix: both Sign-in page and Sign-up page presentation)

function Page()
{
    let backButton = 'login_back_homepage_button'
    let emailKey = 'login_email_key';
    let password = 'login_password_key'
    let loginButtonKey = 'login_button_key'
    let signUpButtonKey = 'login_sign_up_button_key';
    
    return(
        <>
<<<<<<< HEAD
            <SignInForm />
        </>
    )
}

export default Page

{/* <>
<div className='login-back-homepage'>
=======
            <div className='login-back-homepage'>
>>>>>>> b4fcfd8 (fix: both Sign-in page and Sign-up page presentation)
                <Link key={backButton} href='/'>Back</Link>
            </div>
            <div className='login-frame'>
            <div className='login-form-frame'>
                <div className='login-form-wrapper'>
                    <div className='login-form'>
                        <div>
                        <div className="sign-in-title">Sign In</div>
                            <form>
                                <label id='login-email-label'>Email</label> <br/>
<<<<<<< HEAD
                                <input key={emailKey} type='text' label='login-email-label' placeholder='Enter your email here...'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password' placeholder='Enter password...'/>
=======
                                <input key={emailKey} type='text' label='login-email-label'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password'/>
>>>>>>> b4fcfd8 (fix: both Sign-in page and Sign-up page presentation)
                                <div className="forgot-password">
                                <Link href='/auth/forgot_password'>Forgot password?</Link>
                            </div>
                            </form>
                            <br/>
                            
<<<<<<< HEAD
        //                     <button key={loginButtonKey}>Sign in</button>
        //                     <br/>
        //                     <div>

        //                     </div>
        //                 </div>
        //             </div>
                    
        //             <div className='login-retangle'>
        //                 <p>Hello Friend!</p>
        //                 <ti>Enter your personal detail and start with us</ti>
        //                 <Link  key={signUpButtonKey} href='/auth/sign_up'><button>Sign Up</button></Link>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        // </>
        <>
            <SignInForm />
        </>
    )
}

export default Page

{/* <>
<div className='login-back-homepage'>
                <Link key={backButton} href='/'>Back</Link>
            </div>
            </header>
            <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign in
                        </h1>
                        <div className="py-2 text-left">
                            <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Enter your email" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                Sign In
                            </button>
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Not having an account?
                        </span>
                        <a href="/auth/sign_up" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sign up here</a>
                    </div>
                </div>
            </div>
        </section>
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
</> */}
=======
                            <button key={loginButtonKey}>Sign in</button>
                            <br/>
                            <div>

                            </div>
                        </div>
                    </div>
                    
                    <div className='login-retangle'>
                        <p>Hello Friend!</p>
                        <ti>Enter your personal detail and start with us</ti>
                        <Link  key={signUpButtonKey} href='/auth/sign_up'><button>Sign Up</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}

export default Page
>>>>>>> b4fcfd8 (fix: both Sign-in page and Sign-up page presentation)
