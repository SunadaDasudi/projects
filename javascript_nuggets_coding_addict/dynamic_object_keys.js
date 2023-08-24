//dot notation
const person = { name: "john" };
console.log(person.name);
person.age = 25;
console.log(person);

//Square bracket notation
const items = {
  "feature-items": ["item1", "item2"]
};
console.log(items["feature-items"]);

let appState = "loading";
const keyName = "fruit";
const app = {
  [appState]: true
};
app[keyName] = "apple";
console.log(app); //(output: {loading: true, fruit: 'apple'}

const state = {
  loading: true,
  name: "",
  job: ""
};
console.log(state);
function updateState(key, value) {
  state[key] = value; //dynamic object update
}
updateState("loading", false);
updateState("name", "sunada");
updateState("job", "developer");
updateState("age", 35); //creating a new object key
updateState("hobby", ["cooking"]); //creating a new object key
console.log(state);
