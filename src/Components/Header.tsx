import { VscLayoutSidebarRight } from "react-icons/vsc";
import { FiChevronRight, FiBell } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-b-gray-300 text-sm font-medium">
      <div className="flex items-center gap-2 text-gray-500">
        <VscLayoutSidebarRight className="text-gray-400" size={20} />
        <span className="hover:underline cursor-pointer">Workspace</span>
        <FiChevronRight />
        <span className="hover:underline cursor-pointer">Folder 2</span>
        <FiChevronRight />
        <span className="text-gray-800 font-semibold">Spreadsheet 3</span>
        <HiDotsHorizontal />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative bg-gray-200 rounded-md">
          <FiSearch className="absolute left-2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8  py-2  rounded text-sm"
          />
        </div>
        <FiBell className="text-gray-500 w-5 h-5 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-400" />
        <div className="text-sm font-medium">John Doe</div>
      </div>
    </header>
  );
}

export default Header;
