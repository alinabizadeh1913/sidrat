import { Search } from "../../../../../../public/svg";

const SearchBox = () => {
  return (
    <>
      <div className="text-tertiary search w-[180px] md:w-[150px] lg:w-[180px] h-[40px] flex items-center rounded-[10px] border-primary px-3">
        <input
          type="text"
          className="w-full biotif-regular h-full border-none outline-none bg-transparent placeholder-[#FFE4BF] text-tertiary pe-[12px]"
          placeholder="Search"
        />
        <Search />
      </div>
    </>
  );
};
export default SearchBox;
