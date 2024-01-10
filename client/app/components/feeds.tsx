import React from 'react'
import RecentFiles from './recentfiles'
import Categories from './categories'


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
      
      <Categories />

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
        < RecentFiles />
      </div>
    </div>

  )
}

export default Feeds