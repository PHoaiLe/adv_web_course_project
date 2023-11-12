import SignInForm from '@/components/auth/signin_form/SignInForm';
import './login.css'
// import '../../../globals.css'
// import Link from 'next/link';

function Page()
{    
    return(
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
            <div className='login-frame'>
            <div className='login-form-frame'>
                <div className='login-form-wrapper'>
                    <div className='login-form'>
                        <div>
                        <div className="sign-in-title">Sign In</div>
                            <form>
                                <label id='login-email-label'>Email</label> <br/>
                                <input key={emailKey} type='text' label='login-email-label' placeholder='Enter your email here...'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password' placeholder='Enter password...'/>
                                <div className="forgot-password">
                                <Link href='/auth/forgot_password'>Forgot password?</Link>
                            </div>
                            </form>
                            <br/>
                            
                            <button key={loginButtonKey}>Sign in</button>
                            <br/>
                            <div>

                            </div>
                        </div>
                        <div className="py-2">
                            <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-green-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="hover:text-blue-700" >Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Not having have an account?
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
                                <p>Member1</p>
                            </li>
                            <li>
                                <p>Member2</p>
                            </li>
                            <li>
                                <p>Member3</p>
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
                                <p>Member1</p>
                            </li>
                            <li>
                                <p>Member2</p>
                            </li>
                            <li>
                                <p>Member3</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
</> */}
