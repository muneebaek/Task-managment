import React, { useState } from "react";

export const SearchBar = ({ task, setTask, tasks, setTasks }) => {
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter Todo..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" px-4 py-2 w-full border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </>
  );
};
