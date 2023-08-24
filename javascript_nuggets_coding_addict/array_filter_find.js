//Filter - returns a new array,
//can manipulate the size of the new array(unlikle map),
//returns based on condition
//returns an array even is there is a single selection

//Find - return single instance - object
//returns first match, if no match returns undefined

const people = [
  {
    name: "bob",
    age: 20,
    role: "developer"
  },
  {
    name: "anna",
    age: 25,
    role: "developer"
  },
  {
    name: "peter",
    age: 30,
    role: "the boss"
  },
  {
    name: "anna",
    age: 35,
    role: "intern"
  }
];
//filter
const youngPeople = people.filter((person) => {
  return person.age < 30;
});
console.log(youngPeople);

const developers = people.filter((person) => person.role == "developer");
console.log(developers);

//no match
const noPeople = people.filter((person) => {
  return person.age > 40;
});
console.log(noPeople);

//find
const findPeter = people.find((p) => p.name === "peter");
console.log(findPeter);

//no match
const noFind = people.find((p) => p.name === "no one");
console.log(noFind);

//multiple matches - first match
const multipleDevelopers = people.find((p) => p.role === "developer");
console.log(multipleDevelopers);
