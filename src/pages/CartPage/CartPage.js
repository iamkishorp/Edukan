import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartItems,
  removeFromCart,
  updateQuantity
} from "../../services/api";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getCartItems(user.id);
      setCartItems(items);
      setIsLoading(false);
    };
    if (user) fetchData();
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleRemove = async (itemId) => {
    const newItems = await removeFromCart(user.id, itemId);
    setCartItems(newItems);
  };

  const handleQuantityChange = async (itemId, qty) => {
    const newItems = await updateQuantity(user.id, itemId, qty);
    setCartItems(newItems);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                />
              </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total: {total}</p>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
