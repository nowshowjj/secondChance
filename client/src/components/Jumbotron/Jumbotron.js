import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 75, textAlign: "center", textSize: "200px"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
