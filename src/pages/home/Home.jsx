import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/searchbar/TodoInput";
import { useState } from "react";
import { TodoList } from "../../components/list/TodoList";
import "../home/home.css";

export const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <>
      <header className="w-full bg-purple-700">
        <div className="container grid grid-cols-1 md:grid-cols-2 px-30 py-3 items-center">
          <div className="logo text-5xl font-bold text-stone-200">TODO APP</div>

          <div className="nav ms-60">
            <nav className=" text-stone-200 font-semibold text-2xl hover:text-stone-400 ">
              <Link to="/signup">Sign Up</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="pt-10 grid grid-cols-1 items-center">
        <div className=" w-[600px] mx-auto px-4">
          <SearchBar
            task={task}
            setTask={setTask}
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
          />
        </div>

        <div>
          <TodoList tasks={tasks}  onDelete={deleteTask} onToggle={toggleTask} />
        </div>
      </div>
    </>
  );
};
