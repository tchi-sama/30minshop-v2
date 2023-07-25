"use client"
import React from 'react'
import {MdClose} from "react-icons/md"

import {useDispatch,useSelector} from "react-redux";
import {  closeRightBar  } from '@/app/GlobalRedux/Features/tools/toolsSlice';
import { RootState } from '@/app/GlobalRedux/store';

function Rightbar() {
  const showBar = useSelector((state:RootState)=>state.tools.showRightbar)
  const dispatch = useDispatch()
  return (
    showBar &&
    <div className='w-[300px] relative border-r p-2 bg-white '>
        <button onClick={()=>dispatch(closeRightBar())} className='btn btn-sm absolute top-2 right-2 w-10 h-10 flex items-center justify-center'><MdClose size={20}/></button>
        <h1 className='text-xl'>sections</h1>
        <h3 className='text-sm text-gray-500 '>drag and drop it</h3>
    </div>
  )
}

export default Rightbar