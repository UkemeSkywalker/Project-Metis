import { FaCamera, FaPlusCircle } from 'react-icons/fa'
import { AiFillAudio } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa6'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

const Categories = async () => {

  async function getFileCount(type : string ) {
    const URL = `http://localhost:5001/api/vi/files/count/${type}`
    const res = await fetch(URL)
    const result = await res.json()
    return result
  }

  const docRes = await getFileCount("document")
  const {fileType : docType , count : docCount} = docRes;

  const imageRes = await getFileCount("document")
  const {fileType : imageType , count : imageCount} = imageRes;
  
  const audioRes = await getFileCount("audio")
  const {fileType : audioType , count : audioCount} = audioRes;
  
  const videoRes = await getFileCount("audio")
  const {fileType : videoType , count : videoCount} = videoRes;
  
  

  return (
    <div className="pt-5">
      <h2 className="font-black text-blue-800">Categories</h2>
      <div className="flex flex-row gap-4 pt-7">
        <div className="p-5 rounded-lg text-white bg-fuchsia-500 ">
          <IoDocumentTextSharp />
          <h3>{docType}</h3>
          <p>{docCount} files</p>
        </div>
        <div className="p-5 rounded-lg text-white bg-yellow-500 ">
          <FaCamera />
          <h3>{imageType}</h3>
          <p>{imageCount} files</p>
        </div>
        <div className="p-5 rounded-lg text-white bg-red-500 ">
          <AiFillAudio />
          <h3>{audioType}</h3>
          <p>{audioCount} files</p>
        </div>
        <div className="p-5 rounded-lg text-white bg-lime-500 ">
          <FaVideo />
          <h3>{videoType}</h3>
          <p>{videoCount} files</p>
        </div>
        {/* -------- Other Types of files -------------
        <div className="p-5 rounded-lg text-white bg-violet-500 ">
          <FaPlusCircle />
          <h3>Other</h3>
          <p>20 files</p>
        </div> 
  */}
      </div>
    </div>
  )
}
export default Categories
