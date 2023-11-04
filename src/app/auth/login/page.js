import { Input } from 'postcss'
import './login.css'
import Link from 'next/link';


function Page()
{
    let emailKey = 'login_email_key';
    let password = 'login_password_key'
    let loginButtonKey = 'login_button_key'

    return(
        <div className='login-frame'>
            <div className='login-form-frame'>
                <div className='login-form-wrapper'>
                    <div className='login-form'>
                        <div>
                            <form>
                                <label>Email</label> <br/>
                                <input key={emailKey} type='text'/> <br/>
                                <label>Password</label> <br/>
                                <input key={password} type='password'/>
                            </form>
                            <br/>
                            <button key={loginButtonKey}>Login</button>
                            <br/>
                            <div>

                            </div>
                        </div>
                    </div>
                    
                    <div className='login-retangle'>
                        <p>Login</p>
                        <Link className='login-to-register' href='/auth/register'>I don't have an account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page