import React from "react";
import "./styles.css";

const Quote = ({ quote }) => {
  return (
    <React.Fragment>
      <div id="quote" className="section">
        <p className="content">{quote.content}</p>
        <div className="author">{quote.author}</div>
      </div>
    </React.Fragment>
  );
};

export default Quote;
