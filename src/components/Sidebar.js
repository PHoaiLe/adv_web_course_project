'use client';
import React, { useState } from "react";
import Link from "next/link";

import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";

export default function Sidebar()
{
  const [collapseShow, setCollapseShow] = useState("hidden");
  function showCollapse()
  {
    setCollapseShow("bg-white m-2 py-3 px-6")
  }
  function hiddenCollapse()
  {
    setCollapseShow("hidden")
  }

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-20 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={showCollapse}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            Welcome
          </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-red-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-red-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                  >
                    Expand
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={hiddenCollapse}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div> */}
            {/* Form
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search classes..."
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-green-500 hover:text-blue-600 text-xs uppercase py-3 font-bold block"
                  href="/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-black-700 hover:text-blue-500 text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fas fa-newspaper text-black-400 mr-2 text-sm"></i> Landing Page
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  href="/"
                >
                  <i className="fas fa-newspaper text-black-400 mr-2 text-sm"></i> Landing Page
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  href="/">
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i> Sign In
                </Link>
              </li>

              <li className="items-center">
                <a
                  className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i> Sign Up
                </a>
              </li> */}

              <li className="items-center">
                <a
                  className="text-black-700 hover:text-blue-500 text-xs uppercase py-3 font-bold block"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-tools text-black-400 mr-2 text-sm"></i> Setting
                </a>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-black-700 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Lists
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500 text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fas fa-paint-brush mr-2 text-blue-400 text-base"></i> To Do
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500 text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fab fa-css3-alt mr-2 text-blue-400 text-base"></i> Assignments
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500 text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fab fa-vuejs mr-2 text-blue-400 text-base"></i> Calendar
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500  text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fab fa-react mr-2 text-blue-400 text-base"></i> Online Users
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500  text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fab fa-angular mr-2 text-blue-400 text-base"></i> My courses
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-black-700 hover:text-blue-500  text-sm block mb-4 no-underline font-semibold"
                  href="/">
                  <i className="fab fa-js-square mr-2 text-blue-400 text-base"></i> Upcoming Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
