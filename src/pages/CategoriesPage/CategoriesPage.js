import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getProductsByCategory } from "../services/api";
import ProductList from "./ProductList";

const CategoriesPage = () => {
  const { name } = useParams();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [cats, prods] = await Promise.all([
        getCategories(),
        getProductsByCategory(name)
      ]);
      setCategory(cats.find((cat) => cat.name === name));
      setProducts(prods);
      setIsLoading(false);
    };
    fetchData();
  }, [name]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <ProductList products={products} />
    </div>
  );
};

export default CategoriesPage;
