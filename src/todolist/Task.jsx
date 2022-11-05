import { useState } from "react";
import Btn from "../Btn";

export default function Task({ children }) {
  const [completeStatus, setCompleteStatus] = useState(false);

  return (
    <li className="flex items-center gap-3 justify-between">
      <p
        className={
          completeStatus ? "text-gray-500 line-through" : "text-gray-500"
        }
      >
        {children}
      </p>
      <Btn btnType="outline" fn={() => setCompleteStatus(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </Btn>
    </li>
  );
}
