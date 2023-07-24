import React from 'react'
import {GiFallingStar} from "react-icons/gi"
function Window() {
  return (
    <div className='p-2  flex-1'>
        <div className="mockup-window h-full border bg-base-300 ">
            <div className="bg-white h-full">
                <div className='p-8 flex justify-center h-full items-center'>
                    <button className='btn btn-neutral'> <GiFallingStar size={24}/> add new section </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Window