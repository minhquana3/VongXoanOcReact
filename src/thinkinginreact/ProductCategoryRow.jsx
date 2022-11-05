export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th id={`${category}Sub`} colSpan="2" scope="colgroup">
        {category}
      </th>
    </tr>
  );
}
