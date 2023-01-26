import React, { useState, useEffect } from "react";
import {
  getAllProducts,
  deleteProduct,
  updateProduct
} from "../../services/api";
import ProductList from "./../../organisms/ProductList/ProductList";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await getAllProducts();
      setProducts(prods);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (product) => {
    try {
      await updateProduct(product);
      const newProducts = [...products];
      const index = newProducts.findIndex((p) => p.id === product.id);
      newProducts[index] = product;
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ProductList
        products={products}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default AdminDashboard;
