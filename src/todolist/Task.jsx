import { useState } from "react";
import Btn from "../Btn";

export default function Task({ item }) {
  const [completeStatus, setCompleteStatus] = useState(false);
  const changeStatus = () => {
    setCompleteStatus(!completeStatus);
  };
  return (
    <>
      <p
        className={
          completeStatus ? "text-gray-500 line-through" : "text-gray-500"
        }
      >
        {item}
      </p>
      <Btn btnType="outline" fn={changeStatus}></Btn>
    </>
  );
}
