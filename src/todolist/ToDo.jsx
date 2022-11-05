import ToDoAddTask from "./ToDoAddTask";
import ToDoList from "./ToDoList";
import { useState } from "react";

export default function ToDo() {
  const [taskList, setTaskList] = useState([]);
  
  return (
    <section className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-6 font-bold">
        To Do List Application
      </h2>
      <ToDoAddTask
        onHandleAddTask={setTaskList}
      ></ToDoAddTask>
      <ToDoList taskList={taskList}></ToDoList>
    </section>
  );
}
