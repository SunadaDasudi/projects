function Cart({ cartItems, onClear }) {
  return (
    <div>
      Cart
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Item</button>
    </div>
  );
}

export default Cart;
