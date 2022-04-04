import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
