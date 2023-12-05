'use client';

import React from "react";
import { createPopper } from "@popperjs/core";
import {UserOutlined} from '@ant-design/icons'
import Link from "next/link";

export default function UserDropdown({UserAvatar, UserName})
{
  {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () =>
    {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-end"
      });
      setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () =>
    {
      setDropdownPopoverShow(false);
    };
    return (
      <>
        <button
          className="text-black-500 block w-40"
          ref={btnDropdownRef}
          onClick={e =>
          {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
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
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "12rem" }}
        >
          <Link
            href="/account/personal_info"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-green-500"
            }
          >
            Profile
          </Link>
          <Link
            href="/account/account_info"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-red-500"
            }
          >
            Account Info
          </Link>
          <div className="h-0 my-2 border border-solid border-black-100" />
          <Link
            href="/auth/logout"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-blue-500"
            }
          >
            Sign Out
          </Link>
        </div>
      </>
    );
  };
}

  
