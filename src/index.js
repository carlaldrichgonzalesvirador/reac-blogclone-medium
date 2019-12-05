import React from "react";
import ReactDOM from "react-dom";
import Content from "./content"

// with import
// import style from "./assets/css/style.css";

const App = () => {
  return <Content />
};

ReactDOM.render(<App />, document.querySelector("#root"));
