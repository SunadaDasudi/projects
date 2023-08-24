//MAP method
//returns a new array
//does not change the size of the original array (unlike filter)
//uses values from the original array when making a new one

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
    name: "susy",
    age: 30,
    role: "the boss"
  }
];

console.log(people);

//if nothing is returned from the function, it'll have undefined values in the new array
const ages = people.map((person) => {
  return person.age;
});
console.log(ages);

//A function can be set-up and refereneced in the array map function
const getAges = (person) => person.age;
const ages1 = people.map(getAges);
console.log(ages1);

const newPeople = people.map((person) => {
  return {
    firstname: person.name.toUpperCase(),
    oldAge: person.age + 1
  };
});
console.log(newPeople);

const nameHTML = people.map((person) => {
  return `<h1>${person.name}</h1>`;
});

document.getElementById("result").innerHTML = nameHTML.join("");
