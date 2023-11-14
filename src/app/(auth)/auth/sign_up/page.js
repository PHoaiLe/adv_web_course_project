import SignUpForm from '@/components/auth/signup_form/SignUpForm';
import './register.css'
// import '../../../globals.css'



function Page()
{
    return(
        <SignUpForm />
    )
}

export default Page

        // <>
        //     <div className='register-back-homepage'>
        //         <Link key={registerBackButton} href='/'>Back</Link>
        //     </div>
        //     <div className='register-frame'>
        //         <div className='register-form-frame'>
        //             <div className='register-form-wrapper'>
        //                 <div className='register-retangle'>
        //                     <p>Welcome Back!</p>
        //                     <t>To keep connected with us, login with your personal info</t>
        //                     <Link key={signInButtonKey} href='/auth/sign_in'><button>Sign In</button></Link>
        //                 </div>

        //                 <div className='register-form'>
        //                     <div className='font-content'>
        //                     <div className="create-account-title">Create account</div>
        //                         <form>
        //                             <input key={fullnameKey} type='text' placeholder='Full Name'/> <br/>
        //                             <input key={usernameKey} type='text' placeholder='Username'/> <br/>
        //                             <input key={emailKey} type='text' placeholder='Email'/> <br/>
        //                             <input key={password} type='password' placeholder='Password'/> <br/>
        //                             <input key={confirmPassword} type='password' placeholder='Confirm Password'/> <br/>
        //                             <input key={phoneNumber} type='string' placeholder='Phone Number'/>
        //                         </form>
        //                         <br/>
        //                         <button key={registerButtonKey}>Sign up</button>
        //                         <br/>
        //                         <div>
        