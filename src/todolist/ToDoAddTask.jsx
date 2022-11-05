export default function ToDoAddTask({
  onTaskTextChange,
  taskText,
  onHandleAddTask,
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <input
        type="text"
        className="form-input px-4 py-3 rounded-lg border-gray-400"
        value={taskText}
        onChange={(e) => onTaskTextChange(e.target.value)}
      />
      <button
        type="button"
        className="px-6 py-4 bg-blue-600 text-blue-50 rounded-md hover:bg-blue-800"
        onClick={() => {
          onHandleAddTask((taskList) => [...taskList, taskText]);
          onTaskTextChange("");
        }}
      >
        Add
      </button>
    </div>
  );
}
