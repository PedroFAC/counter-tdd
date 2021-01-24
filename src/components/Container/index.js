import React from "react";
import "./styles.scss";

function Container({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Container;
