import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "./../../organisms/ProductList/ProductList";
import { getFeaturedProducts, getCategories } from "../../services/api";

const HomePage = () => <div> a </div>;
// const HomePage = () => {
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [products, cats] = await Promise.all([
//         getFeaturedProducts(),
//         getCategories()
//       ]);
//       setFeaturedProducts(products);
//       setCategories(cats);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {/* <h1>Welcome to our marketplace</h1>
//       <h2>Featured products</h2>
//       <ProductList products={featuredProducts} />
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             <Link to={`/category/${category.name}`}>{category.name}</Link>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

export default HomePage;
