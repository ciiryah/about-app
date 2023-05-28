import React from "react";
import "./style.css";
export const Paragraph = ({ middle, heading, text }) => {
  return (
    <div>
      <h2 className={middle ? "nadpis switch" : "nadpis"}>{heading}</h2>
      <p className={middle ? "paragraph switch" : "paragraph"}>{text}</p>
    </div>
  );
};
