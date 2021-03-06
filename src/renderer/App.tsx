import React from "react";
import MainPage from "./MainPage";
import SideBar from "./SideBar";
import Logger from "./view/Logger";
import { supabase } from "./supabaseClient";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  logState,
  colorSchemeState,
  pageState,
  fullSizeViewState,
  isCreatedState,
} from "./atoms";
import "./app.css";
import appRuntime from "./modules/appRuntime";
import closeIcon from "/closeIcon.svg";

const App = () => {
  const [logged, setLogged] = useRecoilState(logState);
  const [isCreated, setIsCreated] = useRecoilState(isCreatedState);
  const colorScheme = useRecoilValue(colorSchemeState);

  const [page, setPage] = useRecoilState(pageState);

  React.useEffect(() => {
    const userObject = supabase.auth.user();
    console.log(userObject);
    // setLogged(userObject);
    appRuntime.subscribe("pageOpen", (data) => {
      setPage(data);
    });
  }, [supabase.auth.user()]);

  return (
    <div
      id="root"
      onClick={() => {
        setIsCreated(true);
        console.log(isCreated);
      }}
      className={` ${
        colorScheme === "light" ||
        colorScheme === "DanahPurple" ||
        colorScheme === "PekiDawn" ||
        colorScheme === "PeacockGreen" ||
        colorScheme === "ocean"
          ? "app-light-bg"
          : colorScheme === "dark" ||
            colorScheme === "MidnightDark" ||
            colorScheme === "BlackYellow"
          ? "app-dark-bg"
          : ""
      }  flex flex-row w-full rounded-[35px] font-baloo`}
    >
      {!logged && <Logger />}
      {logged && (
        <div className="">
          <div className="sidebar">
            <SideBar />
          </div>

          <div className="pt-8 pb-4 ml-11 main min-h-screen">
            <MainPage />
            {/* <span>{msg}</span> */}
          </div>
        </div>
      )}
      <div
        onClick={() => {
          appRuntime.send("close-window", {});
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
};

export default App;
