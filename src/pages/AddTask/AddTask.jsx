import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data.completed = false;

    // Make an API request to add the task
    fetch("https://task-manager-server-eta-seven.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task added successfully:", data);
        reset();
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <div className="my-10">
      <Helmet>
        <title>Task Vault | Add Task</title>
      </Helmet>
      <h1 className="text-2xl lg:text-5xl font-bold uppercase text-center my-10">
        Add a new task
      </h1>
      <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block mb-2 font-medium text-gray-700"
          >
            Priority
          </label>
          <input
            type="text"
            id="priority"
            {...register("priority", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.priority && (
            <span className="text-red-500">Priority is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="time"
            className="block mb-2 font-medium text-gray-700"
          >
            Time
          </label>
          <input
            type="number"
            id="time"
            {...register("time", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.time && (
            <span className="text-red-500">Time is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={4}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>

        <input
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        />
      </form>
    </div>
  );
};

export default AddTask;
