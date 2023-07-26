import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../GlobalRedux/store'
function Engine() {
    const store = useSelector((state:RootState)=>state.store.store)
  return (
    <div>
        {
        store.pages[0].sections.map(section=>{
            switch (section.type) {
                case "header":
                    return <div>header</div>
                case "hero":
                    return <div>hero</div>
            }
        })
        }
    </div>
  )
}

export default Engine