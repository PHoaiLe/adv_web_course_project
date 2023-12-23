'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import UserDropdown from "./UserDropdown.js";
import QuickAccessClassModal from "./classes/quick_access_class_modal/QuickAccessClassModal.jsx";
import QuickCreateClassModal from "./classes/quick_create_class/QuickCreateClassModal.jsx";
import {PlusOutlined, BellOutlined} from '@ant-design/icons'
import {Badge} from 'antd'
import QuickJoinClassModal from "./classes/quick_join_class_modal/QuickJoinClassModal.jsx";
import { useRouter } from "next/navigation.js";
import { JoinClassModalMode } from "./classes/quick_join_class_modal/JoinClassModalMode.jsx";
import { QuickModalTypes } from "./classes/quick_modal_types.jsx";



export default function Navbar({UserInfor, ProvidedAllClasses, ProvidedJoinedClasses}) 
{

  const [openClassModal, setOpenClassModal] = useState(false)
  const [openPopupMenu, setOpenPopupMenu] = useState(false)
  const [popupMenuDisplay, setPopupMenuDisplay] = useState({display: 'none'})

  const [AllClasses, setAllClasses] = useState(ProvidedAllClasses)
  const [JoinedClasses, setJoinedClasses] = useState(ProvidedJoinedClasses)
  const router = useRouter()

  //modes
  const [openCreateClassModal, setOpenCreateClassModal] = useState(false)
  const [openJoinClassModal, setOpenJoinClassModal] = useState(false)

  let addButton = <></>
  let addButtonEventModal = <></>


  useEffect(() =>
  {
    if(openPopupMenu == true)
    {
      setPopupMenuDisplay({display:'block', minWidth: '12em'})
    }
    else
    {
      setPopupMenuDisplay({display:'none'})
    }
  }, [openPopupMenu])

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

  function handleOpenQuickAddModalCallback(key, value)
  {
    if(key == QuickModalTypes.QUICK_CREATE_CLASS_MODAL)
    {
      setOpenCreateClassModal(value)
    }
    else if(key == QuickModalTypes.QUICK_JOIN_CLASS_MODAL)
    {
      setOpenJoinClassModal(value)
    }
  }



  function handleCreatedActionCallback(newCreatedClass)
  {
    let ClonedOfCreatedClasses = AllClasses.slice()
    ClonedOfCreatedClasses.push(newCreatedClass)
    setAllClasses(ClonedOfCreatedClasses)
  }

  function handleAddButtonModesClick(key, value)
  {
    console.log(key + ": " + value)
    if(key == QuickModalTypes.QUICK_CREATE_CLASS_MODAL)
    {
      setOpenCreateClassModal(value)
    }
    else if(key == QuickModalTypes.QUICK_JOIN_CLASS_MODAL)
    {
      setOpenJoinClassModal(value)
    }
  }

  //Notifications......................................

  function handleOpenNotificationClick()
  {
    
  }

  if(UserInfor === undefined)
  {
  //   //for testing
  //   addButtonEventModal = <QuickCreateClassModal OpenModal={openAddModal} handleOpenModalCallback={handleOpenQuickAddModalCallback}/>
  }
  else if(UserInfor.role == 'teacher')
  {

    const modalModes = [JoinClassModalMode.JOIN_BY_LINK]
    const createMode = <QuickCreateClassModal key={"create-class-modal"} OpenModal={openCreateClassModal} handleOpenModalCallback={handleOpenQuickAddModalCallback} handleCreatedActionCallback={handleCreatedActionCallback}/>
    const joinMode = <QuickJoinClassModal key={"joind-class-modal"} OpendModal={openJoinClassModal} handleOpenModalCallback={handleOpenQuickAddModalCallback} ModalModes={modalModes}/>
    const sampleOfAddButtonEventModal = []
    sampleOfAddButtonEventModal.push(joinMode)
    sampleOfAddButtonEventModal.push(createMode)
    addButtonEventModal = sampleOfAddButtonEventModal

    addButton = 
    <div className="md:flex hidden flex-row flex items-center lg:ml-auto rounded-full mr-3 hover:shadow hover:shadow-black">
      <button className="w-20 bg-blue-300 rounded-full hover:bg-blue-400" onClick={(e) => {setOpenPopupMenu(!openPopupMenu)}}>
        <PlusOutlined style={{fontSize: 'large'}}/>
      </button>
      <div className="absolute w-40 py-2 px-4 z-10 bg-white top-14 rounded shadow-lg" style={popupMenuDisplay}>
        <div className="flex flex-col">
            <button key={"select-create-class"} className="text-left text-sm py-2 font-normal block w-full whitespace-nowrap bg-white text-black-700 hover:text-blue-500" onClick={(e) => {handleAddButtonModesClick(QuickModalTypes.QUICK_CREATE_CLASS_MODAL, !openCreateClassModal)}}>
                Create class
            </button>
            <button key={"select-join-class"} className="text-left text-sm py-2 font-normal block w-full whitespace-nowrap bg-white text-black-700 hover:text-blue-500" onClick={(e) => {handleAddButtonModesClick(QuickModalTypes.QUICK_JOIN_CLASS_MODAL, !openJoinClassModal)}}>
                Join class
            </button>
        </div>
      </div>
    </div>

  }
  else if(UserInfor.role == 'student')
  {

    const modalModes = [JoinClassModalMode.JOIN_BY_LINK, JoinClassModalMode.JOIN_BY_CODE]
    addButtonEventModal = <QuickJoinClassModal key={"join-class-modal"} OpendModal={openJoinClassModal} handleOpenModalCallback={handleOpenQuickAddModalCallback} ModalModes={modalModes}/>
    
    addButton =
    <div className="md:flex hidden flex-row flex items-center lg:ml-auto rounded-full mr-3 hover:shadow hover:shadow-black">
      <button className="w-20 bg-blue-300 rounded-full hover:bg-blue-400" onClick={(e) => handleAddButtonModesClick(QuickModalTypes.QUICK_JOIN_CLASS_MODAL, !openJoinClassModal)}>
        <PlusOutlined style={{fontSize: 'large'}}/>
      </button>
    </div>  
  }


  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-50 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 z-10">
        <div className="w-full mx-autp items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Form */}
          <div
            className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-3xl uppercase font-bold p-4 px-0"
          ><Link href="/">
            Educa
            </Link>
        </div>
          {addButton}

          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-3 rounded-full mr-3 hover:shadow hover:shadow-black">
            <button onClick={handleOpenClassModalClick}>
              <img className="w-10 bg-white p-1 rounded-full" src="../mortarboard.png"/>
            </button>
          </div>
          <div className="md:flex hidden flex-row flex items-center lg:ml-3 rounded-full mr-3 hover:shadow hover:shadow-black">
            <Badge count={3}>
              <button className="w-10 bg-white p-1 rounded-full hover:bg-blue-400 hover:text-white flex justify-center items-center" onClick={handleOpenNotificationClick}>
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
          <div className="flex-col md:flex-col list-none items-center lg:ml-3 hidden md:flex hover:shadow hover:shadow-black rounded-full bg-blue-900">
              {UserInfor !== undefined ? <UserDropdown UserAvatar={UserInfor.avatar} UserName={UserInfor.fullname}/>: <UserDropdown UserAvatar={undefined} UserName={undefined}/>}
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <QuickAccessClassModal UserRole={UserInfor.role} OpenModal={openClassModal} handleOpenModalCallback={handleOpenQuickAccessClassModalCallback} ProvidedJoinedClasses={JoinedClasses} ProvidedAllClasses={AllClasses}/>
      {addButtonEventModal}
    </>
  );
}
