"use client";

import { useStore } from "@/store";
import { Search } from "../../../../../../public/svg";

const SearchBox = () => {
  const { language } = useStore();
  return (
    <>
      <div
        className={`${
          language == "en" ? "direction-ltr" : "direction-rtl"
        } text-tertiary search md:w-[150px] lg:w-[180px] md:h-[40px] flex items-center md:rounded-[10px] md:border md:border-[#fff3e240] md:px-3 relative z-[30]`}
      >
        <input
          type="text"
          className={`hidden md:block w-full ${
            language == "en" ? "biotif-regular" : "yekan-regular"
          } h-full border-none outline-none bg-transparent placeholder-[#FFE4BF] text-tertiary pe-[12px] text-[14px]`}
          placeholder={`${
            language == "ar" ? "بحث" : language == "fa" ? "جستجو" : "Search"
          }`}
        />
        <Search direction={language == "en" ? "ltr" : "rtl"} />
      </div>
    </>
  );
};
export default SearchBox;
