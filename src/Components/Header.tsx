import { VscLayoutSidebarRight } from "react-icons/vsc";
import { FiChevronRight, FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import avatar from '../assets/756f38a6ef8725586111b428053d87fea711b57d.png'

function Header() {
  return (
    <header className="flex items-center h-[56px] justify-between px-[16px] w-full max-w-[1440px] py-[8px] bg-white border-b border-b-[#EEEEEE] text-sm font-medium">
      <div className="flex flex-row   w-[343px] h-[24px] gap-[16px] text-gray-500">
        <div className="flex  w-[24px] h-[24px]">
          <VscLayoutSidebarRight className="text-[#618666] relative top-[4px] left-[2px] w-[20px] h-[16px]" />
        </div>
        <div className="flex items-center flex-row w-[303px] h-[24px] gap-[4px]">
          <div className="flex items-center flex-row w-[76px] h-[20px] gap-[8px]">
            <h3 className=" w-[76px] h-[20px] font-[500] text-[14px] leading-[20px]  text-[#AFAFAF] cursor-pointer">
              Workspace
            </h3>
            <div className="h-[12px] w-[12px]">
              <FiChevronRight className="w-[17px] h-[15px] " />{" "}
            </div>
          </div>
          <div className="flex items-center w-[56px] h-[20px] gap-[8px]">
            <h3 className=" w-[56px] h-[20px] font-[500] text-[14px] leading-[20px]  text-[#AFAFAF] cursor-pointer">
              Folder 2
            </h3>
            <div className="h-[12px] w-[12px]">
              <FiChevronRight className="w-[17px] h-[15px] " />
            </div>
          </div>
          <div className="flex items-center w-[131px] h-[24px] gap-[8px]">
            <h3 className=" w-[99px] h-[20px] font-[500] text-[14px] leading-[20px] text-[#121212]">
              Spreadsheet 3
            </h3>
            <div className="w-[24px] h-[24px] ">
              <HiDotsHorizontal className="w-[17px] mt-[5px] ml-[8px] h-[15px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[8px] w-[325px] h-[40px]">
        <div className="flex w-[165px] h-[40px] bg-[#F6F6F6] rounded-[6px] p-[12px] gap-[8px]">
          <div className="h-[16px] w-[6px]">
            <FiSearch className="  text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search within sheet"
            className="w-[117px] h-[16px] font-[400] text-[12px] leading-[16px] text-[#757575] py-2 ml-3  rounded text-sm"
          />
        </div>
        <div className="relative">
          <FiBell className="text-gray-500 w-5 h-5 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden" >
          <img src={avatar} alt="" />
        </div>
        <div className="text-sm font-medium">John Doe</div>
      </div>
    </header>
  );
}

export default Header;
