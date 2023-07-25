"use client"
import React from 'react'
import {MdClose} from "react-icons/md"
import {useDispatch,useSelector} from "react-redux";
import { closeLeftBar } from '@/app/GlobalRedux/Features/tools/toolsSlice';
import { RootState } from '@/app/GlobalRedux/store';
import Addsection from './leftbarComp/Addsection';

function Leftbar() {
  const showBar = useSelector((state:RootState)=>state.tools.showLeftbar)
  const tool = useSelector((state:RootState)=>state.tools.toolSelected)
  const dispatch = useDispatch()
  return (
    showBar &&
    <div className='w-[250px] border-r p-2 bg-white relative'>
        <button onClick={()=>dispatch(closeLeftBar())} className='btn btn-sm absolute top-2 right-2 w-10 h-10 flex items-center justify-center'><MdClose size={20}/></button>
        {
          tool==0?
          <Addsection/>
          :""
        }
    </div>
  )
}

export default Leftbar