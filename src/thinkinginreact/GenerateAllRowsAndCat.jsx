import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function GenerateSection({ productArray, currentCategory }) {
  const productRows = productArray
    .filter((el) => el.category === currentCategory)
    .map((el) => (
      <ProductRow
        key={el.id}
        category={el.category}
        name={el.name}
        price={el.price}
      ></ProductRow>
    ));
  return (
    <>
      <ProductCategoryRow category={currentCategory}></ProductCategoryRow>
      {productRows}
    </>
  );
}
