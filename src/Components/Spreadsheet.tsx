import { PiArrowsSplitBold } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaLink } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { IoBriefcase } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaChevronCircleDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdEmojiEmotions } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";

// Sample spreadsheet data
const data = [
  {
    job: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanpress.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    job: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsonui.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenux.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrownfinance.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

function Spreadsheet() {
  // State to track which cell is selected for highlighting
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  return (
    <div className="w-full h-full overflow-auto">
      <div className=" flex flex-col">
        <div className="max-h-[855px] ">
          <table className="table-fixed w-full border-collapse">
            {/* Define fixed column widths */}
            <colgroup>
              <col className="w-[32px]" />
              <col className="w-[256px]" />
              <col className="w-[124px]" />
              <col className="w-[124px]" />
              <col className="w-[124px]" />
              <col className="w-[124px]" />
              <col className="w-[124px]" />
              <col className="w-[125px]" />
              <col className="w-[125px]" />
              <col className="w-[124px]" />
              <col className="w-[124px]" />
            </colgroup>
            {/* Table headers */}
            <thead className="sticky top-0 bg-white z-10">
              <tr className="bg-[#E2E2E2] text-xs w-[631px] font-medium h-[32px]">
                <th className="w-[32px] bg-white"></th>
                <th colSpan={4} className=" text-left px-2">
                  <div className="flex items-center p-[4px] bg-[#EEEEEE] w-[170px]">
                    <div
                      onClick={() =>
                        console.log("Q3 Financial Overview opened")
                      }
                      className="flex items-center gap-[4px] cursor-pointer"
                    >
                      {" "}
                      <FaLink className="text-blue-400 text-sm" />
                      <span className="text-[#545454]">
                        Q3 Financial Overview
                      </span>
                    </div>
                    <TiArrowSync
                      onClick={() => console.log("data refreshed")}
                      className="text-red-400 text-lg cursor-pointer"
                    />
                  </div>
                </th>
                <th className="w-[124px] bg-white"></th>
                <th colSpan={1} className="text-left bg-[#D2E0D4] px-2">
                  <div className="flex items-center  gap-2 text-gray-700 cursor-pointer">
                    <PiArrowsSplitBold />
                    <span
                      onClick={() => console.log("Triggered ABC action ")}
                      className="text-[#505450]"
                    >
                      ABC
                    </span>
                    <HiDotsHorizontal />
                  </div>
                </th>
                <th colSpan={2} className="text-left bg-[#DCCFFC] px-2">
                  <div
                    onClick={() => console.log("answer a question triggered ")}
                    className="flex items-center gap-2 text-gray-700 cursor-pointer"
                  >
                    <PiArrowsSplitBold className="text-white" />
                    <span className="text-[#505450]">Answer a question</span>
                    <HiDotsHorizontal />
                  </div>
                </th>
                <th className="text-left bg-[#FAC2AF] px-2">
                  <div
                    onClick={() => console.log("Extract Triggered")}
                    className="flex items-center gap-2 text-gray-700 cursor-pointer"
                  >
                    <PiArrowsSplitBold className="text-white" />
                    <span className="text-[#505450]">Extract</span>
                    <HiDotsHorizontal />
                  </div>
                </th>
                <th
                  onClick={() => console.log("add new action")}
                  className="text-gray-500 text-lg font-bold cursor-pointer"
                >
                  +
                </th>
              </tr>
              <tr className="bg-gray-100 h-[32px] w-full text-gray-700 font-medium">
                <th className="w-[32px] text-[#AFAFAF]">#</th>
                <th className="w-[256px] px-2 text-left">
                  <div
                    onClick={() => console.log("Job Request header clicked")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-1 text-[#757575]">
                      <IoBriefcase className="text-[#AFAFAF]" /> Job Request
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th className="w-[124px] px-2 text-left">
                  <div
                    onClick={() => console.log("Submitted header clicked")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-1 text-[#757575]">
                      <SlCalender className="text-[#AFAFAF]" /> Submitted
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th className="w-[124px] px-2 text-left">
                  <div
                    onClick={() => console.log("Status header clicked")}
                    className="flex items-center text-[12px] justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-1 text-[#757575]">
                      <FaChevronCircleDown className="text-[#AFAFAF]" /> Status
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th className="w-[124px] px-2 text-left">
                  <div
                    onClick={() => console.log("Submitter header clicked")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-1 text-[#757575]">
                      <IoPerson className="text-[#AFAFAF]" /> Submitter
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th className="w-[124px] px-2 text-left">
                  <div
                    onClick={() => console.log("URL header clicked")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-1 text-[#757575] ">
                      <TbWorld className="text-[#AFAFAF]" /> URL
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th className="w-[124px] px-2 text-left bg-[#E8F0E9]">
                  <div
                    onClick={() => console.log("Assigned header clicked")}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-1 text-[#757575]">
                      <MdEmojiEmotions className="text-[#AFAFAF]" /> Assigned
                    </div>
                    <HiChevronDown className="text-[#AFAFAF]" />
                  </div>
                </th>
                <th
                  onClick={() => console.log("Priority header clicked")}
                  className="w-[124px] text-[12px] px-2 text-left cursor-pointer bg-[#EAE3FC] text-[#757575]"
                >
                  Priority
                </th>
                <th
                  onClick={() => console.log("Due Date header clicked")}
                  className="w-[124px] text-[12px] px-2 text-left cursor-pointer bg-[#EAE3FC] text-[#757575]"
                >
                  Due Date
                </th>
                <th
                  onClick={() => console.log("Est. Value header clicked")}
                  className="w-[124px] text-[12px] px-2 text-left cursor-pointer bg-[#FFE9E0] text-[#757575]"
                >
                  Est. Value
                </th>
                <th className="w-[124px] bg-white"></th>
              </tr>
            </thead>
            {/* Table body with 25 rows */}
            <tbody>
              {Array.from({ length: 25 }).map((_, i) => (
                <tr key={i} className="h-[32px] ">
                  <td
                    className={`border border-gray-300 text-center font-[400] `}
                  >
                    {i + 1}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 1 })}
                    className={`border border-gray-300 text-[12px] px-2 font-[400]  truncate whitespace-nowrap overflow-hidden text-[#121212] ${
                      selectedCell.row === i && selectedCell.col === 1
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.job || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 2 })}
                    className={`border border-gray-300 px-2 text-[12px] font-[400] text-right text-[#121212] ${
                      selectedCell.row === i && selectedCell.col === 2
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.submitted || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 3 })}
                    className={` border border-gray-300 text-center px-2 ${
                      selectedCell.row === i && selectedCell.col === 3
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    <span
                      className={`data[i]?.status && "inline-flex items-center justify-center  ${
                        data[i]?.status === "In-process"
                          ? "bg-[#FFF3D6] text-[#85640B]"
                          : data[i]?.status === "Need to start"
                          ? "bg-[#E2E8F0] text-[#475569]"
                          : data[i]?.status === "Complete"
                          ? "bg-[#D3F2E3] text-[#0A6E3D]"
                          : data[i]?.status === "Blocked" &&
                            "bg-[#FFE1DE] text-[#C22219]"
                      }   text-[12px]  font-[500]  px-2 py-1 h-[24px] w-[80px] rounded-full`}
                    >
                      {data[i]?.status || ""}
                    </span>
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 4 })}
                    className={`border border-gray-300 px-2 text-[12px] font-[400]  text-[#121212]  ${
                      selectedCell.row === i && selectedCell.col === 4
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.submitter || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 5 })}
                    className={`border border-gray-300 px-2 text-[12px]   text-[#121212]   truncate whitespace-nowrap overflow-hidden ${
                      selectedCell.row === i && selectedCell.col === 5
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.url || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 6 })}
                    className={`border border-gray-300 px-2 font-[400] text-[12px] text-[#121212] ${
                      selectedCell.row === i && selectedCell.col === 6
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    } `}
                  >
                    {data[i]?.assigned || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 7 })}
                    className={`border border-gray-300 px-2 text-[12px] font-[600] text-center ${
                      data[i]?.priority && data[i]?.priority === "Medium"
                        ? "text-[#C29210]"
                        : data[i]?.priority === "Low"
                        ? "text-[#1A8CFF]"
                        : data[i]?.priority === "High" && "text-[#EF4D44]"
                    } ${
                      selectedCell.row === i && selectedCell.col === 7
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    } `}
                  >
                    {data[i]?.priority || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 8 })}
                    className={`border border-gray-300 px-2  text-[12px] font-[400] text-right  text-[#121212]  ${
                      selectedCell.row === i && selectedCell.col === 8
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.due || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 9 })}
                    className={`border border-gray-300 px-2 text-[12px] font-[400] text-right  text-[#121212]  ${
                      selectedCell.row === i && selectedCell.col === 9
                        ? "border-2 border-green-600 shadow-lg"
                        : ""
                    }`}
                  >
                    {data[i]?.value || ""}
                  </td>
                  <td
                    onClick={() => setSelectedCell({ row: i, col: 10 })}
                    className={`border border-gray-300 ${
                      selectedCell.row === i && selectedCell.col === 10
                        ? "border-2 border-green-900 shadow-lg"
                        : ""
                    }`}
                  ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Spreadsheet;
