import React from "react";
import "./styles.css";

const PomodoroTracker = ({ target, actual }) => {
  let circles = [];
  for (let i = 0; i < 5; i++) {
    if (i < actual) {
      circles.push(
        <input key={i} type="checkbox" className="circle" checked />
      );
    } else {
      circles.push(<input key={i} type="checkbox" className="circle" />);
    }
  }
  return (
    <React.Fragment>
      <div className="pomodoro-tracker">
        <div className="box">
          <input type="number" className="square-box" value={target} />
          <br />
          <div className="box-label">Target</div>
        </div>
        <div>{circles}</div>
        <div className="box">
          <input type="number" className="square-box" value={actual}></input>
          <div className="box-label">Actual</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PomodoroTracker;
