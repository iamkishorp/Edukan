import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Sell</a>
      </nav>
      <img src="logo.png" alt="logo" />
      <form>
        <input type="text" placeholder="Search products" />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
