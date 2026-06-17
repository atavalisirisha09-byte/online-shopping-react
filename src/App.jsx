import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import AddToCart from "./components/AddToCart";

import { Routes, Route, Link } from "react-router-dom";

import sweater from "./assets/sweter.png";

const App = () => {
  // ---------------- CART ----------------
  const [cart, setCart] = useState([]);

  // ---------------- FILTER ----------------
  const [filter, setFilter] = useState("all");

  // ---------------- LOGIN ----------------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //  NEW: login modal control
  const [showLogin, setShowLogin] = useState(false);

  //  NEW: store clicked product before login
  const [pendingProduct, setPendingProduct] = useState(null);

  // ---------------- PRODUCTS ----------------
   const products=[
    {         id:1,
  id:1,
  imgSrc:sweater,
  name:"High-Neck Sweater",
  price:8976,
  discount:20,
  shop:"Trends",
  rating:4,
  isavailable:true,
  category:"men",
  offer:true,
  delivery:"free delivary"
},
{id:2,
  imgSrc:"./src/assets/kurta.webp",
               name:"Women's Royon Blend Solid Straight Kurta",
                               price:1999,
                               shop:"H&M",
                               discount:23,
                                delivery:"₹50 Delivery",
                               rating:5,
                               isavailable:true,
                               category:"women",
                               offer:true,
},
{            id:3,
             imgSrc:" ./src/assets/chappal.png " ,
             name:"Bata Women ",
                               price:1499,
                                shop:"H&M",
                                discount:30,
                               rating:5,
                               isavailable:true,
                               category:"women",
                                delivery:"₹27 Delivery",
                                offer:false,
},
{
                               id:4,
                           imgSrc:"./src/assets/shoes.png", 
                           name:"Asian Men's Wonder-13 Sports Runnin Shoes" ,
                               price:599,
                                delivery:"₹77 Delivery",
                                shop:"Trends",
                                discount:5,
                               rating:5,
                               isavailable:true,
                               category:"men",
                                 offer:true,
},
{            id:5,
             imgSrc:"./src/assets/short kurta.png" ,
             name:"Brownverse Women's Embroidered Short kurti",
                               price:599,
                                shop:"H&M",
                                discount:75,
                               rating:3,
                               isavailable:true,
                                delivery:"free Delivery",
                               category:"women",
},
{  id:6,
  imgSrc:"./src/assets/trouser.png", name:"Urbano Fashion Men's Loose Baggy Fit Solid Chino Trousers  ",
                               price:999,
                                shop:"Trends",
                               rating:5,
                               isavailable:false,
                               category:"men",
                                 offer:true,
},
{  id:7,
  imgSrc:"./src/assets/kid1.png", name:"Kenzo Kids-puff-sleeve logo-print tracksuit- kids-Cotton-18 mths-Pink ",
                               price:1300,
                                shop:"Trends",
                               rating:5,
                                // delivery:"₹53 Delivery",
                               isavailable:false,
                               category:"kids",
                                  offer:false,
},
{  id:8,
  imgSrc:"./src/assets/kid2.png", name:"Kenzo Kids-tiger-pocket dungarees set-kinds-Cotton -18 mths-Blue ",
                               price:1242,
                                shop:"H&M",
                               rating:5,
                               discount:33,
                                delivery:"free Delivery",
                               isavailable:true,
                               category:"kids",
                                 offer:true,
},
{  id:9,
  imgSrc:"./src/assets/kid3.webp", name:"Kidbea Kids Elegant Comfortable Summer Wear Shirt & Pant Co-Ord Se",
                               price:799,
                                shop:"H&M",
                                discount:16,
                               rating:5,
                                delivery:"₹99 Delivery",
                               isavailable:true,
                               category:"kids",
                                 offer:true,
},
   ];



const [searchText, setSearchText] = useState("");



  // ---------------- FILTERED PRODUCTS ----------------
 // ---------------- FILTERED PRODUCTS ----------------
const filteredproducts = products.filter((item) => {
  const categoryMatch =
    filter === "all" || item.category === filter;

  const searchMatch =
    item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

  return categoryMatch && searchMatch;
});

  // ---------------- CART LOGIC ----------------
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //  PROTECTED ADD TO CART (MAIN FIX)
  const addToCartClick = (product) => {
    if (!isLoggedIn) {
      setPendingProduct(product);
      setShowLogin(true);
      return;
    }

    handleAddToCart(product);
  };

  // ---------------- LOGIN ----------------
  const validUser = "sirisha";
  const validPassword = "1234";

  const loginHandler = () => {
    if (!username || !password) {
      alert("All fields required");
      return;
    }

    if (username === validUser && password === validPassword) {
      setIsLoggedIn(true);
      setShowLogin(false);

      //  RESUME ACTION AFTER LOGIN
      if (pendingProduct) {
        handleAddToCart(pendingProduct);
        setPendingProduct(null);
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // ---------------- CART QTY ----------------
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ---------------- UI ----------------
  return (
  <div>
<Header />
    {/* NAVBAR */}
     <nav className="navbar">
      <Link className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/cart">Cart</Link>
    </nav>

    {/* ROUTES */}
    <Routes>

      {/*  HOME PAGE */}
      <Route
        path="/"
        element={
          <div>
            
               
            

            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("men")}>Men</button>
            <button onClick={() => setFilter("women")}>Women</button>
            <button onClick={() => setFilter("kids")}>Kids</button>

 <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
            <main className="box1">
              {filteredproducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  addToCart={addToCartClick}
                />
              ))}
            </main>
          </div>
        }
      />

      {/* 🛒 CART PAGE */}
      <Route
        path="/cart"
        element={
          <AddToCart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }
      />

    </Routes>

    {/* LOGIN POPUP (still global) */}
    {showLogin && (
       <div  className="login-overlay">

        <div   className="login-modal">
          <h2>Login</h2>

          <input
             className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
           className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    )}
  </div>
);
};

export default App;