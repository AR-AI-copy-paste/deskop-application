import React from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import "./index.css";

//  react 18 way of rendering

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);

root.render(<App />);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
