import React from "react";

export const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl p-4 w-full max-w-md mx-auto mt-6">
        <h1 className="text-xl font-semibold mb-4 text-center">MY TASKS</h1>
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet!</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="relative bg-gray-100 rounded-xl px-4 py-2 shadow-sm flex items-center"
              >
                {/* ✅ Checkbox Left */}
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggle(index)}
                  className="w-5 h-5 absolute left-4"
                />

                {/* ✅ Task Text Center */}
                <span
                  className={`mx-auto text-center ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 ms-5 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
