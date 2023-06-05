import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";

const AvailableTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://task-manager-server-eta-seven.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, []);

  const handleTaskStart = (task) => {
    fetch("https://task-manager-server-eta-seven.vercel.app/myTasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Available Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-5">
        {tasks?.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            handleTaskStart={handleTaskStart}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableTasks;
