import Task from "./Task";

export default function ToDoList({ taskList }) {
  return (
    <div className="border border-gray-400 rounded-lg px-6 py-8">
      <h3 className="text-xl text-slate-700 mb-4 font-bold"> List of items</h3>
      <ul className="flex flex-col list-none list-inside gap-3">
        {taskList.map((item) => (
          <li className="flex items-center gap-3 justify-between">
            <Task item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
