import './login.css'
import Link from 'next/link';

function Page()
{
    let backButton = 'login_back_homepage_button'
    let emailKey = 'login_email_key';
    let password = 'login_password_key'
    let loginButtonKey = 'login_button_key'
    let signUpButtonKey = 'login_sign_up_button_key';
    
    return(
        <>
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
                                <input key={emailKey} type='text' label='login-email-label'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password'/>
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