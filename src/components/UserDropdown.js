'use client';

import React from "react";
import { createPopper } from "@popperjs/core";

export default function UserDropdown()
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
        <a
          className="text-black-500 block"
          href="#pablo"
          ref={btnDropdownRef}
          onClick={e =>
          {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          <div className="items-center flex">
            <span className="w-12 h-12 text-sm text-white bg-black-200 inline-flex items-center justify-center rounded-full">
              <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src="classroom.jpg"
              />
            </span>
          </div>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
          }
          style={{ minWidth: "12rem" }}
        >
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-green-500"
            }
            onClick={e => e.preventDefault()}
          >
            Profile
          </a>
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-red-500"
            }
            onClick={e => e.preventDefault()}
          >
            Edit Profile
          </a>
          <div className="h-0 my-2 border border-solid border-black-100" />
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black-700 hover:text-blue-500"
            }
            onClick={e => e.preventDefault()}
          >
            Sign Out
          </a>
        </div>
      </>
    );
  };
}

