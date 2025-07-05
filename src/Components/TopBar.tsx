// import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbArrowAutofitDown } from "react-icons/tb";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiArrowsSplitBold } from "react-icons/pi";
import { useState } from "react";

function TopBar() {
  // State to toggle visibility of the toolbar
  const [isToolbarOpen, setIsToolbarOpen] = useState(true);

  return (
    <div className="flex items-center justify-between  max-w-full  h-[48px] border-b px-[8px] py-[6px] bg-[#FFFFFF] border-b-[#EEEEEE]">
      {/* Left section: toolbar label and buttons */}
      <div className="flex ">
        {/* Toolbar label and toggle icon */}
        <div className="flex items-center gap-[4px] w-[91px] h-[36px] p-[4px]">
          <h3 className="w-[55px] h-[20px] font-[400] text-[14px] leading-[20px]">Tool bar</h3>
          <div onClick={() => setIsToolbarOpen(!isToolbarOpen)} className="w-[16px] h-[16px]">
            <MdKeyboardDoubleArrowRight className="h-[12px] w-[12px] mt-[4px] cursor-pointer" />
          </div>
        </div>
        <p className="w-[2px] h-[24px] bg-[#EEEEEE]"></p>
        {/* Toolbar action buttons */}
        <div
          className={`flex gap-[4px]  w-[871px] h-[36px] ${
            isToolbarOpen ? "visible" : "invisible"
          }`}
        >
          {/* Hide Fields */}
          <button
            onClick={() => console.log("hide fields")}
            className="flex cursor-pointer   items-center gap-[4px]  w-[118px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <LuEyeOff className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Hide fields</h3>
          </button>
          {/* Sort */}
          <button
            onClick={() => console.log("sorting..")}
            className="flex cursor-pointer   gap-[4px] items-center w-[73px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <LuArrowUpDown className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Sort</h3>
          </button>
          {/* Filter */}
          <button
            onClick={() => console.log("filtereing")}
            className="flex cursor-pointer   gap-[4px] items-center w-[80px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <IoFilter className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Filter</h3>
          </button>
          {/* Cell View */}
          <button
            onClick={() => console.log("cell view")}
            className="flex cursor-pointer   gap-[4px] items-center w-[105px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <TbArrowAutofitDown className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Ceil View</h3>
          </button>
        </div>
      </div>
      {/* Right section: import/export/share buttons and new action */}
      <div className="flex w-full  max-w-[437px] h-[36px] gap-[8px]">
        <div className="flex gap-[8px] w-[279px] h-[36px]">
          {/* Import */}
          <button
            onClick={() => console.log("importing")}
            className="flex cursor-pointer hover:bg-[#4B6A4F] hover:text-white  gap-[4px] border border-[#EEEEEE] items-center w-[90px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <CiImport className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Import</h3>
          </button>
          {/* Export */}
          <button
            onClick={() => console.log("exporting")}
            className="flex  cursor-pointer hover:bg-[#4B6A4F] hover:text-white  gap-[4px] border border-[#EEEEEE] items-center w-[89px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <CiExport className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Export</h3>
          </button>
          {/* Share */}
          <button
            onClick={() => console.log("share spreadsheet")}
            className="flex gap-[4px] cursor-pointer hover:bg-[#4B6A4F]  hover:text-white border border-[#EEEEEE] items-center w-[89px] h-[36] py-[8px] pl-[8px] pr-[12px]"
          >
            <div className="w-[16px] h-[16px]">
              <FaRegShareFromSquare className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Share</h3>
          </button>
        </div>
        {/* New Action Button */}
        <button
          onClick={() => console.log(" new action")}
          className="flex gap-[4px] cursor-pointer items-center rounded-md w-[150px] h-[36px] py-[8px] px-[24px] bg-[#4B6A4F] text-white"
        >
          <div className="w-[16px] h-[16px]">
            <PiArrowsSplitBold className="h-[16px] w-[16px] mt-[1px]" />
          </div>
          <h3 className="font-[400] text-[14px] leading-[20px]">New Action</h3>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
