//Reduce
//iterates, callback function
//reduces the array to a single value - number, array, object

// reduce(callback(acc, curr){
//    return acc += curr.key;
// }, initialValue);
//call back function 1st parameter ('acc') - total of all calculations -- accumulator
//call back function 2nd parameter ('curr') - current iteration/ value

const staff = [
  {
    name: "bob",
    age: 20,
    role: "developer",
    salary: 100
  },
  {
    name: "peter",
    age: 25,
    role: "developer",
    salary: 300
  },
  {
    name: "susy",
    age: 30,
    role: "the boss",
    salary: 400
  },
  {
    name: "anna",
    age: 35,
    role: "intern",
    salary: 10
  }
];

const dailyTotal = staff.reduce((total, person) => {
  return (total += person.salary);
}, 0);

console.log(dailyTotal);
