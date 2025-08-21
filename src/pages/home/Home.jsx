import React, { useState } from "react";
import "../home/home.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is handle submit");
  };

  const addTask = () => {
    if(task.trim() !== ""){
      setTasks([...tasks, { list: task, id: Date.now(), status: false }]);
    console.log(tasks);
    setTask("");
    }

  if(editId){
    const editListTask = tasks.find((data) => data.id === editId)
    const editUpdate = tasks.map((data) => data.id ===editListTask.id
   ? (data = {id : data.id, list :task})
   : (data = {id : data.id , list :data.list}))

   setTasks(editUpdate);
   setEditId(0);
   setTask("")
  }
  };

  const onComplete = (id) => {
    const complete = tasks.map((data) => {
      if (data.id === id) {
        return { ...data, status: !data.status };
      }
      return data;
    });
    setTasks(complete);
  };

  const onEdit = (id) => {
    const editTask = tasks.find((data) => data.id === id);
    setTask(editTask.list);
    setEditId(editTask.id);
  };

  const onDelete = (id) => {
    setTasks(tasks.filter((data) => data.id !== id));
  };

  return (
    <>
      <div className="home">
        <div className="container">
          <h2 className="todo-title">TODO APP</h2>

          <form className="todo-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={task}
              placeholder="Enter Todos..."
              onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" onClick={addTask}>
              {editId ? "EDIT" : 'ADD'}
            </button>
          </form>

          <div className="list">
            <ul>
              {tasks.map((datas, index) => (
                <li className="list-items">
                  <div
                    className="task-items"
                    key={index}
                    id={datas.status ? "data-items" : ""}
                  >
                    {datas.list}
                  </div>

                  <span className="d-inline-block-svg">
                    <IoCheckmarkCircleOutline
                      className="list-icons"
                      id="complete"
                      title="Complete"
                      onClick={() => onComplete(datas.id)}
                    />
                    <AiOutlineEdit
                      className="list-icons"
                      id="edit"
                      title="Edit"
                      onClick={() => onEdit(datas.id)}
                    />
                    <RiDeleteBin6Line
                      className="list-icons"
                      id="delete"
                      title="Delete"
                      onClick={() => onDelete(datas.id)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
