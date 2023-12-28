import { IoDocumentTextSharp } from 'react-icons/io5'
import { FaDownload } from 'react-icons/fa'


const RecentFiles = async () => {
  const URL = 'http://localhost:5001/api/vi/files/recent'
  const res = await fetch(URL)
  const data: Data[] = await res.json()

  return (
    <>
    <h2 className="font-black text-blue-800 mb-10 ">Recent Files</h2>
      <div className="flex flex-col mt-2 p-2 rounded-md recent-files-list ">
        <ul>
          {data.map((data) => (
            <li key={data.id} className="grid grid-cols-4 gap-x-4 mt-2 p-2 rounded-md bg-white">
              <div className=" flex flex-row items-center gap-2 ">
                <IoDocumentTextSharp className="text-fuchsia-600" />
                <h3>{data.fileName}</h3>
              </div>
              <div className=" justify-self-end ">
                <h3>{data.fileType}</h3>
              </div>
              <div className="justify-self-end">
                <h3>{data.fileSize}</h3>
              </div>
              <div className='justify-self-end'>
                <FaDownload />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default RecentFiles
