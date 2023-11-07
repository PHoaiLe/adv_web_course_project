
import SignUpForm from '@/components/auth/signup_form/SignUpForm';
import './register.css'
// import '../../../globals.css'


function Page()
{
    let registerBackButton = 'register_back_button'
    let usernameKey = 'register_username_key'
    let fullnameKey = 'register_fullname_key'
    let emailKey = 'register_email_key';
    let password = 'register_password_key'
    let confirmPassword = 'register_confirm_password_key'
    let registerButtonKey = 'register_button_key'
    let signInButtonKey = 'login_sign_in_button_key'
    let phoneNumber = 'register_phone_number_key'

    return(
        <SignUpForm />
    )
}

export default Page
