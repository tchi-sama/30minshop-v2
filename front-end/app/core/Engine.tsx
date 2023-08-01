import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalRedux/store'
import Header from "../../storeSectionsComps/Header"
import Banner from "../../storeSectionsComps/Banner"
import { headerType, heroType } from '../types/sectionsTypes'
function Engine() {
    const store = useSelector((state:RootState)=>state.store.store)
  return (
    <div>
        {
        store.pages[0]?.sections.map(section=>{
            switch (section.type) {
                case "header":
                    return <div><Header section={section as headerType}/></div>
                case "hero":
                    return <div><Banner section={section as heroType}/></div>
                default:
                    break
            }
        })
        }
    </div>
  )
}

export default Engine