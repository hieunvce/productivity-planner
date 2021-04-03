import React from "react";
import TaskName from "../TaskName";
import PomodoroTracker from "../PomodoroTracker";

import "./styles.css";

const Task = ({ task, tracking }) => {
  return (
    <div className="task-container">
      <TaskName order={task.order} name={task.name} />
      <PomodoroTracker target={tracking.target} actual={tracking.actual} />
    </div>
  );
};

export default Task;
