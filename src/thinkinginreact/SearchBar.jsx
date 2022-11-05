export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <>
      <form className="mb-6">
        <p className="mb-4">
          <label
            htmlFor="searchBox"
            className="inline-block text-gray-700 mb-2"
          >
            Search
          </label>
          <input
            type="search"
            name="search-product-hbox"
            id="searchBox"
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 "
          />
        </p>
        <p className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability-checkbox"
            id="inStock"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 shadow-sm   focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
          />
          <label htmlFor="inStock" className="text-gray-700">
            Only show products in stock
          </label>
        </p>
      </form>
    </>
  );
}
