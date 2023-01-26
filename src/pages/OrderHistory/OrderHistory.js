import React, { useState, useEffect } from "react";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // make API call to fetch orders for userId
    // setOrders(response.data);
    setIsLoading(false);
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td>
                <button>View details</button>
                {order.status === "shipped" && <button>Track shipment</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderHistory;
