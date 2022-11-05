import Profile from "./ProfileComponent.jsx";

const people = [
  {
    id: 0,
    name: "Maria Skłodowska-Curie",
    imgId: "szV5sdG",
    profession: "physicist and chemist",
    awards:
      "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
    discoveries: "polonium (element)",
    numberAward: "4",
  },
  {
    id: 1,
    name: "Katsuko Saruhashi",
    imgId: "YfeOqp2",
    profession: "geochemist",
    awards: "Miyake Prize for geochemistry, Tanaka Prize",
    discoveries: "a method for measuring carbon dioxide in seawater",
    numberAward: "2",
  },
];

function Card({ children }) {
  return <section className="profile">{children}</section>;
}

export default function Gallery() {
  const listPeople = people.map((el) => (
    <Card key={el.id}>
      <Profile
        name={el.name}
        imgId={el.imgId}
        profession={el.profession}
        awards={el.awards}
        discoveries={el.discoveries}
        numberAward={el.numberAward}
      ></Profile>
    </Card>
  ));
  return (
    <div>
      <h1>Notable Scientists</h1>
      {listPeople}
    </div>
  );
}
