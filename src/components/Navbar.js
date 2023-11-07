'use client';
import React, { useState } from "react";

import UserDropdown from "./UserDropdown.js";
import QuickAccessClassModal from "./classes/quick_access_class_modal/QuickAccessClassModal.jsx";
import QuickCreateClassModal from "./classes/quick_create_class/QuickCreateClassModal.jsx";
import {PlusOutlined, BellOutlined} from '@ant-design/icons'
import {Badge} from 'antd'

export default function Navbar({UserInfor}) {

  const [openClassModal, setOpenClassModal] = useState(false)
  const [openCreateModal, setOpenCreateModal] = useState(false)

  ////////////////////////////////////////////////////

  function handleOpenClassModalClick(e)
  {
    setOpenClassModal(true)
  }

  function handleOpenQuickAccessClassModalCallback(value)
  {
    setOpenClassModal(value)
  }

  ////////////////////////////////////////////////////

  function handleOpenCreateClassModalClick(e)
  {
    setOpenCreateModal(true)
  }

  function handleOpenQuickCreateClassModalCallback(value)
  {
    setOpenCreateModal(value)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-blue-50 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Form */}

          <div className="md:flex hidden flex-row flex items-center lg:ml-auto rounded-full mr-3 hover:shadow hover:shadow-black">
            <button className="w-20 bg-blue-300 rounded-full hover:bg-blue-400" onClick={handleOpenCreateClassModalClick}>
              <PlusOutlined style={{fontSize: 'large'}}/>
            </button>
          </div>
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-3 rounded-full mr-3 hover:shadow hover:shadow-black">
            <button onClick={handleOpenClassModalClick}>
              <img className="w-10 bg-white p-1 rounded-full" src="../mortarboard.png"/>
            </button>
          </div>
          <div className="md:flex hidden flex-row flex items-center lg:ml-3 rounded-full mr-3 hover:shadow hover:shadow-black">
            <Badge count={3}>
              <button className="w-10 bg-white p-1 rounded-full hover:bg-blue-400 hover:text-white flex justify-center items-center" onClick={handleOpenCreateClassModalClick}>
                <BellOutlined style={{fontSize:'xx-large'}}/>
              </button>
            </Badge>
          </div>
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blue-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input type="text" placeholder="Search something..." className="border-0 px-3 py-3 placeholder-blue-300 text-black-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
            </div>
          </form> */}
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center lg:ml-3 hidden md:flex hover:shadow hover:shadow-black rounded-full bg-blue-900">
              {UserInfor !== undefined ? <UserDropdown UserAvatar={UserInfor.avatar}/>: <UserDropdown UserAvatar={undefined}/>}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
      <QuickAccessClassModal OpenModal={openClassModal} handleOpenModalCallback={handleOpenQuickAccessClassModalCallback}/>
      <QuickCreateClassModal OpenModal={openCreateModal} handleOpenModalCallback={handleOpenQuickCreateClassModalCallback}/>
    </>
  );
}
