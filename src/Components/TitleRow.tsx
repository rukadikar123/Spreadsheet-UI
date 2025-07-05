import React, { useState } from "react";

// type for all tab options
type TabOption = "all-orders" | "pending" | "reviewed" | "arrived" | "+";
function TitleRow() {
  // State to track which tab is currently selected
  const [selected, setSelected] = useState<TabOption>("all-orders");

  // Handles button click with proper event typing
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as TabOption;
    setSelected(name);
    console.log(`navigated to ${name}`);
  };

  return (
    <div className="w-full h-[48px] border-t-[1px] pt-[4px] pr-[16px] pl-[32px]">
      <div className="flex w-[437px] h-[44px]">
        {[
          { label: "All Orders", value: "all-orders" },
          { label: "Pending", value: "pending" },
          { label: "Reviewed", value: "reviewed" },
          { label: "Arrived", value: "arrived" },
          { label: "+", value: "+" },
        ].map((tab) => (
          <button
            key={tab.value}
            name={tab.value}
            onClick={handleClick}
            className={`py-[10px] px-[16px] ${
              selected === tab.value
                ? "bg-[#E8F0E9] text-[#3E5741] border-t-[2px] border-[#4B6A4F]"
                : "text-[#757575]"
            } font-[500] text-[16px] ${
              tab.value === "all-orders"
                ? "w-[111px]"
                : tab.value === "pending"
                ? "w-[94px]"
                : tab.value === "reviewed"
                ? "w-[107px]"
                : tab.value === "arrived"
                ? "w-[89px]"
                : "w-[36px]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default TitleRow;
