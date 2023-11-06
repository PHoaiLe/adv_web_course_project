import './login.css'
import Link from 'next/link';


function Page()
{
    let backButton = 'login_back_homepage_button'
    let emailKey = 'login_email_key';
    let password = 'login_password_key'
    let loginButtonKey = 'login_button_key'

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
                            <form>
                                <label id='login-email-label'>Email</label> <br/>
                                <input key={emailKey} type='text' label='login-email-label'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password'/>
                            </form>
                            <br/>
                            <button key={loginButtonKey}>Sign in</button>
                            <br/>
                            <div>

                            </div>
                        </div>
                    </div>
                    
                    <div className='login-retangle'>
                        <p>Sign in</p>
                        <Link className='login-to-register' href='/auth/sign_up'>I don't have an account</Link>
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}

export default Page