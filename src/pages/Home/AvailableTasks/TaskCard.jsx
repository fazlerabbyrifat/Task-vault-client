import React from "react";

const TaskCard = ({ task, handleTaskStart }) => {
  const { title, description, time, priority } = task;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="font-semibold">{description}</p>
        <p>Time required: {time} minutes</p>
        <p>Priority Level: <span className="border border-green-500 px-2 py-1">{priority}</span></p>
        <div className="card-actions justify-end">
          <button onClick={() => handleTaskStart(task)} className="btn btn-outline btn-accent">Start</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
