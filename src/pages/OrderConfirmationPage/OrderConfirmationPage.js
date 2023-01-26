import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/api";

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedOrder = await getOrder(orderId);
      setOrder(fetchedOrder);
      setIsLoading(false);
    };
    fetchData();
  }, [orderId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
      <p>Order Number: {order.id}</p>
      <p>Total: ${order.total}</p>
      <p>Items:</p>
      <ul>
        {order.items.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderConfirmationPage;
