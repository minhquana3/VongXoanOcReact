import { getImageUrl } from "./utils.js";

export default function Profile({
  name,
  imgId,
  profession,
  awards,
  discoveries,
  numberAward,
  size = 70,
}) {
  return (
    <>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {numberAward} </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </>
  );
}
