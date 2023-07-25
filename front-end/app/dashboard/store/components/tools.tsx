"use client"
// icons import
import {TbSection} from "react-icons/tb"
import {BiPlus} from "react-icons/bi"
import {IoShareSocialOutline} from "react-icons/io5"
import {GoFile} from "react-icons/go"
import {BsCardImage} from "react-icons/bs"
import {IoSettingsOutline} from "react-icons/io5"

// redux
import { useDispatch,useSelector } from 'react-redux';
import { setTool } from '@/app/GlobalRedux/Features/tools/toolsSlice'
import { RootState } from '@/app/GlobalRedux/store'



const tools = [
  {name:"add section",icon:<BiPlus size={22}/>},
  {name:"page sections",icon:<TbSection size={22}/>},
  {name:"brand info",icon:<IoShareSocialOutline size={22}/>},
  {name:"page",icon:<GoFile size={20}/>},
  {name:"uploads",icon:<BsCardImage size={20}/>},
  {name:"setting",icon:<IoSettingsOutline size={22}/>},
]
function Tools() {
  const toolSelected = useSelector((state:RootState)=>state.tools.toolSelected)
  const dispatch = useDispatch();
  return (
    <div className='bg-white p-2  flex flex-col gap-1'>
      {
        tools.map((tool,i)=>(
          toolSelected===i ?
          <button onClick={()=>dispatch(setTool(i))} className='btn bg-primary hover:bg-primary-focus text-white shadow-[0_5px_10px_2px_#570df815]  border-none '>{tool.icon}</button>
          :
          <button onClick={()=>dispatch(setTool(i))} className='btn bg-transparent text-gray-500 border-none '>{tool.icon}</button>
        ))
      }
    </div>
  )
}


export default Tools
