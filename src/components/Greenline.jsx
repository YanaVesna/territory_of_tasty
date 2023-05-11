import React from "react";

export default function Greenline(props) {
  return (
    <div className="greenline-title">
      <h2>{props.title}</h2>
      <div className="greenline"></div>
    </div>
  );
}
