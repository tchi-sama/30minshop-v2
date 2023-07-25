import React from 'react'
import {MdClose} from "react-icons/md"
import {logIn ,logOut} from "@/redux/features/auth-slice"
import {useDispatch} from "react-redux";
import { AppDispatch } from '@/redux/store';

function Leftbar() {
  return (
    <div className='w-[250px] border-r p-2 bg-white relative'>
        <h1 className='text-xl'>sections</h1>
        <h3 className='text-sm text-gray-500 '>drag and drop it</h3>
        <button className='btn btn-sm absolute top-2 right-2 w-10 h-10 flex items-center justify-center'><MdClose size={20}/></button>
    </div>
  )
}

export default Leftbar