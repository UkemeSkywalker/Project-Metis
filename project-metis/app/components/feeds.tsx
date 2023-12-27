import React from 'react'

import { FaCamera, FaPlusCircle, FaDownload } from 'react-icons/fa'
import { AiFillAudio } from 'react-icons/ai'
import { FaVideo, FaBoxArchive } from 'react-icons/fa6'
import { IoDocumentTextSharp, IoPersonSharp, IoSchool } from 'react-icons/io5'
import { MdOutlineWork } from 'react-icons/md'
import RecentFiles from './recentfiles'


const Feeds = async() => {

    
  return (
    <div className="feeds flex-auto px-10 w-2/3 feeds bg-gray-100">
      <div className="search pt-5 ">
        <input
          className="h-10 w-full rounded-full px-5"
          type="text"
          id="search-input"
          placeholder="Search..."
        />
      </div>
      <div className="pt-5">
        <h2 className="font-black text-blue-800">Categories</h2>
        <div className="flex flex-row gap-4 pt-7">
          <div className="p-5 rounded-lg text-white bg-fuchsia-500 ">
            <IoDocumentTextSharp />
            <h3>Document</h3>
            <p>20 files</p>
          </div>
          <div className="p-5 rounded-lg text-white bg-yellow-500 ">
            <FaCamera />
            <h3>Image</h3>
            <p>20 files</p>
          </div>
          <div className="p-5 rounded-lg text-white bg-red-500 ">
            <AiFillAudio />
            <h3>Audio</h3>
            <p>20 files</p>
          </div>
          <div className="p-5 rounded-lg text-white bg-lime-500 ">
            <FaVideo />
            <h3>Video</h3>
            <p>20 files</p>
          </div>
          <div className="p-5 rounded-lg text-white bg-violet-500 ">
            <FaPlusCircle />
            <h3>Other</h3>
            <p>20 files</p>
          </div>
        </div>
      </div>

    {/*   <div className="pt-5">
        <h2 className="font-black text-blue-800 mb-10 ">Files</h2>
        <div className="flex flex-row gap-4">
          <div className="p-5 rounded-lg bg-white">
            <MdOutlineWork />
            <h3> Work</h3>
            <p>800 files</p>
          </div>
          <div className="p-5 rounded-lg bg-white">
            <IoPersonSharp />
            <h3>Personal</h3>
            <p>315 files</p>
          </div>
          <div className="p-5 rounded-lg bg-white">
            <IoSchool />
            <h3>School</h3>
            <p>70 files</p>
          </div>
          <div className="p-5 rounded-lg bg-white">
            <FaBoxArchive />
            <h3>Archive</h3>
            <p>20 files</p>
          </div>
        </div>
      </div> */}

      <div className="pt-5">
        <h2 className="font-black text-blue-800 mb-10 ">Recent Files</h2>
       
        < RecentFiles />
      </div>
    </div>

  )
}

export default Feeds