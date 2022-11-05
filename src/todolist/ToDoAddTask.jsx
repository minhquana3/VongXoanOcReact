import React, { useState } from "react";

export default function ToDoAddTask({ onHandleAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleTaskList = (taskText) => {
    onHandleAddTask((prev) => [...prev, taskText]);
  };
  return (
    <div className="flex items-center gap-3 mb-4">
      <input
        type="text"
        className="form-input px-4 py-3 rounded-lg border-gray-400"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="button"
        className="px-6 py-4 bg-blue-600 text-blue-50 rounded-md hover:bg-blue-800"
        onClick={() => {
          handleTaskList(taskText);
          setTaskText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
