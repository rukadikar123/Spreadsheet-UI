import React, { useState } from "react";

function TitleRow() {
  const [selected, setSelected] = useState("all-orders");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = (e.target as HTMLButtonElement).name;
    setSelected(name);
    console.log(`navigated to ${name} `);
  };
  return (
    <div className="w-full h-[48px] border-t-[1px]  pt-[4px] pr-[16px] pl-[32px]">
      <div className="flex w-[437px] h-[44px]">
        <button
          name="all-orders"
          onClick={handleClick}
          className={`w-[111px]  py-[10px] px-[16px] ${
            selected === "all-orders"
              ? "bg-[#E8F0E9]  text-[#3E5741] border-t-[2px] border-[#4B6A4F]"
              : "text-[#757575]"
          }  font-[600] text-[16px]  `}
        >
          All Orders
        </button>
        <button
          name="pending"
          onClick={handleClick}
          className={`w-[94px]  py-[10px] px-[16px]  font-[500] ${
            selected === "pending"
              ? "bg-[#E8F0E9]  text-[#3E5741] border-t-[2px] border-[#4B6A4F] "
              : "text-[#757575]"
          } text-[16px]`}
        >
          Pending
        </button>
        <button
          name="reviewed"
          onClick={handleClick}
          className={`w-[107px]  py-[10px] px-[16px] ${
            selected === "reviewed"
              ? "bg-[#E8F0E9]  text-[#3E5741] border-t-[2px] border-[#4B6A4F]"
              : "text-[#757575] "
          }  font-[500] text-[16px] `}
        >
          Reviewed
        </button>
        <button
          name="arrived"
          onClick={handleClick}
          className={`w-[89px]  py-[10px] ${
            selected === "arrived"
              ? "bg-[#E8F0E9]  text-[#3E5741]  border-t-[2px] border-[#4B6A4F] "
              : "text-[#757575]"
          } px-[16px]  font-[500] text-[16px] `}
        >
          Arrived
        </button>
        <button
          name="+"
          onClick={handleClick}
          className={`w-[36px]  py-[10px] px-[16px] ${
            selected === "+"
              ? "bg-[#E8F0E9]  text-[#3E5741] border-t-[2px] border-[#4B6A4F] "
              : "text-[#757575]"
          }  font-[500] text-[16px] `}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TitleRow;
