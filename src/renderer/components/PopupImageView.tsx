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
        className={`flex flex-col ${
          colorScheme === "light"
            ? "bg-gray-100"
            : colorScheme === "dark"
            ? "card-dark-bg"
            : colorScheme === "ocean"
            ? "bg-blueGreen"
            : ""
        }  rounded-lg shadow-md  p-2 ml-3 font-mono text-xs text-white`}
      >
        <img
          className="w-full rounded-xl p-2"
          src={fullSizeViewLink}
          alt="PictureFullSize"
        />
      </div>
    </Popup>
  );
};

export default PopupImageView;
