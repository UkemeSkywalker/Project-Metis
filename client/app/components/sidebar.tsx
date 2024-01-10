import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { FaHouseLock  } from "react-icons/fa6";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";



const Sidebar = async() => {

  return (
    <div className='flex-auto w-1/8 sidebar pt-10 flex-col text-white '>
        < IoIosPerson  className=' text-8xl bg-white text-gray-300 justify-center items-center rounded-full m-6 '/>
        <div className="bg-blue-900 p-3 gap-2 flex flex-row justify-left items-center"> 
          < FaHouseLock />
          <a href='#'>My Cloud </a>
        </div>
        <div className="p-3 gap-2 flex flex-row justify-left items-center"> 
          < IoSettingsSharp /> 
          <a href = "#">Settings</a>
        </div>
        <div className="p-3 gap-2 flex flex-row justify-left items-center"> 
        < IoLogOut />
        <a href="#">Logout </a> 
        </div>
      </div>
  )
}

export default Sidebar