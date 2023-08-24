const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 2
  },
  {
    title: "Xiomi Redmi Note 2",
    price: 699.99,
    amount: 4
  },
  {
    title: "Xiomi Redmi Note 5",
    price: 399.99,
    amount: 3
  }
];

//can be destructred here itself as {totalItems, cartTotal}
let cartTotal = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    total.totalItems += amount;
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0
  }
);
console.log(cartTotal);
