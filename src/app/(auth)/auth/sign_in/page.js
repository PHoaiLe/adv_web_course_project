import SignInForm from '@/components/auth/signin_form/SignInForm';
import './login.css'
// import '../../../globals.css'
// import Link from 'next/link';

function Page()
{    

    let backButton = 'login_back_homepage_button'
    let emailKey = 'login_email_key';
    let password = 'login_password_key'
    let loginButtonKey = 'login_button_key'
    let signUpButtonKey = 'login_sign_up_button_key';

    // Function to save tokens to cookies
    const handleLogin = async () => {
        const email = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        try {
            // Perform login logic and obtain access token and refresh token from your server
            const response = await fetch('your_authentication_api_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const accessToken = data.access_token;
                const refreshToken = data.refresh_token;

                // Save tokens to cookies
                saveTokensToCookies(accessToken, refreshToken);
            } else {
                // Handle login error
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const saveTokensToCookies = (accessToken, refreshToken) => {
        Cookies.set('accessToken', accessToken);
        Cookies.set('refreshToken', refreshToken);
    };
    
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
                    </div>
                    
                    <div className='login-retangle'>
                        <p>Hello Friend!</p>
                        <ti>Enter your personal detail and start with us</ti>
                        <Link  key={signUpButtonKey} href='/auth/sign_up'><button>Sign Up</button></Link>
                    </div>
                </div>
            </div>
            </div>
</> */}