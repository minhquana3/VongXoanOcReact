function BtnComponent() {
  return (
    <>
      <button className="px-6 py-3 border-2 border-solid rounded-md text-indigo-500 border-indigo-500 bg-white hover:bg-indigo-100">
        I'm button
      </button>
    </>
  );
}

export default function BtnComp() {
  return (
    <div className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-6 font-bold">
        Rendering a component
      </h2>
      <BtnComponent />
    </div>
  );
}
