import React from "react";
import "./styles.css";

const TaskName = ({ order, name }) => {
  return (
    <div className="taskname-container">
      <div className="priority">{order}</div>
      <input type="text" className="taskname" value={name} />
    </div>
  );
};

export default TaskName;
