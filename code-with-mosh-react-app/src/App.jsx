import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import Like from "./components/Like";
import Message from "./components/Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import FormWithReactHookForm from "./components/FormWithReactHookForm";

import { categories } from "./expense-tracker/categories";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ProductList from "./components/ProductList";

import { CanceledError } from "./services/api-client";
import UserService from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 }
  //   ]
  // });
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"]
  // });
  // const [showAlert, setShowAlert] = useState(false);
  // const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John"
  //   }
  // });
  // const items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  // const onLikeClick = () => {
  //   console.log("notification from the like button!");
  // };

  // const handleClear = () => {
  //   setCartItems(cartItems.filter((cartItem) => cartItem !== "Product 2"));
  // };

  // const onChangePlayer = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };

  // const AddCheeseTopping = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // };

  // const onIncreaseQuantity = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id == 1 ? { ...item, quantity: 2 } : item
  //     )
  //   });
  // };

  // const text =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur fuga sequi voluptatem nihil commodi pariatur dolorum repellat voluptates dolores, veniam beatae. Nostrum unde quod itaque in, cum ipsam repellat.";
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   {
  //     id: 1,
  //     description: "Milk",
  //     amount: 100,
  //     category: "Groceries"
  //   },
  //   {
  //     id: 2,
  //     description: "Bread",
  //     amount: 150,
  //     category: "Utilities"
  //   },
  //   {
  //     id: 3,
  //     description: "Rice",
  //     amount: 250,
  //     category: "Entertainment"
  //   }
  // ]);
  // const deleteExpense = (id) => {
  //   setExpenses(expenses.filter((e) => e.id != id));
  // };

  // const handleOnSubmit = (data) => {
  //   console.log(data);
  //   setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  // };

  // const [category, setCategory] = useState("");
  // console.log("category:", category);

  //Custom hook
  const { users, error, loading, setUsers, setError } = useUsers();

  const deleteUser = (user) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });

    return () => cancel;
  };

  const addUser = () => {
    const newUser = {
      id: 0,
      name: "Sunada Dasudi"
    };

    UserService.add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
      });

    return () => cancel;
  };

  const updateUser = (user) => {
    const updatedUser = {
      ...user,
      name: user.name + "-updated"
    };

    const oldUserList = users.filter((u) => u.id !== user.id);

    UserService.update(updatedUser)
      .then(({ data: updatedUserData }) =>
        setUsers([updatedUserData, ...oldUserList])
      )
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      {/* <Like onClick={onLikeClick}></Like>
      <ListGroup items={items} heading="Cities" />
      {showAlert && (
        <Alert text="Primary" onClose={() => setShowAlert(false)}>
          Hello <span>world</span>
        </Alert>
      )}
      <Button onClickEvent={() => setShowAlert(true)}>Show Alert</Button>
      <Message />

      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={handleClear}></Cart>

      <div key={game.id}>
        {game.id} : {game.player.name}
      </div>

      <button onClick={onChangePlayer}>Change Player</button> */}
      {/* <button onClick={AddCheeseTopping}>Add Cheese Topping</button> */}

      {/* <button onClick={onIncreaseQuantity}>Increase Quantity</button> */}

      {/* <ExpandableText maxChars="60">{"Hello World"}</ExpandableText> */}
      {/* <FormWithReactHookForm></FormWithReactHookForm> */}
      {/* <div className="mb-3">
        <ExpenseForm onSubmit={handleOnSubmit}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenseObjectArray={
          selectedCategory
            ? expenses.filter((e) => e.category === selectedCategory)
            : expenses
        }
        selectedCategory={selectedCategory}
        onDelete={(id) => deleteExpense(id)}
      ></ExpenseList> */}
      {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList> */}
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export { categories };
export default App;
