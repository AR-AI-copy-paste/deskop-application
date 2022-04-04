import React from "react";
import MainPage from "./MainPage";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div id="root" className="flex flex-row">
      <SideBar />
      <MainPage />
    </div>
  );
};

export default App;
