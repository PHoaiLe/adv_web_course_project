import Link from "next/link";
import './TopNavBar.css';


function WebTopNavBar()
{

    let listOfElements = 
    <>
        {/* Logo */}
        <li className='top-nav-bar-frame-logo'>
            <Link href='/'><img src="next.svg"/></Link>
        </li>

        <ul className='top-nav-bar-frame-functions'>
            <li className='top-nav-bar-frame-single-function'>
                <Link className="top-nav-bar-frame-single-function-link" href='/'>Home</Link>
            </li>
            <li className='top-nav-bar-frame-single-function'>
                <Link className="top-nav-bar-frame-single-function-link" href='#'>Products</Link>
            </li>
            <li className='top-nav-bar-frame-single-function'>
                <Link className="top-nav-bar-frame-single-function-link" href='#'>About Us</Link>
            </li>

            <li className='top-nav-bar-frame-no-auth'>
                <Link className="top-nav-bar-frame-single-function-link" href='/auth/sign_in'>Sign in</Link>
            </li>
        </ul>

    </>

    return(
        <div className='top-nav-bar-frame'>
            <ul>
                {listOfElements}
            </ul>
        </div>
    )
}

export default WebTopNavBar;
