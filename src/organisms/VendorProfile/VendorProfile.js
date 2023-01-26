import React from "react";
import ProductList from "../ProductList/PRoductList";

const VendorProfile = ({ vendor }) => {
  return (
    <div>
      <h2>{vendor.name}</h2>
      <p>{vendor.bio}</p>
      <h3>Products</h3>
      <ProductList products={vendor.products} />
      <h3>Ratings</h3>
      <p>{vendor.ratings}</p>
    </div>
  );
};

export default VendorProfile;
