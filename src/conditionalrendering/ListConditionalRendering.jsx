function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + "👌";
  }

  return <li>{itemContent}</li>;
}

export default function ListConditionalRendering() {
  return (
    <section className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-6 font-bold">
        Sally Ride's Packing List
      </h2>
      <ul className="list-disc list-inside flex flex-col justify-center text-gray-500">
        {[
          { name: "Space suit", isPacked: true },
          { name: "Helmet with a golden leaf", isPacked: true },
          { name: "Photo of Tam", isPacked: false },
        ].map(({ name, isPacked }) => (
          <Item key={name} name={name} isPacked={isPacked}></Item>
        ))}
      </ul>
    </section>
  );
}
