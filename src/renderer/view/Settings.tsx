import React from "react";
import appRuntime from "../modules/appRuntime";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
import { settingsTypeState, colorSchemeState, resolutionState } from "../atoms";

const resolutions = {
  widths: [1920, 1300, 800],
  heights: [1080, 700, 600],
};
function Settings() {
  const [settingsType, setSettingsType] = useRecoilState(settingsTypeState);
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);
  const [resolution, setResolution] = useRecoilState(resolutionState);
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
            : ""
        }  p-2 m-2`}
      >
        <button
          onClick={() => {
            setSettingsType("App Settings");
          }}
          className={`flex items-center h-10 p-2 -mb-px text-center bg-transparent
          ${
            settingsType === "App Settings"
              ? `  border-b-2 ${
                  colorScheme === "light"
                    ? "text-blue-600 border-blue-500"
                    : colorScheme === "dark"
                    ? "border-blue-400 text-blue-300"
                    : colorScheme === "ocean"
                    ? "border-blue-900 text-darkCornflowerBlue"
                    : ""
                }  sm:px-4 -px-1`
              : `${
                  colorScheme === "light"
                    ? "text-gray-700"
                    : colorScheme === "dark"
                    ? "text-white"
                    : colorScheme === "ocean"
                    ? "text-blueSapphire"
                    : ""
                }  border-b-2 border-transparent sm:px-4 -px-1 hover:border-gray-400`
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
          className={`flex items-center h-10 p-2 -mb-px bg-transparent text-center  
        ${
          settingsType !== "App Settings"
            ? `  border-b-2 ${
                colorScheme === "light"
                  ? "text-blue-600 border-blue-500"
                  : colorScheme === "dark"
                  ? "border-blue-400 text-blue-300"
                  : colorScheme === "ocean"
                  ? "border-blue-900 text-darkCornflowerBlue"
                  : ""
              }  sm:px-4 -px-1`
            : `${
                colorScheme === "light"
                  ? "text-gray-700"
                  : colorScheme === "dark"
                  ? "text-white"
                  : colorScheme === "ocean"
                  ? "text-blueSapphire"
                  : ""
              }  border-b-2 border-transparent sm:px-4 -px-1 hover:border-gray-400`
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
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px black",
            }}
          >
            <div className="flex flex-col rounded-xl bg-slate-500 text-center  text-white p-2 font-mono">
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  // setTimeout(() => {
                  setResolution({ width: 1920, height: 1080 });
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
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  // setTimeout(() => {
                  setResolution({ width: 1300, height: 700 });
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
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
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
                className={`p-2 text-xs   h-8  rounded-xl mx-4 mb-4 w-fit cursor-pointer ${
                  colorScheme === "light"
                    ? "bg-gray-300 border border-gray-400 text-gray-600"
                    : colorScheme === "dark"
                    ? "bg-gray-800 border border-gray-900 text-gray-200"
                    : colorScheme === "ocean"
                    ? "bg-blueGreen border border-darkCornflowerBlue text-spaceCadet"
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
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 5px black",
            }}
          >
            <div className="flex flex-col rounded-xl bg-slate-500 text-center  text-white p-2 font-mono">
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("light");
                }}
              >
                Light
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("dark");
                }}
              >
                Dark
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("ocean");
                }}
              >
                Ocean
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("DanahPurple");
                }}
              >
                DanahPurple
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("MidnightDark");
                }}
              >
                MidnightDark
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("PeacockGreen");
                }}
              >
                PeacockGreen
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
                onClick={() => {
                  setColorScheme("PekiDawn");
                }}
              >
                PekiDawn
              </span>
              <span
                className="text-xl font-semibold border border-blue-300 rounded-xl m-1"
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
            class={`max-w-4xl p-6 mx-auto ${
              colorScheme === "light"
                ? "bg-gray-200"
                : colorScheme === "dark"
                ? "bg-gray-800"
                : colorScheme === "ocean"
                ? "bg-blueGreen"
                : ""
            }  rounded-md shadow-md`}
          >
            <h2
              class={`text-lg font-semibold ${
                colorScheme === "light"
                  ? "text-gray-700"
                  : colorScheme === "dark"
                  ? "text-white"
                  : colorScheme === "ocean"
                  ? "text-spaceCadet"
                  : ""
              } capitalize`}
            >
              Account settings
            </h2>

            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    class={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : ""
                    } `}
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    class={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-airSuperiorityBlue text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    class={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : ""
                    } `}
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    class={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-airSuperiorityBlue text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    class={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : ""
                    } `}
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    class={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-airSuperiorityBlue text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>

                <div>
                  <label
                    class={`${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark"
                        ? "text-gray-200"
                        : colorScheme === "ocean"
                        ? "text-spaceCadet"
                        : ""
                    } `}
                    for="passwordConfirmation"
                  >
                    Password Confirmation
                  </label>
                  <input
                    id="passwordConfirmation"
                    type="password"
                    class={`block w-full px-4 py-2 mt-2 ${
                      colorScheme === "light"
                        ? "bg-gray-100 text-gray-700  border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        : colorScheme === "dark"
                        ? "bg-gray-500 text-gray-300 border-2 border-gray-600 focus:border-blue-300"
                        : colorScheme === "ocean"
                        ? "bg-airSuperiorityBlue text-spaceCadet border-2 border-darkCornflowerBlue focus:border-darkCornflowerBlue"
                        : ""
                    }  rounded-md focus:outline-none `}
                  />
                </div>
              </div>

              <div class="flex justify-end mt-6">
                <button
                  class={`px-6 py-2 leading-5 text-white transition-colors duration-200 transform ${
                    colorScheme === "dark" || colorScheme === "light"
                      ? "bg-gray-700 hover:bg-gray-600"
                      : colorScheme === "ocean"
                      ? "bg-blueSapphire hover:bg-darkCornflowerBlue"
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