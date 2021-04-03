import React from "react";
import Quote from "../../components/Quote";
import Section from "../../components/Section";
import Task from "../../components/Task";
import "./styles.css";

const quote = {
  content:
    " Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
  author: "Steven King",
};

const sections = [
  {
    id: "mit-tasks",
    title: "MOST IMPORTANT TASK OF THE DAY",
    description: "If this was the only thing you did today you’d be satisfied",
  },
  {
    id: "secondary-tasks",
    title: "SECONDARY TASKS OF IMPORTANCE",
    description: "Completion of these tasks will make the day even better",
  },
  {
    id: "additional-tasks",
    title: "ADDITIONAL TASKS",
    description: "Do these only after you have completed the tasks above.",
  },
];

const tasks = [
  {
    task: { order: 1, name: "Do something" },
    tracking: { target: 1, actual: 3 },
  },
  {
    task: { order: 2, name: "Do something" },
    tracking: { target: 1, actual: 3 },
  },
  {
    task: { order: 3, name: "Do something" },
    tracking: { target: 1, actual: 3 },
  },
  {
    task: { order: 4, name: "Do something" },
    tracking: { target: 1, actual: 3 },
  },
  {
    task: { order: 5, name: "Do something" },
    tracking: { target: 1, actual: 3 },
  },
];

const PlannerPage = () => {
  return (
    <div className="page">
      <Quote quote={quote} />
      <Section section={sections[0]} />
      <Task task={tasks[0].task} tracking={tasks[0].tracking} />
      <Section section={sections[1]} />
      <Task task={tasks[1].task} tracking={tasks[1].tracking} />
      <Task task={tasks[2].task} tracking={tasks[2].tracking} />
      <Section section={sections[2]} />
      <Task task={tasks[3].task} tracking={tasks[3].tracking} />
      <Task task={tasks[4].task} tracking={tasks[4].tracking} />
    </div>
  );
};

export default PlannerPage;
