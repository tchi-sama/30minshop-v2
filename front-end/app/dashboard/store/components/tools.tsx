import React from 'react'
import {TbSection} from "react-icons/tb"
import {BiPlus} from "react-icons/bi"
import {IoShareSocialOutline} from "react-icons/io5"
import {GoFile} from "react-icons/go"
import {BsCardImage} from "react-icons/bs"
import {IoSettingsOutline} from "react-icons/io5"

function Tools() {
  return (
    <div className='bg-white p-2  flex flex-col gap-1'>
        <button className='btn bg-primary hover:bg-primary-focus text-white shadow-[0_5px_10px_2px_#570df815]  border-none '><BiPlus size={22}/></button>
        <button className='btn bg-white border-none '><TbSection size={22}/></button>
        <button className='btn bg-white border-none '><IoShareSocialOutline size={22}/></button>
        <button className='btn bg-white border-none '><GoFile size={22}/></button>
        <button className='btn bg-white border-none '><BsCardImage size={20}/></button>
        <button className='btn bg-white border-none '><IoSettingsOutline size={20}/></button>
    </div>
  )
}


export default Tools
