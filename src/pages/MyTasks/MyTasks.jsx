import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegCheckCircle, FaRegClock, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyTasks = () => {
  const [myTasks, setMyTasks] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("https://task-manager-server-eta-seven.vercel.app/myTasks")
      .then((res) => res.json())
      .then((data) => {
        setMyTasks(data);
        console.log(data);
      });
  }, [isDeleted]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-manager-server-eta-seven.vercel.app/myTasks/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setIsDeleted(!isDeleted);
            }
          });
      }
    });
  };

  const handleStatus = (item) => {
    fetch(
      `https://task-manager-server-eta-seven.vercel.app/myTasks/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedTasks = myTasks.map((task) => {
            if (task._id === item._id) {
              return { ...task, completed: !item.completed };
            }
            return task;
          });
          setMyTasks(updatedTasks);
        }
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>Task Vault | My Tasks</title>
      </Helmet>
      <h1 className="text-2xl lg:text-5xl font-bold uppercase text-center my-10">
        My Tasks List
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Details</th>
              <th>Time</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myTasks?.map((myTask, index) => (
              <tr key={myTask._id} className="bg-base-200">
                <td>{index + 1} </td>
                <td>{myTask.title}</td>
                <td>{myTask.description}</td>
                <td>{myTask.time} minutes</td>
                <td>{myTask.priority}</td>
                <td>
                  <button
                    onClick={() => handleStatus(myTask)}
                    className={`btn ${
                      myTask.completed ? "btn-success" : "btn-warning"
                    } btn-sm`}
                  >
                    {myTask.completed ? (
                      <FaRegCheckCircle></FaRegCheckCircle>
                    ) : (
                      <FaRegClock></FaRegClock>
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myTask._id)}
                    className="btn btn-error btn-sm"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTasks;
