import React from "react";
import "./styles.css";

const Section = ({ section }) => {
  return (
    <div id={section.id}>
      <h3 className="title">{section.title}</h3>
      <p className="description">{section.description}</p>
    </div>
  );
};

export default Section;
