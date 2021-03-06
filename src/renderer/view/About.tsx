import React from "react";
import { useRecoilValue } from "recoil";
import { colorSchemeState } from "../atoms";
import catLogo from "/catlogo.svg";
function About() {
  const colorScheme = useRecoilValue(colorSchemeState);

  return (
    <div className="flex flex-col p-2 text-sm h-full">
      <h1
        className={`mx-8 my-4 text-xl ${
          colorScheme === "light"
            ? "text-gray-500"
            : colorScheme === "dark"
            ? "text-gray-400"
            : colorScheme === "ocean"
            ? "text-blueSapphire"
            : ""
        } font-bold underline underline-offset-2`}
      >
        About the App
      </h1>
      <div
        className={`h-full flex flex-row justify-center items-center border border-gray-600 rounded-3xl max-w-full text-lg ${
          colorScheme === "light"
            ? "bg-gray-100 text-gray-500"
            : colorScheme === "dark"
            ? "bg-gray-600 border-gray-500 text-gray-400"
            : colorScheme === "ocean"
            ? "bg-blueSapphire text-gray-300"
            : colorScheme === "DanahPurple"
            ? "bg-danahLightBlue text-gray-500"
            : colorScheme === "PeacockGreen"
            ? "bg-peacockGreen text-gray-500"
            : colorScheme === "PekiDawn"
            ? "bg-dawnSalmon text-gray-500"
            : colorScheme === "MidnightDark"
            ? "bg-midnightBlue text-gray-500"
            : colorScheme === "BlackYellow"
            ? "bg-pekiYellow text-gray-500"
            : ""
        }  p-12 my-4 mx-8`}
      >
        <span>
          This app is part of a software suite -Mobile and Desktop apps- that
          give the user the ability to scan either images or text. <br /> <br />
          The software will improve the user experience by implementing Machine
          Learning models and an Augmented Reality environment. Any text scanned
          by the user will be handled by the Optical Character Recognition -OCR-
          model and passed onto the AR environment that is connected to the
          desktop app, that receives the data from the mobile app whenever it is
          pointed on.
          <br /> <br /> Images scanned by the user will be processed by a Mask-R
          CNN Deep Learning model, that will highlight the main object in the
          image and discard any remaining aspect of the image leaving a
          transparent background. Images will be sent the same way as text
          through the AR environment.
        </span>
        <div
          className={`h-96 mx-2 py-4 w-1 ${
            colorScheme === "light"
              ? "bg-gray-400"
              : colorScheme === "dark"
              ? "bg-gray-200"
              : colorScheme === "ocean"
              ? "bg-pewterBlue"
              : colorScheme === "DanahPurple"
              ? "bg-danahPurple"
              : colorScheme === "PeacockGreen"
              ? "bg-lighterGreen"
              : colorScheme === "PekiDawn"
              ? "bg-dawnOrange"
              : colorScheme === "MidnightDark"
              ? "bg-midnightGrey"
              : colorScheme === "BlackYellow"
              ? "bg-pekiBlack"
              : ""
          } `}
        />
        <img className="h-56 pl-4" src={catLogo} alt="cat logo" />
      </div>
    </div>
  );
}

export default About;
