import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetClick() {
    setCount(0);
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleClick}
        className="px-6 py-4 bg-indigo-600 text-indigo-50 rounded-md hover:bg-indigo-800"
      >
        Clicked {count} times
      </button>

      <button
        onClick={resetClick}
        className="px-3 py-4 border-solid border-indigo-300 border-2 text-indigo-500 rounded-md hover:bg-indigo-100"
      >
        Click to reset
      </button>
    </div>
  );
}

export default function UpdatedScreenBtnComp() {
  return (
    <div className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-8 font-bold">
        UseState - Update state of button
      </h2>
      <div className="flex flex-col gap-6 ">
        <div>
          <p className="text-slate-500 mb-3">Button 1</p>
          <MyButton></MyButton>
        </div>

        <div>
          <p className="text-slate-500 mb-3">Button 2</p>
          <MyButton></MyButton>
        </div>
      </div>
    </div>
  );
}
