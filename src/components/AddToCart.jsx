const AddToCart = ({ cart, increaseQty, decreaseQty }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div   className="cart-item"  key={item.id}>
            <h4 >{item.name}</h4><br />
            <p>
              ₹{item.price} X  { item.quantity}
            </p><br />

            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        ))
      )}
    </div>
  );
};

export default AddToCart;