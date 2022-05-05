import React from "react";
import appRuntime from "../modules/appRuntime";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
import {
  settingsTypeState,
  colorSchemeState,
  resolutionState,
  profilePicState,
  userNameState,
  emailState,
} from "../atoms";
import imageNone from "/image.svg";
const resolutions = {
  widths: [1920, 1300, 800],
  heights: [920, 820, 600],
};
function Settings() {
  const [settingsType, setSettingsType] = useRecoilState(settingsTypeState);
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);
  const [resolution, setResolution] = useRecoilState(resolutionState);
  const [profilePic, setProfilePic] = useRecoilState(profilePicState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const ref = React.useRef();
  const [profilePicture, setProfilePicture] = React.useState(null);
  const [emailAdress, setEmailAdress] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  return (
    <div className="">
      <div
        className={`flex border-b ${
          colorScheme === "light"
            ? "border-gray-300"
            : colorScheme === "dark"
            ? "border-gray-500"
            : colorScheme === "ocean"
            ? "border-blueGreen"
            : colorScheme === "DanahPurple"
            ? "border-danahPurple"
            : colorScheme === "MidnightDark"
            ? "border-midnightGrey"
            : colorScheme === "BlackYellow"
            ? "border-pekiYellow"
            : colorScheme === "PekiDawn"
            ? "border-dawnSalmon"
            : colorScheme === "PeacockGreen"
            ? "border-lighterGreen"
            : ""
        }  p-2 m-2`}
      >
        <button
          onClick={() => {
            setSettingsType("App Settings");
          }}
          className={`flex items-center h-10 p-2 -mb-px text-center bg-transparent font-semibold
          ${
            settingsType === "App Settings"
              ? `  border-b-2 ${
                  colorScheme === "light"
                    ? "text-blue-600 border-blue-500"
                    : colorScheme === "dark"
                    ? "border-blue-400 text-blue-300"
                    : colorScheme === "ocean"
                    ? "border-blue-900 text-darkCornflowerBlue"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple border-danahLightBlue "
                    : colorScheme === "MidnightDark"
                    ? "text-midnightBlue border-midnightGrey"
                    : colorScheme === "BlackYellow"
                    ? "text-pekiYellow border-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "border-dawnSalmon text-dawnOrange"
                    : colorScheme === "PeacockGreen"
                    ? "border-lighterGreen text-peacockGreen"
                    : ""
                }  sm:px-4 -px-1`
              : `${
                  colorScheme === "light"
                    ? "text-gray-700"
                    : colorScheme === "dark"
                    ? "text-white"
                    : colorScheme === "ocean"
                    ? "text-blueSapphire"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple"
                    : colorScheme === "MidnightDark"
                    ? "text-white"
                    : colorScheme === "BlackYellow"
                    ? "text-pekiYellow"
                    : colorScheme === "PekiDawn"
                    ? "text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "text-peacockGreen"
                    : ""
                }  border-b-2 border-transparent sm:px-4 -px-1 hover:border-gray-400 font-medium`
          }
         whitespace-nowrap focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>

          <span className="mx-1 text-sm sm:text-base">App Settings</span>
        </button>

        <button
          onClick={() => {
            setSettingsType("Account Settings");
          }}
          className={`flex items-center h-10 p-2 -mb-px text-center bg-transparent font-semibold
          ${
            settingsType !== "App Settings"
              ? `  border-b-2 ${
                  colorScheme === "light"
                    ? "text-blue-600 border-blue-500"
                    : colorScheme === "dark"
                    ? "border-blue-400 text-blue-300"
                    : colorScheme === "ocean"
                    ? "border-blue-900 text-darkCornflowerBlue"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple border-danahLightBlue "
                    : colorScheme === "MidnightDark"
                    ? "text-midnightBlue border-midnightGrey"
                    : colorScheme === "BlackYellow"
                    ? "text-pekiYellow border-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "border-dawnSalmon text-dawnOrange"
                    : colorScheme === "PeacockGreen"
                    ? "border-lighterGreen text-peacockGreen"
                    : ""
                }  sm:px-4 -px-1`
              : `${
                  colorScheme === "light"
                    ? "text-gray-700"
                    : colorScheme === "dark"
                    ? "text-white"
                    : colorScheme === "ocean"
                    ? "text-blueSapphire"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple"
                    : colorScheme === "MidnightDark"
                    ? "text-white"
                    : colorScheme === "BlackYellow"
                    ? "text-pekiYellow"
                    : colorScheme === "PekiDawn"
                    ? "text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "text-peacockGreen"
                    : ""
                }  border-b-2 border-transparent sm:px-4 -px-1 hover:border-gray-400 font-medium`
          }
         whitespace-nowrap focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span className="mx-1 text-sm sm:text-base">Account Settings</span>
        </button>
      </div>
      {settingsType === "App Settings" && (
        <div className="flex flex-col items-center justify-center w-full">
          <Popup
            trigger={
              <div
                className={`p-2 text-xs   h-8  rounded-xl m-4 w-fit cursor-pointer ${
                  colorScheme === "light"
                    ? "bg-gray-300 border border-gray-400 text-gray-600"
                    : colorScheme === "dark"
                    ? "bg-gray-800 border border-gray-900 text-gray-200"
                    : colorScheme === "ocean"
                    ? "bg-blueGreen border border-darkCornflowerBlue text-spaceCadet"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple border border-danahPurple bg-danahLightBlue"
                    : colorScheme === "MidnightDark"
                    ? "bg-midnightBlue border border-midnightGrey text-white"
                    : colorScheme === "BlackYellow"
                    ? "bg-pekiYellow border border-pekiYellow text-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "bg-dawnSalmon border border-dawnSalmon text-dawnOrange"
                    : colorScheme === "PeacockGreen"
                    ? "bg-peacockGreen border border-lighterGreen text-gray-800"
                    : ""
                }`}
              >
                Change the window size
              </div>
            }
            position="right top"
            arrow={false}
            contentStyle={{
              marginTop: "5px",
              marginLeft: "5px",
              width: "200px",
              borderRadius: "12px",
              boxShadow: "0px 0px 5px gray",
            }}
          >
            <div
              className={`flex flex-col rounded-xl ${
                colorScheme === "light"
                  ? "bg-gray-300 border border-gray-400 text-gray-600"
                  : colorScheme === "dark"
                  ? "bg-gray-800 border border-gray-900 text-gray-200"
                  : colorScheme === "ocean"
                  ? "bg-blueGreen border border-darkCornflowerBlue text-spaceCadet"
                  : colorScheme === "DanahPurple"
                  ? "text-danahPurple border border-danahPurple bg-danahLightBlue"
                  : colorScheme === "MidnightDark"
                  ? "bg-midnightGrey border border-midnightGrey text-midnightBlue"
                  : colorScheme === "BlackYellow"
                  ? "bg-pekiYellow border border-pekiYellow text-pekiBlack"
                  : colorScheme === "PekiDawn"
                  ? "bg-dawnSalmon border border-dawnSalmon text-dawnOrange"
                  : colorScheme === "PeacockGreen"
                  ? "bg-peacockGreen border border-lighterGreen text-grey-800"
                  : ""
              }  text-center p-2 font-mono`}
            >
              <span
                className="text-xl font-semibold border-b border-blue-300 cursor-pointer m-1"
                onClick={() => {
                  // setTimeout(() => {
                  setResolution({ width: 1920, height: 920 });
                  // }, 500);
                  appRuntime.send("window-resize", {
                    width: resolution.width,
                    height: resolution.height,
                  });
                }}
              >
                {resolutions.widths[0]}x{resolutions.heights[0]}
              </span>
              <span
                className="text-xl font-semibold border-b border-blue-300 cursor-pointer m-1"
                onClick={() => {
                  // setTimeout(() => {
                  setResolution({ width: 1300, height: 820 });
                  // }, 500);
                  appRuntime.send("window-resize", {
                    width: resolution.width,
                    height: resolution.height,
                  });
                }}
              >
                {resolutions.widths[1]}x{resolutions.heights[1]}
              </span>
              <span
                className="text-xl font-semibold  m-1 cursor-pointer"
                onClick={() => {
                  // setTimeout(() => {
                  setResolution({ width: 800, height: 600 });
                  // }, 500);
                  appRuntime.send("window-resize", {
                    width: resolution.width,
                    height: resolution.height,
                  });
                }}
              >
                {resolutions.widths[2]}x{resolutions.heights[2]}
              </span>
            </div>
          </Popup>

          <Popup
            trigger={
              <div
                className={`p-2 text-xs   h-8  rounded-xl m-4 w-fit cursor-pointer ${
                  colorScheme === "light"
                    ? "bg-gray-300 border border-gray-400 text-gray-600"
                    : colorScheme === "dark"
                    ? "bg-gray-800 border border-gray-900 text-gray-200"
                    : colorScheme === "ocean"
                    ? "bg-blueGreen border border-darkCornflowerBlue text-spaceCadet"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple border border-danahPurple bg-danahLightBlue"
                    : colorScheme === "MidnightDark"
                    ? "bg-midnightBlue border border-midnightGrey text-white"
                    : colorScheme === "BlackYellow"
                    ? "bg-pekiYellow border border-pekiYellow text-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "bg-dawnSalmon border border-dawnSalmon text-dawnOrange"
                    : colorScheme === "PeacockGreen"
                    ? "bg-peacockGreen border border-lighterGreen text-grey-800"
                    : ""
                }`}
              >
                Choose Color Scheme
              </div>
            }
            position="right top"
            arrow={false}
            contentStyle={{
              marginTop: "5px",
              marginLeft: "5px",
              width: "200px",
              borderRadius: "12px",
              boxShadow: "0px 0px 5px gray",
            }}
          >
            <div
              className={`flex flex-col rounded-xl
                ${
                  colorScheme === "light"
                    ? "bg-gray-300 border border-gray-400 text-gray-600"
                    : colorScheme === "dark"
                    ? "bg-gray-800 border border-gray-900 text-gray-200"
                    : colorScheme === "ocean"
                    ? "bg-blueGreen border border-darkCornflowerBlue text-spaceCadet"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple border border-danahPurple bg-danahLightBlue"
                    : colorScheme === "MidnightDark"
                    ? "bg-midnightGrey border border-midnightGrey text-midnightBlue"
                    : colorScheme === "BlackYellow"
                    ? "bg-pekiYellow border border-pekiYellow text-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "bg-dawnSalmon border border-dawnSalmon text-dawnOrange"
                    : colorScheme === "PeacockGreen"
                    ? "text-grey-800 border border-lighterGreen bg-peacockGreen"
                    : ""
                }  text-center p-2 font-mono overflow-hidden`}
            >
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("light");
                }}
              >
                Light
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("dark");
                }}
              >
                Dark
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("ocean");
                }}
              >
                Ocean
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("DanahPurple");
                }}
              >
                DanahPurple
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("MidnightDark");
                }}
              >
                MidnightDark
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("PeacockGreen");
                }}
              >
                PeacockGreen
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("PekiDawn");
                }}
              >
                PekiDawn
              </span>
              <span
                className={`text-xl font-semibold m-1 cursor-pointer hover:scale-105 transform duration-150 rounded-full
                ${
                  colorScheme === "light"
                    ? "hover:bg-gray-400"
                    : colorScheme === "PekiDawn"
                    ? "hover:bg-dawnOrange hover:text-dawnSalmon"
                    : colorScheme === "PeacockGreen"
                    ? "hover:bg-lighterGreen "
                    : colorScheme === "BlackYellow"
                    ? "hover:bg-pekiBlack hover:text-pekiYellow"
                    : colorScheme === "MidnightDark"
                    ? "hover:bg-midnightBlue hover:text-midnightGrey"
                    : colorScheme === "DanahPurple"
                    ? "hover:bg-danahPurple hover:text-gray-200"
                    : colorScheme === "ocean"
                    ? "hover:bg-pewterBlue"
                    : colorScheme === "dark"
                    ? "hover:bg-gray-600"
                    : ""
                }
                `}
                onClick={() => {
                  setColorScheme("BlackYellow");
                }}
              >
                BlackYellow
              </span>
            </div>
          </Popup>
        </div>
      )}
      {settingsType === "Account Settings" && (
        <div className="flex items-center justify-center w-full">
          <section
            className={`max-w-4xl p-6 mx-auto ${
              colorScheme === "light"
                ? "bg-gray-200"
                : colorScheme === "dark"
                ? "bg-gray-800"
                : colorScheme === "ocean"
                ? "bg-blueGreen"
                : colorScheme === "DanahPurple"
                ? "bg-danahLightBlue"
                : colorScheme === "MidnightDark"
                ? "bg-midnightGrey"
                : colorScheme === "BlackYellow"
                ? "bg-pekiYellow"
                : colorScheme === "PekiDawn"
                ? "bg-dawnSalmon"
                : colorScheme === "PeacockGreen"
                ? "bg-lighterGreen"
                : ""
            }  rounded-md shadow-md`}
          >
            <h2
              className={`text-lg font-semibold ${
                colorScheme === "light"
                  ? "text-gray-700"
                  : colorScheme === "dark"
                  ? "text-white"
                  : colorScheme === "ocean"
                  ? "text-spaceCadet"
                  : colorScheme === "DanahPurple"
                  ? "text-danahPurple"
                  : colorScheme === "MidnightDark"
                  ? "text-midnightBlue"
                  : colorScheme === "BlackYellow"
                  ? "text-pekiBlack"
                  : colorScheme === "PekiDawn"
                  ? "text-gray-900"
                  : colorScheme === "PeacockGreen"
                  ? "text-grey-800"
                  : ""
              } capitalize`}
            >
              Account settings
            </h2>

            <div className="flex flex-col m-2">
              <h3
                className={`text-md font-medium ${
                  colorScheme === "light"
                    ? "text-gray-700"
                    : colorScheme === "dark"
                    ? "text-white"
                    : colorScheme === "ocean"
                    ? "text-spaceCadet"
                    : colorScheme === "DanahPurple"
                    ? "text-danahPurple"
                    : colorScheme === "MidnightDark"
                    ? "text-midnightBlue"
                    : colorScheme === "BlackYellow"
                    ? "text-pekiBlack"
                    : colorScheme === "PekiDawn"
                    ? "text-gray-900"
                    : colorScheme === "PeacockGreen"
                    ? "text-grey-800"
                    : ""
                } capitalize my-2`}
              >
                Change Profile Picture
              </h3>
              <div className="flex flex-row items-center justify-evenly ">
                {profilePicture ? (
                  <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={profilePicture}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className="w-24 h-24 mx-2 rounded-full object-scale-down border border-gray-300"
                    src={imageNone}
                    alt="avatar"
                  />
                )}
                <input
                  type="file"
                  ref={ref}
                  className="hidden"
                  onChange={(event) => {
                    if (event.target.files && event.target.files[0]) {
                      setProfilePicture(
                        URL.createObjectURL(event.target.files[0])
                      );
                    }
                  }}
                />
                <div className="flex flex-col">
                  <button
                    className={`px-3 py-1 m-1 leading-5 text-white transition-colors duration-200 transform ${
                      colorScheme === "dark" || colorScheme === "light"
                        ? "bg-gray-700 hover:bg-gray-600"
                        : colorScheme === "ocean"
                        ? " bg-darkCornflowerBlue hover:bg-blueGreen text-white hover:text-darkCornflowerBlue border border-darkCornflowerBlue shadow-lg shadow-darkCornflowerBlue"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahPurple hover:bg-danahLightBlue hover:text-danahPurple border border-danahPurple shadow-lg shadow-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue hover:bg-midnightGrey hover:text-midnightBlue border border-midnightBlue shadow-lg shadow-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack hover:bg-pekiYellow hover:text-pekiBlack border border-pekiBlack shadow-lg shadow-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange hover:bg-dawnSalmon hover:text-gray-900 border border-dawnOrange shadow-lg shadow-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen hover:bg-lighterGreen hover:text-gray-900 border border-lighterGreen shadow-lg shadow-lighterGreen"
                        : ""
                    }  rounded-xl  focus:outline-none focus:bg-gray-600`}
                    onClick={() => {
                      ref.current.click();
                    }}
                  >
                    Change Profile Picture
                  </button>
                  <button
                    className={`px-3 py-1 m-1 leading-5 text-white transition-colors duration-200 transform ${
                      colorScheme === "dark" || colorScheme === "light"
                        ? "bg-gray-700 hover:bg-gray-600"
                        : colorScheme === "ocean"
                        ? " bg-darkCornflowerBlue hover:bg-blueGreen text-white hover:text-darkCornflowerBlue border border-darkCornflowerBlue shadow-lg shadow-darkCornflowerBlue"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahPurple hover:bg-danahLightBlue hover:text-danahPurple border border-danahPurple shadow-lg shadow-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue hover:bg-midnightGrey hover:text-midnightBlue border border-midnightBlue shadow-lg shadow-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack hover:bg-pekiYellow hover:text-pekiBlack border border-pekiBlack shadow-lg shadow-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange hover:bg-dawnSalmon hover:text-gray-900 border border-dawnOrange shadow-lg shadow-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen hover:bg-lighterGreen hover:text-gray-900 border border-lighterGreen shadow-lg shadow-lighterGreen"
                        : ""
                    }  rounded-xl  focus:outline-none focus:bg-gray-600`}
                    onClick={() => {
                      setProfilePicture(null);
                      ref.current.value = "";
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <h3
              className={`text-md font-medium ${
                colorScheme === "light"
                  ? "text-gray-700"
                  : colorScheme === "dark"
                  ? "text-white"
                  : colorScheme === "ocean"
                  ? "text-spaceCadet"
                  : colorScheme === "DanahPurple"
                  ? "text-danahPurple"
                  : colorScheme === "MidnightDark"
                  ? "text-midnightBlue"
                  : colorScheme === "BlackYellow"
                  ? "text-pekiBlack"
                  : colorScheme === "PekiDawn"
                  ? "text-gray-900"
                  : colorScheme === "PeacockGreen"
                  ? "text-grey-800"
                  : ""
              } capitalize`}
            >
              Change Profile Information
            </h3>

            <form>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : colorScheme === "DanahPurple"
                        ? "text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "text-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900"
                        : colorScheme === "PeacockGreen"
                        ? "text-grey-800"
                        : ""
                    } `}
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                    className={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light" || colorScheme === "DanahPurple"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-blue-200 text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-midnightGrey border-2 border-midnightBlue focus:border-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack text-pekiYellow border-2 border-pekiBlack focus:border-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-white border-2 border-dawnOrange focus:border-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen text-grey-800 border-2 border-lighterGreen focus:border-lighterGreen"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    className={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : colorScheme === "DanahPurple"
                        ? "text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "text-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900"
                        : colorScheme === "PeacockGreen"
                        ? "text-grey-800"
                        : ""
                    } `}
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    onChange={(event) => {
                      setEmailAdress(event.target.value);
                    }}
                    className={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light" || colorScheme === "DanahPurple"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-blue-200 text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-midnightGrey border-2 border-midnightBlue focus:border-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack text-pekiYellow border-2 border-pekiBlack focus:border-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-white border-2 border-dawnOrange focus:border-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen text-grey-800 border-2 border-lighterGreen focus:border-lighterGreen"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    className={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : colorScheme === "DanahPurple"
                        ? "text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "text-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900"
                        : colorScheme === "PeacockGreen"
                        ? "text-grey-800"
                        : ""
                    } `}
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light" || colorScheme === "DanahPurple"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-blue-200 text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-midnightGrey border-2 border-midnightBlue focus:border-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack text-pekiYellow border-2 border-pekiBlack focus:border-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-white border-2 border-dawnOrange focus:border-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen text-grey-800 border-2 border-lighterGreen focus:border-lighterGreen"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    className={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : colorScheme === "DanahPurple"
                        ? "text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "text-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900"
                        : colorScheme === "PeacockGreen"
                        ? "text-grey-800"
                        : ""
                    } `}
                    for="passwordConfirmation"
                  >
                    Password Confirmation
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="password"
                    className={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light" || colorScheme === "DanahPurple"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-blue-200 text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-midnightGrey border-2 border-midnightBlue focus:border-midnightBlue"
                        : colorScheme === "BlackYellow"
                        ? "bg-pekiBlack text-pekiYellow border-2 border-pekiBlack focus:border-pekiBlack"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-white border-2 border-dawnOrange focus:border-dawnOrange"
                        : colorScheme === "PeacockGreen"
                        ? "bg-peacockGreen text-grey-800 border-2 border-lighterGreen focus:border-lighterGreen"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>
              </div>

              <div class="flex justify-end mt-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setProfilePic(profilePicture);
                    setEmail(emailAdress);
                    setUserName(username);
                  }}
                  class={`px-6 py-2 leading-5 text-white transition-colors duration-200 transform ${
                    colorScheme === "dark" || colorScheme === "light"
                      ? "bg-gray-700 hover:bg-gray-600"
                      : colorScheme === "ocean"
                      ? " bg-darkCornflowerBlue hover:bg-blueGreen text-white hover:text-darkCornflowerBlue border border-darkCornflowerBlue shadow-lg shadow-darkCornflowerBlue"
                      : colorScheme === "DanahPurple"
                      ? "bg-danahPurple hover:bg-danahLightBlue hover:text-danahPurple border border-danahPurple shadow-lg shadow-danahPurple"
                      : colorScheme === "MidnightDark"
                      ? "bg-midnightBlue hover:bg-midnightGrey hover:text-midnightBlue border border-midnightBlue shadow-lg shadow-midnightBlue"
                      : colorScheme === "BlackYellow"
                      ? "bg-pekiBlack hover:bg-pekiYellow hover:text-pekiBlack border border-pekiBlack shadow-lg shadow-pekiBlack"
                      : colorScheme === "PekiDawn"
                      ? "bg-dawnOrange hover:bg-dawnSalmon hover:text-gray-900 border border-dawnOrange shadow-lg shadow-dawnOrange"
                      : colorScheme === "PeacockGreen"
                      ? "bg-peacockGreen hover:bg-lighterGreen hover:text-gray-900 border border-lighterGreen shadow-lg shadow-lighterGreen"
                      : ""
                  }  rounded-md  focus:outline-none focus:bg-gray-600`}
                >
                  Save
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default Settings;
