import React from 'react'
import {GiFallingStar} from "react-icons/gi"
function Window() {
  return (
    <div className='p-2  flex-1'>
        <div className="mockup-window h-full border bg-base-300 ">
            <div className="bg-white h-full">
                <div className='p-8 flex justify-center flex-col gap-4 h-full items-center'>
                    <p className='text-gray-500 text-sm'>make the page using ai buy just a click of button</p>
                    <button className='btn btn-primary border border-gray-200 shadow-2xl'> <GiFallingStar size={24}/> generate a page </button>
                    <button className='btn btn-white btn-sm border border-gray-200 shadow-2xl'> add section </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Window