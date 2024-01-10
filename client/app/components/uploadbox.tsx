import React from 'react'
import DragAndDrop from './dragAndDrop'

function Uploadbox() {
  return (
    <div className='upload-box flex-auto w-1/4 bg-white p-10 flex flex-col items-center divide-x"'>

            < DragAndDrop />
            
            <div className='w-full flex flex-col mt-10 rounded-lg px-4 bg-gray-100 p-4'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justify-between'>            
                    <p className='font-bold text-blue-500'>your storage</p>
                    <p className='font-semibold text-cyan-500'>25% left</p>
                </div>
                <div className='pt-2'>
                  <p>75GB of 100GB are used</p> 
                </div>
                
                <div className='pt-2' >
                  <div className="w-full bg-gray-200 rounded-full h-2.5 bg-gray-100">
                    <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
  )
}

export default Uploadbox