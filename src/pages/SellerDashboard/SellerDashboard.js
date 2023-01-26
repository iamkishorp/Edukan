import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getSellerProducts, deleteProduct } from "../../services/api";
import ProductList from "./../../organisms/ProductList/ProductList";
import AddProductForm from "./../../organisms/AddProductForm/AddProductForm";

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const prods = await getSellerProducts();
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

  const handleAddProduct = () => {
    history.push("/add-product");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <ProductList products={products} onDelete={handleDelete} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default SellerDashboard;
