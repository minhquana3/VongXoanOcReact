class PersonCL {
  constructor(name, imgId, profession, awards, discoveries) {
    this.name = name;
    this.imgId = imgId;
    this.profession = profession;
    this.awards = awards;
    this.discoveries = discoveries;
    this.numberAward = this.awards.split(",").length;
  }
}

const mCurie = new PersonCL(
  "Maria Skłodowska-Curie",
  "https://i.imgur.com/szV5sdGs.jpg",
  "physicist and chemist",
  "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
  "polonium (element)"
);

const kSaruhashi = new PersonCL(
  "Katsuko Saruhashi",
  "https://i.imgur.com/YfeOqp2s.jpg",
  "geochemist",
  "Miyake Prize for geochemistry, Tanaka Prize",
  "a method for measuring carbon dioxide in seawater"
);
