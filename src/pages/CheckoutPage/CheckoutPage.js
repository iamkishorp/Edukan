import React from "react";
import { useState } from "react";

const Checkout = ({ cart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // call payment gateway API
    // handle success or failure
    setIsProcessing(false);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.productId}>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total:</td>
            <td>{cart.reduce((total, item) => total + item.total, 0)}</td>
          </tr>
        </tfoot>
      </table>
      <form onSubmit={handleSubmit}>
        <label>
          Payment Method:
          <select>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">Paypal</option>
          </select>
        </label>
        <input type="text" placeholder="Card number" />
        <input type="text" placeholder="Expiration date" />
        <input type="text" placeholder="CVV" />
        <button disabled={isProcessing}>Place order</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
export default Checkout;
