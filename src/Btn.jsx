export default function Btn({ btnType, fn, children }) {
  const btnColor = {
    primary: "px-6 py-4 bg-blue-600 text-blue-50 rounded-md hover:bg-blue-800",
    outline:
      "px-3 py-4 border-solid border-blue-300 border-2 text-blue-500 rounded-md hover:bg-blue-100",
    neutral: "px-6 py-4 bg-gray-600 text-gray-50 rounded-md hover:bg-gray-800",
  };

  return (
    <button type="button" className={btnColor[btnType]} onClick={fn}>
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
    </button>
  );
}
