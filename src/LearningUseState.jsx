import { useState } from "react";

export default function LearningUseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6 pt-8 pb-16">
      <div className="flex items-center gap-2">
        {" "}
        <button
          type="button"
          className=" mb-4 px-6 py-3 border-2 border-solid rounded-md text-indigo-500 border-indigo-500 bg-white hover:bg-indigo-100"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          type="button"
          className=" mb-4 px-6 py-3 border-2 border-solid rounded-md text-indigo-500 border-indigo-500 bg-white hover:bg-indigo-100"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button
          type="button"
          className=" mb-4 px-6 py-3 border-2 border-solid rounded-md text-indigo-500 border-indigo-500 bg-white hover:bg-indigo-100"
          onClick={() => setCount(0)}
        >
          Set to Zero
        </button>
      </div>

      <p>{count}</p>
    </div>
  );
}
