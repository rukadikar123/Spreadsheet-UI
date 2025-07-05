import { VscLayoutSidebarRight } from "react-icons/vsc";
import { FiChevronRight, FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import avatar from "../assets/756f38a6ef8725586111b428053d87fea711b57d.png";
import { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // Header layout: horizontal flex container
    <header className="flex items-center h-[56px] justify-between px-[16px] w-full  py-[8px] bg-white border-b border-b-[#EEEEEE] text-sm font-medium">
      {/* Left section */}
      <div className="flex flex-row   w-[343px] h-[24px] gap-[16px] text-gray-500">
        {/* Sidebar toggle button */}
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex cursor-pointer w-[24px] h-[24px]"
        >
          <VscLayoutSidebarRight className="text-[#618666] relative top-[4px] left-[2px] w-[20px] h-[16px]" />
        </div>
        <div className="flex items-center flex-row w-[303px] h-[24px] gap-[4px]">
          <h3 className=" w-[76px] h-[20px] font-[500] text-[14px] leading-[20px]  text-[#AFAFAF] cursor-pointer">
            Workspace
          </h3>
          <div className="h-[12px] w-[12px] cursor-pointer">
            <FiChevronRight className="w-[17px] h-[15px] " />{" "}
          </div>

          <h3 className=" w-[56px] h-[20px] font-[500] text-[14px] leading-[20px]  text-[#AFAFAF] cursor-pointer">
            Folder 2
          </h3>
          <div className="h-[12px] w-[12px] cursor-pointer">
            <FiChevronRight className="w-[17px] h-[15px] " />
          </div>

          <div className="flex items-center w-[131px] gap-[8px]">
            <h3 className=" w-[99px] h-[20px] font-[500] text-[14px] leading-[20px] text-[#121212] cursor-pointer ">
              Spreadsheet 3
            </h3>
            <div
              onClick={() => console.log("button clicked")}
              className="w-[24px] h-[24px] cursor-pointer"
            >
              <HiDotsHorizontal className="w-[17px] mt-[5px]  h-[15px] " />
            </div>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="flex items-center gap-[8px] w-[325px] h-[40px]">
        <div className="flex w-[165px] h-[40px] bg-[#F6F6F6] rounded-[6px] p-[12px] gap-[8px]">
          {/* Search input */}
          <div className="h-[16px] w-[6px] cursor-pointer">
            <FiSearch
              onClick={() => console.log("search button clicked")}
              className="  text-gray-400"
            />
          </div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search within sheet"
            className="w-[117px] h-[16px] outline-none font-[400] text-[12px] leading-[16px] text-[#757575] py-2 ml-3  rounded text-sm"
          />
        </div>
        {/* Notification bell with badge */}
        <div className="relative cursor-pointer">
          <FiBell
            onClick={() => console.log("opening navigation popup")}
            className="text-gray-500 w-5 h-5 "
          />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        {/* User avatar */}
        <div
          onClick={() => console.log("navigated to profile page")}
          className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
        >
          <img src={avatar} alt="" />
        </div>
        <div className=" flex flex-col  cursor-pointer">
          <h3 className="font-medium text-sm">John Doe</h3>
          <p className="text-[10px] text-[#757575]">john.doe..</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
