import React from "react";
import Popup from "reactjs-popup";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  fullSizeViewState,
  fullSizeViewLinkState,
  colorSchemeState,
} from "../atoms";
const PopupImageView = () => {
  const [fullSizeView, setFullSizeView] = useRecoilState(fullSizeViewState);
  const fullSizeViewLink = useRecoilValue(fullSizeViewLinkState);
  const colorScheme = useRecoilValue(colorSchemeState);
  return (
    <Popup
      arrow={false}
      open={fullSizeView}
      position="center center"
      onClose={() => {
        setFullSizeView(false);
      }}
    >
      <div
        onClick={() => {
          setFullSizeView(false);
        }}
        className={` ${
          fullSizeView
            ? "flex items-center justify-center w-screen h-screen bg-black/50"
            : ""
        }`}
      >
        <div
          className={`flex flex-col items-center ${
            colorScheme === "light"
              ? "bg-gray-100"
              : colorScheme === "dark"
              ? "card-dark-bg"
              : colorScheme === "BlackYellow"
              ? "bg-pekiYellow"
              : colorScheme === "MidnightDark"
              ? "bg-midnightBlue"
              : colorScheme === "ocean"
              ? "bg-blueGreen"
              : colorScheme === "DanahPurple"
              ? "bg-danahLightBlue"
              : colorScheme === "PekiDawn"
              ? "bg-dawnSalmon"
              : colorScheme === "PeacockGreen"
              ? "bg-peacockGreen"
              : ""
          }  rounded-lg shadow-md  p-2 ml-3 font-mono text-xs text-white`}
        >
          <img
            onClick={(e) => {
              // ignore the click
              e.stopPropagation();
            }}
            className="w-full h-full rounded-xl p-2"
            src={fullSizeViewLink}
            alt="PictureFullSize"
          />
        </div>
      </div>
    </Popup>
  );
};

export default PopupImageView;
