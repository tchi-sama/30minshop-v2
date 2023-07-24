import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import {LuArrowUpRight} from "react-icons/lu";
import {FaRegSave} from "react-icons/fa"

function Navbar() {
  return (
    <div className="p-2 flex items-center bg-white border-b">
      {/* // left */}
      <div className="flex-1 flex">
        <button className=" flex gap-2 items-center btn btn-sm">
          <IoMdArrowBack size={18} />
          <span>dashboard</span>
        </button>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex gap-2">
          <button className="btn btn-sm">
            <LuUndo2 size={16} ></LuUndo2>
          </button>
          <button className="btn btn-sm">
            <LuRedo2 size={16}></LuRedo2>
          </button>
        </div>
      </div>
      {/* // center */}

      <div className="flex-1 flex items-center justify-center">

        <div className="join">
            <select className="select join-item select-sm select-bordered w-[200px]">
            <option disabled>
                all the pages of ur store
            </option>
            <option selected>home</option>
            <option>about</option>
            <option>contact</option>
            <option>cart</option>
            </select>
            <button className="btn btn-bordered btn-sm join-item">
                add
            </button>
        </div>


      </div>


      {/* // right  */}
        
        <div className="flex-1 flex justify-end gap-2 items-center">
            <button className="btn btn-sm ">save <FaRegSave ></FaRegSave></button>
            <button className="btn btn-sm btn-neutral">go live <LuArrowUpRight size={20} ></LuArrowUpRight></button>
        </div>
    </div>
  );
}

export default Navbar;
