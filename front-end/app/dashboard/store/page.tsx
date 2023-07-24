import React from 'react'
import Navbar from './components/navbar'
import Tools from './components/tools'
import Leftbar from './components/leftbar'
import Rightbar from './components/rightbar'
import Window from './components/window'

export default function Page (){
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className='flex flex-1'>
        <Tools/>
        <Leftbar/>
        <Window/>
        <Rightbar/>
      </div>
    </div>
  )
}
