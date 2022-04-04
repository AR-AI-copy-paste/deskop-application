/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/_dist",
    public: "/",
  },
  extends: "electron-snowpack/config/snowpack.js",
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-postcss"],
};
