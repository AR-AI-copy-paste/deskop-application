import React from "react";
import AboutSection from "../components/AboutSection";
import { useRecoilValue } from "recoil";
import { colorSchemeState } from "../atoms";
function Team() {
  const colorScheme = useRecoilValue(colorSchemeState);
  return (
    <div>
      <h1
        className={`mx-8 p-2 text-xl font-baloo ${
          colorScheme === "dark" ||
          colorScheme === "light" ||
          colorScheme === "DanahPurple" ||
          colorScheme === "PeacockGreen" ||
          colorScheme === "PekiDawn"
            ? "text-slate-500"
            : colorScheme === "ocean"
            ? "text-darkCornflowerBlue"
            : colorScheme === "MidnightDark"
            ? "text-midnightBlue"
            : colorScheme === "BlackYellow"
            ? "text-pekiYellow"
            : ""
        } underline-offset-2 underline`}
      >
        Meet The Team
      </h1>
      <AboutSection
        name="Khalil Selyan"
        twitter="https://twitter.com/KhalilSelyan"
        facebook="https://www.facebook.com/Khalilouu.30"
        github="https://www.github.com/KhalilSelyan"
        linkedin="https://www.linkedin.com/in/khalilselyan/"
        image="https://pps.whatsapp.net/v/t61.24694-24/138394497_153339249722634_6129376940038067359_n.jpg?ccb=11-4&oh=01_AVxkNq_p4yeLRRjtYmsSI7l-S5gWVYN1tzUumEBhaM_b4Q&oe=626C4F54"
      />
      <AboutSection
        name="Aimen Sahnoun"
        image="https://pps.whatsapp.net/v/t61.24694-24/61118537_443101443150154_5010036061808623616_n.jpg?ccb=11-4&oh=d7299012e9366f99220726e068903593&oe=626ADCBE"
      />
      <AboutSection
        name="Danah Al Akkad"
        image="https://pps.whatsapp.net/v/t61.24694-24/232162700_1435056720199721_1657016466620043236_n.jpg?ccb=11-4&oh=c2e31b3769035cbe02a1ad2cb0a64242&oe=626ACFC3"
      />
      <AboutSection
        name="Halil Okan Karakas"
        image="https://pps.whatsapp.net/v/t61.24694-24/172041379_118549300516319_782887980033901155_n.jpg?ccb=11-4&oh=5b9905359bd805fe22b61a7e766331a3&oe=626835E1"
      />
    </div>
  );
}

export default Team;
