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



function TopBar() {
  return (
    <div className="flex items-center  w-full max-w-[1440px] h-[48px] border-b px-[8px] py-[6px] bg-[#FFFFFF] border-b-[#EEEEEE]">
      <div className="flex items-center gap-[4px] w-[91px] h-[36px] p-[4px]">
        <h3 className="w-[55px] h-[20px] font-[400] text-[14px] leading-[20px]">
          Tool bar
        </h3>
        <div className="w-[16px] h-[16px]">
          <MdKeyboardDoubleArrowRight className="h-[12px] w-[12px] mt-[4px] cursor-pointer" />
        </div>
      </div>
      <p className="w-[2px] h-[24px] bg-[#EEEEEE]"></p>
      <div className="flex gap-[4px] w-full max-w-[871px] h-[36px]">
        <button className="flex cursor-pointer   items-center gap-[4px]  w-[118px] h-[36] py-[8px] pl-[8px] pr-[12px]">
          <div className="w-[16px] h-[16px]">
            <LuEyeOff className="h-[16px] w-[16px] mt-[1px]" />
          </div>
          <h3 className="font-[400] text-[14px] leading-[20px]">Hide fields</h3>
        </button>
        <button className="flex cursor-pointer   gap-[4px] items-center w-[73px] h-[36] py-[8px] pl-[8px] pr-[12px]">
          <div className="w-[16px] h-[16px]">
            <LuArrowUpDown className="h-[16px] w-[16px] mt-[1px]" />
          </div>
          <h3 className="font-[400] text-[14px] leading-[20px]">Sort</h3>
        </button>
        <button className="flex cursor-pointer   gap-[4px] items-center w-[80px] h-[36] py-[8px] pl-[8px] pr-[12px]">
          <div className="w-[16px] h-[16px]">
            <IoFilter className="h-[16px] w-[16px] mt-[1px]" />
          </div>
          <h3 className="font-[400] text-[14px] leading-[20px]">Filter</h3>
        </button>
        <button className="flex cursor-pointer   gap-[4px] items-center w-[105px] h-[36] py-[8px] pl-[8px] pr-[12px]">
          <div className="w-[16px] h-[16px]">
            <TbArrowAutofitDown className="h-[16px] w-[16px] mt-[1px]" />
          </div>
          <h3 className="font-[400] text-[14px] leading-[20px]">Ceil View</h3>
        </button>
      </div>
      <div className="flex w-full max-w-[437px] h-[36px] gap-[8px]">
        <div className="flex gap-[8px] w-[279px] h-[36px]">
          <button className="flex cursor-pointer   gap-[4px] border border-[#EEEEEE] items-center w-[90px] h-[36] py-[8px] pl-[8px] pr-[12px]">
            <div className="w-[16px] h-[16px]">
              <CiImport className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Import</h3>
          </button>
          <button className="flex  cursor-pointer  gap-[4px] border border-[#EEEEEE] items-center w-[89px] h-[36] py-[8px] pl-[8px] pr-[12px]">
            <div className="w-[16px] h-[16px]">
              <CiExport className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Export</h3>
          </button>
          <button className="flex gap-[4px] cursor-pointer   border border-[#EEEEEE] items-center w-[89px] h-[36] py-[8px] pl-[8px] pr-[12px]">
            <div className="w-[16px] h-[16px]">
              <FaRegShareFromSquare className="h-[16px] w-[16px] mt-[1px]" />
            </div>
            <h3 className="font-[400] text-[14px] leading-[20px]">Share</h3>
          </button>
        </div>
        <button className="flex gap-[4px] cursor-pointer items-center rounded-md w-[150px] h-[36px] py-[8px] px-[24px] bg-[#4B6A4F] text-white">
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

//  <div className="flex items-center gap-2">
//         <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100">
//           Tool bar <FiChevronDown />
//         </button>
//         <button className="px-2 py-1 rounded hover:bg-gray-100">Hide fields</button>
//         <button className="px-2 py-1 rounded hover:bg-gray-100">Sort</button>
//         <button className="px-2 py-1 rounded hover:bg-gray-100">Filter</button>
//         <button className="px-2 py-1 rounded hover:bg-gray-100">Cell view</button>
//       </div>
//       <div className="flex items-center gap-2">
//         <button className="flex items-center gap-1 px-3 py-1 rounded bg-green-600 text-white">
//           New Action <FiChevronRight className="mt-[1px]" />
//         </button>
//       </div>
