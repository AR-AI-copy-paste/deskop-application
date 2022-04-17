import React from "react";
import PopupModal from "./PopupModal";
import { useRecoilValue } from "recoil";
import { colorSchemeState } from "../atoms";
function Card(props) {
  const colorScheme = useRecoilValue(colorSchemeState);
  return (
    <div>
      <div
        class={`max-w-sm h-full overflow-hidden p-3 my-4 ${
          colorScheme === "light" ||
          colorScheme === "DanahPurple" ||
          colorScheme === "PekiDawn" ||
          colorScheme === "PeacockGreen"
            ? "card-light-bg"
            : colorScheme === "dark" ||
              colorScheme === "MidnightDark" ||
              colorScheme === "BlackYellow"
            ? "card-dark-bg"
            : colorScheme === "ocean"
            ? "bg-blueGreen"
            : ""
        } rounded-lg shadow-md flex flex-col justify-between`}
      >
        <img
          class="object-cover max-h-64 w-full rounded-lg"
          src={props.links}
          alt="Picture"
        />
        <div class="p-3">
          {props.isProfile ? (
            <div
              className={`flex flex-row w-full justify-between p-2 mb-2 text-xs ${
                colorScheme === "light"
                  ? "text-gray-500"
                  : colorScheme === "dark" || colorScheme === "MidnightDark"
                  ? "text-gray-100"
                  : colorScheme === "ocean"
                  ? "text-blue-100"
                  : ""
              } `}
            >
              <span>No. Downloads : 0</span>
              <span>No. Views : 0</span>
            </div>
          ) : (
            <></>
          )}

          <div class="">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row items-center">
                <div class="flex flex-row items-center">
                  <img
                    class="object-cover h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    class={`mx-2 font-semibold ${
                      colorScheme === "light"
                        ? "text-gray-700"
                        : colorScheme === "dark" ||
                          colorScheme === "MidnightDark"
                        ? "text-gray-100"
                        : colorScheme === "ocean"
                        ? "text-blue-100"
                        : ""
                    }`}
                  >
                    John Doe
                  </a>
                </div>
                <span
                  class={`mx-1 text-xs ${
                    colorScheme === "light"
                      ? "text-gray-600"
                      : colorScheme === "dark" || colorScheme === "MidnightDark"
                      ? "text-gray-200"
                      : colorScheme === "ocean"
                      ? "text-blue-200"
                      : ""
                  } `}
                >
                  21 SEP 2015
                </span>
              </div>
              <button
                className={`text-white ${
                  colorScheme === "light"
                    ? "card-light-bg"
                    : colorScheme === "dark" ||
                      colorScheme === "MidnightDark" ||
                      colorScheme === "BlackYellow"
                    ? "card-dark-bg"
                    : colorScheme === "ocean"
                    ? "bg-blueGreen"
                    : ""
                } rounded-full h-7 w-7 pb-2 flex flex-col justify-center items-center`}
              >
                <PopupModal link={props.links} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
