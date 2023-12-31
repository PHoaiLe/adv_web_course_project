'use client';

import { useState } from "react";
import Link from "next/link";

export default function UserDropdown({UserAvatar, UserName})
{
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const [userDropdownDisplay, setUserDropdownDisplay] = useState({display:'none', minWidth: "12rem"})

    return (
      <>
        <div key={"user-dropdown"} className="flex-col">
            <button type="button"
              className="text-black-500 block w-40" 
              onClick={(e) => 
              {
                const nextStatus = !dropdownPopoverShow
                setDropdownPopoverShow(nextStatus)
                if(nextStatus == true)
                {
                  setUserDropdownDisplay({display:'block', minWidth: "12rem"})
                }
                else
                {
                  setUserDropdownDisplay({display:'none', minWidth: "12rem"})
                }
              }}
              >
              <div className="items-center flex">
                <span className="w-12 h-12 text-sm bg-black-200 inline-flex items-center justify-center rounded-full">          
                  <img
                    alt="user avatar"
                    className="w-full rounded-full align-middle border-none shadow-lg"
                    src={(UserAvatar !== undefined && UserAvatar != null) ? UserAvatar : '../user.png'}/>
                </span>
                <div className="ml-3">
                  <p className="text-white font-sans text-base">{UserName !== undefined ? UserName: "Hello User" }</p>
                </div>
              </div>
            </button>

            <div
              className="bg-white text-base z-10 float-left py-2 list-none text-left rounded shadow-lg mt-1 absolute top-16"
              style={userDropdownDisplay}
            >
              <Link
                prefetch={false}
                key={"link-to-personal-info"}
                href="/account/personal_info"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black-700 hover:text-blue-500"
                }
              >
                Profile
              </Link>
              <Link
                prefetch={false}
                key={"link-to-account-info"}
                href="/account/account_info"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black-700 hover:text-blue-500"
                }
              >
                Account Info
              </Link>
              <div className="h-0 my-2 border border-solid border-black-100" />
              <Link
                prefetch={false}
                key={"link-to-logout"}
                href="/auth/logout"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white text-black-700 hover:text-blue-500"
                }
              >
                Sign Out
              </Link>
            </div>
          </div>
      </>
    );
}

  
