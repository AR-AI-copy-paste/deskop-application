import React from "react";
import searchIcon from "/search.svg";
import { useRecoilValue } from "recoil";
import { colorSchemeState } from "../atoms";
interface Props {
  placeholder: string;
  setSearch: any;
}

const SearchBar: React.FC<Props> = ({ placeholder, setSearch }) => {
  const colorScheme = useRecoilValue(colorSchemeState);
  return (
    <div className="relative w-full pt-4 pb-2">
      <div className="relative">
        <input
          type="text"
          className={`w-2/6 p-3 pl-10 ${
            colorScheme === "dark" ||
            colorScheme === "BlackYellow" ||
            colorScheme === "MidnightDark"
              ? "text-gray-200 bg-gray-600 border-gray-500"
              : "text-gray-700 bg-gray-100"
          }  text-xs border  rounded-xl focus:outline-none placeholder:text-gray-50
            `}
          placeholder={placeholder}
          onChange={(e) => {
            setSearch(e.target.value);
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
