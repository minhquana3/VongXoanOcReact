export default function ProductRow({ category, name, price }) {
  return (
    <tr>
      <td headers={`${category.toLowerCase()}Sub`} id={`${category}${name}`}>
        {name}
      </td>
      <td
        headers={`${category.toLowerCase()}Sub ${name.toLowerCase()}${category} productPrice`}
        id={`${name}Price`}
      >
        {price}
      </td>
    </tr>
  );
}
