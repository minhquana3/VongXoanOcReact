import { useState } from "react";

function MyButton({ count, onClick, resetClick }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onClick}
        className="px-6 py-4 bg-blue-600 text-blue-50 rounded-md hover:bg-blue-800"
      >
        Clicked {count} times
      </button>

      <button
        onClick={resetClick}
        className="px-3 py-4 border-solid border-blue-300 border-2 text-blue-500 rounded-md hover:bg-blue-100"
      >
        Click to reset
      </button>
    </div>
  );
}

export default function SharedState() {
  const [countMain, setCountMain] = useState(0);

  function handleClickMain() {
    setCountMain(countMain + 1);
  }

  function resetClickMain() {
    setCountMain(0);
  }

  return (
    <div className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-8 font-bold">
        How to share state between components
      </h2>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-slate-500 mb-3">Button 1</p>
          <MyButton
            count={countMain}
            onClick={handleClickMain}
            resetClick={resetClickMain}
          ></MyButton>
        </div>

        <div>
          <p className="text-slate-500 mb-3">Button 2</p>
          <MyButton
            count={countMain}
            onClick={handleClickMain}
            resetClick={resetClickMain}
          ></MyButton>
        </div>
      </div>
    </div>
  );
}
