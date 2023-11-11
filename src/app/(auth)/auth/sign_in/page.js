import SignInForm from '@/components/auth/signin_form/SignInForm';
import './login.css'
// import '../../../globals.css'
// import Link from 'next/link';

function Page()
{    

    let backButton = 'login_back_homepage_button'
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
        
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">University of Science</span>
                    </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Web Advanced Progamming-20KTPM2</h2>
                    </div>
                </div>
            </div>
</> */}
