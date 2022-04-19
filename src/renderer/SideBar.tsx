import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  pageState,
  logState,
  userNameState,
  emailState,
  colorSchemeState,
} from "./atoms";
import catLogo from "/catlogo.svg";

function SideBar() {
  const [page, setPage] = useRecoilState(pageState);
  const [logged, setLogged] = useRecoilState(logState);
  const userName = useRecoilValue(userNameState);
  const email = useRecoilValue(emailState);
  const colorScheme = useRecoilValue(colorSchemeState);
  return (
    <div
      className={`flex flex-col w-64 py-8 ${
        colorScheme === "light"
          ? "sidebar-light-bg border-r"
          : colorScheme === "dark"
          ? "sidebar-dark-bg border-gray-600"
          : colorScheme === "ocean"
          ? "bg-blueSapphire"
          : colorScheme === "DanahPurple"
          ? "bg-danahPurple"
          : colorScheme === "MidnightDark"
          ? "bg-[#606e82]"
          : colorScheme === "PeacockGreen"
          ? "bg-[#3da174]"
          : colorScheme === "PekiDawn"
          ? "bg-dawnSalmon"
          : colorScheme === "BlackYellow"
          ? "bg-pekiYellow"
          : ""
      }  h-screen border-r-1 border-gray-400 rounded-[35px]`}
    >
      <div className="cursor-default">
        <div className="flex flex-row justify-center items-center">
          <img src={catLogo} alt="logo" className="w-6 mr-2" />
          <h2
            className={`text-3xl font-semibold text-center ${
              colorScheme === "light"
                ? "text-gray-800"
                : colorScheme === "dark" ||
                  colorScheme === "MidnightDark" ||
                  colorScheme === "PeacockGreen" ||
                  colorScheme === "ocean" ||
                  colorScheme === "DanahPurple" ||
                  colorScheme === "PekiDawn"
                ? "text-white"
                : ""
            }  draggableText`}
          >
            CopyCat
          </h2>
        </div>
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="/Khalil-portrait.jpg"
            alt="avatar"
          />
          <h4
            className={`mx-2 mt-2 font-medium ${
              colorScheme === "light"
                ? "text-gray-800"
                : colorScheme === "dark" || colorScheme === "MidnightDark"
                ? "text-gray-200"
                : colorScheme === "ocean" || colorScheme === "DanahPurple"
                ? "text-white"
                : colorScheme === "PeacockGreen"
                ? "text-white "
                : colorScheme === "PekiDawn"
                ? "text-gray-800 "
                : ""
            } hover:underline`}
          >
            <span className="">{userName}</span>
          </h4>
          <p
            className={`mx-2 mt-1 text-sm font-medium ${
              colorScheme === "light"
                ? "text-gray-600"
                : colorScheme === "dark" || colorScheme === "MidnightDark"
                ? "text-gray-400"
                : colorScheme === "ocean" ||
                  colorScheme === "PeacockGreen" ||
                  colorScheme === "DanahPurple"
                ? "text-white"
                : colorScheme === "PekiDawn"
                ? "text-gray-800 "
                : ""
            } hover:underline`}
          >
            <span className="">{email}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col  justify-between flex-1 mt-6">
        <nav className="flex flex-col h-full justify-between">
          <div>
            <a
              className={` cursor-pointer
              ${
                page === "Explore"
                  ? `flex items-center px-4 py-2  ${
                      colorScheme === "light"
                        ? "text-gray-700 bg-gray-400 "
                        : colorScheme === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : colorScheme === "ocean"
                        ? "bg-cgBlue text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahLightBlue text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "bg-[#53c290] text-gray-800"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "bg-dark-bg text-gray-100"
                        : ""
                    }  `
                  : `flex items-center px-4 py-2 ${
                      colorScheme === "light"
                        ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                        : colorScheme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                        : ""
                    } transition-colors duration-200 transform`
              }
              `}
              onClick={() => setPage("Explore")}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Explore</span>
            </a>
            <a
              className={`mt-5 cursor-pointer
              ${
                page === "Profile"
                  ? `flex items-center px-4 py-2  ${
                      colorScheme === "light"
                        ? "text-gray-700 bg-gray-400 "
                        : colorScheme === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : colorScheme === "ocean"
                        ? "bg-cgBlue text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahLightBlue text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "bg-[#53c290] text-gray-800"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "bg-dark-bg text-gray-100"
                        : ""
                    }  `
                  : `flex items-center px-4 py-2 ${
                      colorScheme === "light"
                        ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                        : colorScheme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                        : ""
                    } transition-colors duration-200 transform`
              }
              `}
              onClick={() => setPage("Profile")}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Profile</span>
            </a>
            <a
              className={`mt-5 cursor-pointer
              ${
                page === "Settings"
                  ? `flex items-center px-4 py-2  ${
                      colorScheme === "light"
                        ? "text-gray-700 bg-gray-400 "
                        : colorScheme === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : colorScheme === "ocean"
                        ? "bg-cgBlue text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahLightBlue text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "bg-[#53c290] text-gray-800"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "bg-dark-bg text-gray-100"
                        : ""
                    }  `
                  : `flex items-center px-4 py-2 ${
                      colorScheme === "light"
                        ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                        : colorScheme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                        : ""
                    } transition-colors duration-200 transform`
              }
              `}
              onClick={() => setPage("Settings")}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Settings</span>
            </a>
            <a
              className={`mt-5 cursor-pointer
              ${
                page === "Team"
                  ? `flex items-center px-4 py-2  ${
                      colorScheme === "light"
                        ? "text-gray-700 bg-gray-400 "
                        : colorScheme === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : colorScheme === "ocean"
                        ? "bg-cgBlue text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahLightBlue text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "bg-[#53c290] text-gray-800"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "bg-dark-bg text-gray-100"
                        : ""
                    }  `
                  : `flex items-center px-4 py-2 ${
                      colorScheme === "light"
                        ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                        : colorScheme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                        : ""
                    } transition-colors duration-200 transform`
              }
              `}
              onClick={() => setPage("Team")}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Team</span>
            </a>
            <a
              className={`mt-5 cursor-pointer
              ${
                page === "About"
                  ? `flex items-center px-4 py-2  ${
                      colorScheme === "light"
                        ? "text-gray-700 bg-gray-400 "
                        : colorScheme === "dark"
                        ? "bg-gray-700 text-gray-200"
                        : colorScheme === "ocean"
                        ? "bg-cgBlue text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "bg-danahLightBlue text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "bg-midnightBlue text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "bg-[#53c290] text-gray-800"
                        : colorScheme === "PekiDawn"
                        ? "bg-dawnOrange text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "bg-dark-bg text-gray-100"
                        : ""
                    }  `
                  : `flex items-center px-4 py-2 ${
                      colorScheme === "light"
                        ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                        : colorScheme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                        : colorScheme === "DanahPurple"
                        ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                        : colorScheme === "MidnightDark"
                        ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                        : colorScheme === "PeacockGreen"
                        ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                        : colorScheme === "PekiDawn"
                        ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                        : colorScheme === "BlackYellow"
                        ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                        : ""
                    } transition-colors duration-200 transform`
              }
              `}
              onClick={() => setPage("About")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.88"
                className="ml-1 w-4 h-4 fill-current"
              >
                <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM59.12,36a8,8,0,0,1,.61-3.16,7.82,7.82,0,0,1,1.8-2.63,8.33,8.33,0,0,1,2.62-1.79,8.08,8.08,0,0,1,6.11,0,8.06,8.06,0,0,1,2.58,1.79,7.83,7.83,0,0,1,1.77,2.63A8.38,8.38,0,0,1,75.2,36a8.15,8.15,0,0,1-.59,3.1,8.23,8.23,0,0,1-1.76,2.65,8.15,8.15,0,0,1-2.59,1.82,7.72,7.72,0,0,1-3.05.6,8,8,0,0,1-3.12-.6,7.84,7.84,0,0,1-2.61-1.8,8.07,8.07,0,0,1-1.77-2.64A8.3,8.3,0,0,1,59.12,36Zm3.09,47.8-.17.63-.12.49-.05.34,0,.27a2,2,0,0,0,.09.64v0a1.09,1.09,0,0,0,.23.41.86.86,0,0,0,.35.23,1.55,1.55,0,0,0,.55.09,2.74,2.74,0,0,0,1.46-.63,14.6,14.6,0,0,0,2.15-2.06,36,36,0,0,0,2.57-3.3c.89-1.26,1.82-2.71,2.79-4.33a.37.37,0,0,1,.5-.13l3.28,2.44a.36.36,0,0,1,.09.5,56.84,56.84,0,0,1-4.58,6.87,30.35,30.35,0,0,1-4.73,4.89l0,0a18.55,18.55,0,0,1-4.92,2.92,14.15,14.15,0,0,1-5.19,1,13.63,13.63,0,0,1-4.07-.55,7.92,7.92,0,0,1-3-1.66,7.1,7.1,0,0,1-1.86-2.72,9.92,9.92,0,0,1-.61-3.62c0-.45,0-.92.08-1.42s.14-1,.25-1.58v0c.1-.54.25-1.15.43-1.82s.41-1.43.67-2.26L54.1,61.61l.47-1.67c.12-.47.22-.88.3-1.24a8.43,8.43,0,0,0,.15-.9,5.75,5.75,0,0,0,.06-.77,2.9,2.9,0,0,0-.2-1.09v0a2.49,2.49,0,0,0-.57-.81,2.68,2.68,0,0,0-.94-.55,4.15,4.15,0,0,0-1.28-.19H47.45a.37.37,0,0,1-.37-.36l0-.13,1.22-4.43a.37.37,0,0,1,.36-.27l23.67-.75a.38.38,0,0,1,.38.36l0,.12L62.21,83.78ZM97,25.88a50.31,50.31,0,1,0,14.72,35.56A50.16,50.16,0,0,0,97,25.88Z" />
              </svg>
              <span className="mx-4 font-medium">About</span>
            </a>
          </div>

          <a
            className={`mt-5 cursor-pointer
              ${`flex items-center px-4 py-2 ${
                colorScheme === "light"
                  ? "text-gray-600 hover:bg-gray-400 hover:text-gray-700 "
                  : colorScheme === "dark"
                  ? "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                  : colorScheme === "ocean"
                  ? "text-pewterBlue hover:bg-cgBlue hover:text-gray-200"
                  : colorScheme === "DanahPurple"
                  ? "text-gray-100 hover:bg-danahLightBlue hover:text-danahPurple"
                  : colorScheme === "MidnightDark"
                  ? "text-gray-200 hover:bg-midnightBlue hover:text-gray-200"
                  : colorScheme === "PeacockGreen"
                  ? "text-gray-900 hover:bg-[#53c290] hover:text-gray-900"
                  : colorScheme === "PekiDawn"
                  ? "text-gray-900 hover:bg-dawnOrange hover:text-gray-100"
                  : colorScheme === "BlackYellow"
                  ? "text-gray-900 hover:bg-dark-bg hover:text-gray-100"
                  : ""
              } transition-colors duration-200 transform`}
              `}
            onClick={() => setLogged(false)}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className={`mx-4 font-medium`}>Log out</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
