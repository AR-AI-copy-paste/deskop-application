import React from "react";
import Popup from "reactjs-popup";
import { supabase } from "../supabaseClient";
import { useRecoilState } from "recoil";
import {
  colorSchemeState,
  isCreatedState,
  logState,
  profilePicState,
  userFullNameState,
  userNameState,
} from "../atoms";
import imageNone from "/image.svg";
import appRuntime from "../modules/appRuntime";

function ProfilePopUp() {
  const [logged, setLogged] = useRecoilState(logState);
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);
  const [profilePic, setProfilePic] = useRecoilState(profilePicState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [isCreated, setIsCreated] = useRecoilState(isCreatedState);
  const [userFullName, setUserFullName] = useRecoilState(userFullNameState);
  // const [profilePicture, setProfilePicture] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const ref = React.useRef<HTMLInputElement>();
  let filePath;

  const onUpload = async (file: File | null) => {
    await appRuntime.send("will-upload", file.path);
    // React.useEffect(() => {
    appRuntime.subscribe("linkOfFile", async (data) => {
      console.log("file path : ", data);
      await setProfilePic(data);
      filePath = data;
      return filePath;
    });
    // });
    // setProfilePicture(filePath);
  };

  return (
    <Popup open={!isCreated}>
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
            Create your profile
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
              {profilePic ? (
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={profilePic}
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
                onChange={async (event) => {
                  if (event.target.files && event.target.files[0]) {
                    await onUpload(event.target.files[0]);
                    await setProfilePic(filePath);

                    // setProfilePic(URL.createObjectURL(event.target.files[0]));
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
                    setProfilePic(null);
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
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  required
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
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  required
                  type="text"
                  onChange={(event) => {
                    setFullName(event.target.value);
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
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  onUpload(ref.current.files[0]);
                  setUserName(username);
                  setUserFullName(fullName);
                  const user = await supabase.auth.user();
                  await supabase
                    .from("profiles")
                    .update([
                      {
                        fullName: fullName,
                        userName: username,
                        ProfileImage: profilePic,
                      },
                    ])
                    .eq("id", user.id);

                  setIsCreated(true);
                  setLogged(true);
                }}
                className={`px-6 py-2 leading-5 text-white transition-colors duration-200 transform ${
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
    </Popup>
  );
}

export default ProfilePopUp;
