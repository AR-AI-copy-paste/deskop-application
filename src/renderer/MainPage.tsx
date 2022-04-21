import React from "react";
import { useRecoilValue } from "recoil";
import { pageState } from "./atoms";
import Gallery from "./view/Gallery";
import Profile from "./view/Profile";
import Settings from "./view/Settings";
import About from "./view/About";
import PopupImageView from "./components/PopupImageView";
import SearchBar from "./components/SearchBar";
import Team from "./view/Team";

function MainPage() {
  const page = useRecoilValue(pageState);
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex flex-col overflow-y-scroll">
      {page === "Explore" && (
        <div>
          <div className="ml-3">
            <SearchBar placeholder="Search for images" setSearch={setSearch} />
          </div>
          <Gallery />
        </div>
      )}
      {page === "Profile" && (
        <div>
          <div className="ml-3">
            <SearchBar placeholder="Search for images" setSearch={setSearch} />
          </div>
          <Profile />
        </div>
      )}
      {page === "Settings" && <Settings />}
      {page === "About" && <About />}
      {page === "Team" && <Team />}
      <PopupImageView />
    </div>
  );
}

export default MainPage;
