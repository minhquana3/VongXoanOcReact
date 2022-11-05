import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

const productList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple", id: 1 },
  {
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Dragonfruit",
    id: 2,
  },
  {
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
    id: 3,
  },
  {
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
    id: 4,
  },
  {
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
    id: 5,
  },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas", id: 6 },
];

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <section className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-2 font-bold">
        React tutorial - Thinking in React
      </h2>

      <a
        href="https://beta.reactjs.org/learn/thinking-in-react#step-2-build-a-static-version-in-react"
        target="_blank"
        className="inline-block mb-8 border-b-blue-500 border-solid border-b-2 transition-all duration-300 easy-in-out hover:border-b-transparent"
      >
        Thinking in React for additional information
      </a>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      ></SearchBar>
      <ProductTable
        products={productList}
        filterText={filterText}
        inStockOnly={inStockOnly}
      ></ProductTable>
    </section>
  );
}
