import React from "react";
import { useRecoilState } from "recoil";
import { colorSchemeState } from "./atoms";
import appRuntime from "./modules/appRuntime";
import closeIcon from "/closeIcon.svg";
import "./app.css";
import { app } from "electron/main";

function SnipTool() {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);

  return (
    <div className="flex flex-col items-center h-screen  border-2 border-blue-500 rounded-3xl">
      <div className="draggableText self-start w-[93%] rounded-tl-3xl h-10" />
      <div className="flex flex-col justify-center items-center h-full">
        <button
          onClick={(e) => {
            appRuntime.send("screenshot", {});
          }}
          className={`w-60 px-4 py-2 tracking-wide ${
            colorScheme === "light" ||
            colorScheme === "dark" ||
            colorScheme === "DanahPurple" ||
            colorScheme === "PekiDawn" ||
            colorScheme === "PeacockGreen" ||
            colorScheme === "MidnightDark" ||
            colorScheme === "BlackYellow"
              ? "bg-gray-700 hover:bg-gray-600"
              : colorScheme === "ocean"
              ? "bg-pewterBlue hover:bg-blueSapphire"
              : ""
          } text-white transition-colors duration-200 transform  rounded-md  focus:outline-none focus:bg-gray-600`}
        >
          Take A Screenshot
        </button>
      </div>
      <div
        onClick={() => {
          appRuntime.send("close-snip", {});
        }}
        className={`absolute top-2 right-4 m-2 cursor-pointer ${
          colorScheme === "light"
            ? "bg-gray-400 hover:bg-gray-600"
            : colorScheme === "dark"
            ? "bg-gray-500 hover:bg-gray-300"
            : colorScheme === "ocean"
            ? "bg-blue-500 hover:bg-blue-600"
            : colorScheme === "PeacockGreen"
            ? "bg-green-500 hover:bg-green-600"
            : colorScheme === "DanahPurple"
            ? "hover:bg-danahPurple bg-danahLightBlue"
            : colorScheme === "PekiDawn"
            ? "bg-dawnSalmon hover:bg-dawnOrange"
            : colorScheme === "MidnightDark"
            ? "bg-midnightBlue hover:bg-midnightGrey"
            : colorScheme === "BlackYellow"
            ? "bg-pekiYellow hover:bg-pekiBlack"
            : ""
        }  rounded-full p-1 transition-colors duration-200 transform`}
      >
        <img src={closeIcon} alt="close" className="h-4 w-4 text-black" />
      </div>
    </div>
  );
}

export default SnipTool;
