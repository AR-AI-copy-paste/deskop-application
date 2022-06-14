import React from "react";
import searchIcon from "/search.svg";
import { useRecoilValue, useRecoilState } from "recoil";
import { colorSchemeState, explorerSearchValue } from "../atoms";
interface Props {
  placeholder: string;
  setSearch: any;
}

const SearchBar: React.FC<Props> = ({ placeholder, setSearch }) => {
  const colorScheme = useRecoilValue(colorSchemeState);
  const [search, setSearchState] = useRecoilState(explorerSearchValue);
  return (
    <div className="relative w-full pt-4 pb-2">
      <div className="relative">
        <input
          type="text"
          className={`w-2/6 p-3 pl-10 ${
            colorScheme === "dark" ||
            colorScheme === "BlackYellow" ||
            colorScheme === "MidnightDark"
              ? "text-gray-200 bg-gray-600 border-gray-500 placeholder:text-gray-50"
              : "text-gray-700 bg-gray-100 placeholder:text-gray-800"
          }  text-xs border  rounded-xl focus:outline-none 
            `}
          placeholder={placeholder}
          onChange={(e) => {
            setSearchState(e.target.value);
          }}
        ></input>
        <img
          src={searchIcon}
          className="absolute top-[14px] left-4 h-4 w-4 text-gray-200"
          alt="searchicon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
