import GenerateSection from "./GenerateAllRowsAndCat";

export default function ProductTable({ products, filterText, inStockOnly }) {
  const processedProductsList = products.filter((product) => {
    if (product.name.toLowerCase().includes(filterText.toLowerCase())) {
      if (!inStockOnly) return true;
      else if (+inStockOnly - +product.stocked === 0) return true;
    }
  });

  const uniqueCategory = [
    ...new Set(
      processedProductsList.reduce(
        (previousResult, currentValue) => [
          ...previousResult,
          currentValue.category,
        ],
        []
      )
    ),
  ];
  const generateTable = uniqueCategory.map((el, index) => (
    <GenerateSection
      key={index}
      productArray={processedProductsList}
      currentCategory={el}
    ></GenerateSection>
  ));
  return (
    <>
      <table
        summary="Product list of React tutorial. More information available at https://beta.reactjs.org/learn/thinking-in-react#step-2-build-a-static-version-in-react"
        className="w-full text-left text-gray-500 font-normal table-auto"
      >
        <caption className="text-xl text-slate-700 font-bold mb-4">
          List of products
        </caption>
        <thead>
          <tr>
            <th id="productName" scope="col">
              Name
            </th>
            <th id="productPrice" scope="col">
              Price
            </th>
          </tr>
        </thead>
        <tbody>{generateTable}</tbody>
      </table>
    </>
  );
}
