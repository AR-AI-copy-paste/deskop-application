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

  const onDownload = (url, fileName, directory) => {
    appRuntime.send("download", {
      payload: {
        url,
        properties: {
          fileName,
          directory,
        },
      },
    });
  };
  return (
    <Popup
      arrow={false}
      trigger={
        <button
          className={`h-7 w-7 rounded-full pb-2 ${
            colorScheme === "light" ? "text-gray-600" : "text-white"
          }`}
        >
          {" "}
          ...
        </button>
      }
      position="left bottom"
    >
      <div
        className={`flex flex-col ${
          colorScheme === "light"
            ? "bg-gray-100 text-gray-600"
            : colorScheme === "dark"
            ? "bg-gray-700 text-gray-100"
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
          className=" p-1 m-1 cursor-pointer"
        >
          View full size
        </span>
        <span
          onClick={() => {
            onDownload(props.link, "imagewow", "downloads");
          }}
          className=" p-1 m-1 cursor-pointer"
        >
          Download
        </span>
        <span className=" p-1 m-1 cursor-pointer">Fork Image</span>
      </div>
    </Popup>
  );
};

export default PopupModal;
