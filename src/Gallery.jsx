const users = [
  {
    name: "My wife",
    imgUrl: "../public/myWife.jpg",
  },
  {
    name: "My self",
    imgUrl: "../public/mySelf.jpg",
  },
];

export default function GalleryComp() {
  const userList = users.map((user, index) => (
    <li key={index + 1}>
      <img
        src={user.imgUrl}
        alt={`Photo of ` + user.name}
        className="inline-block rounded-full w-24 h-24 mb-4"
      />
      <p className="text-slate-500 text-center">{user.name}</p>
    </li>
  ));

  return (
    <div className="px-6 pt-8 pb-16">
      <h2 className="text-2xl text-slate-700 mb-6 font-bold">
        Rendering a list
      </h2>
      <ul className="list-none flex items-center gap-4">{userList}</ul>
    </div>
  );
}
