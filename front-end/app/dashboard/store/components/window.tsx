"use client"
import { setTool } from '@/app/GlobalRedux/Features/tools/toolsSlice'
import Engine from '@/app/core/Engine'
import Banner from '@/storeSectionsComps/Banner'
import Navbar from '@/storeSectionsComps/Header'
import React from 'react'
import {GiFallingStar} from "react-icons/gi"
import { useDispatch } from 'react-redux'
function Window() {
  const dispatch=useDispatch()
  return (
    <div className='p-2  flex-1'>
        <div className="mockup-window border bg-base-300 ">
            <div className="bg-white h-[calc(100vh-120px)] relative overflow-y-scroll">
                {/* <div className='p-8 flex justify-center flex-col gap-4 h-full items-center'> 
                     <p className='text-gray-500 text-sm'>Experience the new ai feature</p>
                    <button className='btn btn-primary border border-gray-200 shadow-2xl'> <GiFallingStar size={24}/> generate a page </button>
                    <button onClick={()=>dispatch(setTool(0))} className='btn btn-white btn-sm border border-gray-200 shadow-2xl'> add section </button>
                 </div>  */}
                 <Engine/>
            </div>
        </div>
    </div>
  )
}

export default Window