// Navbar.js

import { headerType } from '@/app/types/sectionsTypes';
import React from 'react';
import {BsCart2 , BsSearch} from "react-icons/bs"

const Navbar = ({ section }: { section: headerType }) => {
  return (
    <nav style={{backgroundColor:section.properties.general?.headerColor}} className="shadow-xl z-10 border-b top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center w-full h-16 ">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl " style={{color:section.properties.logoText?.color}}>{section.properties.logoText?.text}</span>
          </div>
          <div className="hidden md:block flex-1">
            <div style={{justifyContent:section.properties.links?.align}} className="px-8 flex items-center gap-4 w-full">
              {
                section.properties.links?.linksArray?.map(link=>{
                  return (
                      link.show &&
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900  py-2 rounded-md text-sm font-medium"
                      >
                        {link.name}
                      </a>
                  )
                })
              }
            </div>
          </div>
          <div>
            <button className='btn bg-transparent border-none hover:bg-transparent btn-sm'>
              <BsCart2 size={22}/>
            </button>
            <button className='btn bg-transparent border-none hover:bg-transparent btn-sm'>
              <BsSearch size={22}/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
