"use client"
import { setStore } from '@/app/GlobalRedux/Features/shop/storeSlice'
import { setTool } from '@/app/GlobalRedux/Features/tools/toolsSlice'
import { RootState } from '@/app/GlobalRedux/store'
import Engine from '@/app/core/Engine'
import Banner from '@/storeSectionsComps/Banner'
import Navbar from '@/storeSectionsComps/Header'
import { generateKey } from 'crypto'
import React, { useEffect, useState } from 'react'
import {GiFallingStar} from "react-icons/gi"
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { pageType } from '@/app/types/storeType'
function Window() {
  const dispatch=useDispatch()
  const [loading,setLoading]=useState(false)
  const store = useSelector((state:RootState)=>state.store.store)
  const generate=async ()=>{
    setLoading(true)
    const data = await axios.get<pageType>("http://localhost:8080/generate")
    // return data 
    setLoading(false)
    console.log(data)
    dispatch(setStore(data.data))
  }
  return (
    <div className='p-2  flex-1'>
        <div className="mockup-window border bg-base-300 ">
            <div className="bg-white h-[calc(100vh-120px)] relative overflow-y-scroll">
              
                {
                  store.pages.length==0?
                  <div className='p-8 flex justify-center flex-col gap-4 h-full items-center'> 
                    <p className='text-gray-500 text-sm'>Experience the new ai feature</p>
                    {
                      loading?
                      "loading":
                      <button onClick={generate} className='btn btn-primary border border-gray-200 shadow-2xl'> <GiFallingStar size={24}/> generate a page </button>
                    }
                    <button onClick={()=>dispatch(setTool(0))} className='btn btn-white btn-sm border border-gray-200 shadow-2xl'> add section </button>
                  </div>
                  : 
                  <div>
                    <Engine/>
                  </div>
                 }
            </div>
        </div>
    </div>
  )
}

export default Window