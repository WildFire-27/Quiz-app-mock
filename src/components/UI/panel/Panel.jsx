import React from "react";

import "./Panel.css";

const Panel = (props) => {
  return <div className="questionpanel">{props.children}</div>;
};

export default Panel;
