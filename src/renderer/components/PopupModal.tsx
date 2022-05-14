import React from "react";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
import {
  colorSchemeState,
  fullSizeViewState,
  fullSizeViewLinkState,
} from "../atoms";

import appRuntime from "../modules/appRuntime";

const PopupModal = (props) => {
  const [fullSizeView, setFullSizeView] = useRecoilState(fullSizeViewState);
  const [fullSizeViewLink, setFullSizeViewLink] = useRecoilState(
    fullSizeViewLinkState
  );
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState);

  const onDownload = (
    url: string,
    urlShort: string,
    fileName: string,
    directory: string
  ) => {
    appRuntime.send("will-download", { url, fileName, directory });
    appRuntime.subscribe("download-accepted", (progress) => {
      appRuntime.send("download", {
        url,
        urlShort,
        fileName,
        directory,
        progress,
      });
    });
  };

  return (
    <Popup
      arrow={false}
      trigger={
        <div
          className={`h-7 w-7 rounded-full pb-2 ${
            colorScheme === "light" ||
            colorScheme === "DanahPurple" ||
            colorScheme === "PeacockGreen" ||
            colorScheme === "PekiDawn"
              ? "text-gray-600"
              : "text-white"
          }`}
        >
          {" "}
          ...
        </div>
      }
      position="left bottom"
    >
      <div
        className={`flex flex-col ${
          colorScheme === "light" ||
          colorScheme === "DanahPurple" ||
          colorScheme === "PeacockGreen" ||
          colorScheme === "PekiDawn"
            ? "bg-gray-100 text-gray-600"
            : colorScheme === "dark" ||
              colorScheme === "MidnightDark" ||
              colorScheme === "BlackYellow"
            ? "bg-gray-700 text-gray-100 "
            : colorScheme === "ocean"
            ? "bg-blueGreen text-white"
            : ""
        } rounded-lg shadow-md  px-4 py-2 mr-3 font-mono text-xs  `}
      >
        <span
          onClick={() => {
            setFullSizeView(true);
            setFullSizeViewLink(props.link);
          }}
          className=" p-2 m-1 cursor-pointer hover:bg-gray-200 hover:text-gray-900 w-full rounded-3xl"
        >
          View in full size
        </span>
        <span
          onClick={() => {
            onDownload(
              props.link,
              props.link.split("/").pop(),
              "downloadedImage",
              "downloads/Copycat"
            );
          }}
          className=" p-2 m-1 cursor-pointer hover:bg-gray-200 hover:text-gray-900 w-full rounded-3xl"
        >
          Download Image
        </span>
        <span className=" p-2 m-1 cursor-pointer hover:bg-gray-200 hover:text-gray-900 w-full rounded-3xl">
          Fork Image
        </span>
      </div>
    </Popup>
  );
};

export default PopupModal;
