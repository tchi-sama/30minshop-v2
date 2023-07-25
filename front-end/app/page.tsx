"use client"

import type { RootState } from "./GlobalRedux/store"
import { useDispatch , useSelector } from "react-redux"
import { setTool } from "./GlobalRedux/Features/tools/toolsSlice"

export default function Home() {
   const tool = useSelector((state:RootState)=>state.tools.toolSelected)
  return (
    <h1>
      {tool}
      hello world
    </h1>
  )
}
