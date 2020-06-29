import React from "react";
import "./style.css";

function Title(props) {
  return <div className="header">{props.children}</div>;
}

export default Title;
