'use client'
import { FaUpload } from 'react-icons/fa';
const DragAndDrop = () => {

    return(
        <div className='upload w-full flex flex-col p-20 rounded-lg justify-center  items-center bg-gray-100'>
            <FaUpload className='text-4xl  text-blue-500' />
            <p className='font-black text-blue-500'>Upload</p>
        </div>
    )
}
export default DragAndDrop