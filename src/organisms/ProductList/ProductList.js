import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>By: {product.vendor}</p>
          <p>Price: {product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
