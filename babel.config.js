let mode = process.env.NODE_ENV || "development";

/*
  //Alternatively
  let plugins = [];
  if(mode !== "prodution") {
    plugins.push("react-refresh/babel")
  }
  //...
  plugins: plugins
*/

module.exports = {
  presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
  plugins: [mode !== "production" && "react-refresh/babel"].filter(Boolean),
};
