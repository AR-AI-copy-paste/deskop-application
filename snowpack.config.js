/** @type { import("snowpack").SnowpackUserConfig } */
module.exports = {
  env: {
    REACT_APP_SUPABASE_URL: "https://cnllwvkqmwetcbmpxpjn.supabase.co",
    REACT_APP_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubGx3dmtxbXdldGNibXB4cGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg2NTE3OTYsImV4cCI6MTk2NDIyNzc5Nn0.apzDrOPTbv9blQPCUTY39Lh2Dx9iQ3KtdzqQIIPua9w",
  },
  mount: {
    src: "/_dist",
    public: "/",
  },
  extends: "electron-snowpack/config/snowpack.js",
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-typescript",
  ],
  packageOptions: {
    knownEntrypoints: ["react-dom"],
  },
};
