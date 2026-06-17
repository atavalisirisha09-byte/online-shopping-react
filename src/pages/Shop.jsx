// import React, { useState } from "react";
// import Header from "../components/Header";
// import ProductCard from "../components/ProductCard";
// import sweater from "../assets/sweter.png";

// const products = [
//   { id: 1, imgSrc: sweater, name: "High-Neck Sweater", price: 8976, shop: "Trends", rating: 4, isavailable: true, category: "men" },
//   { id: 2, imgSrc: "./src/assets/kurta.webp", name: "Women's Royon Blend Kurta", price: 1999, shop: "H&M", rating: 5, isavailable: true, category: "women" },
//   { id: 3, imgSrc: "./src/assets/chappal.png", name: "Bata Women", price: 1499, shop: "H&M", rating: 5, isavailable: false, category: "women" },
//   { id: 4, imgSrc: "./src/assets/shoes.png", name: "Asian Men's Sports Shoes", price: 599, shop: "Trends", rating: 5, isavailable: true, category: "men" },
//   { id: 5, imgSrc: "./src/assets/short kurta.png", name: "Brownverse Women's Short Kurti", price: 599, shop: "H&M", rating: 3, isavailable: true, category: "women" },
//   { id: 6, imgSrc: "./src/assets/trouser.png", name: "Urbano Men's Baggy Trousers", price: 999, shop: "Trends", rating: 5, isavailable: true, category: "men" },
//   { id: 7, imgSrc: "./src/assets/kid1.png", name: "Kenzo Kids Tracksuit", price: 1300, shop: "Trends", rating: 5, isavailable: true, category: "kids" },
//   { id: 8, imgSrc: "./src/assets/kid2.png", name: "Kenzo Kids Dungarees Set", price: 1242, shop: "H&M", rating: 5, isavailable: true, category: "kids" },
//   { id: 9, imgSrc: "./src/assets/kid3.webp", name: "Kidbea Kids Co-Ord Set", price: 799, shop: "H&M", rating: 5, isavailable: true, category: "kids" },
// ];

// const Shop = ({
//   addToCart,
//   isLoggedIn
// }) => {
//   const [filter, setFilter] = useState("all");

//   const filtered = products.filter((p) =>
//     filter === "all" ? true : p.category === filter
//   );

//   return (
//     <div className="homepage">
//       <p style={{ fontWeight: "bold", padding: "10px 20px" }}>Sponsored products:</p>
//       {["all", "men", "women", "kids"].map((f) => (
//         <button key={f} onClick={() => setFilter(f)} className="filterbtn">
//           {f.charAt(0).toUpperCase() + f.slice(1)}
//         </button>
//       ))}
//       <main className="box1">
//         {filtered.map((item) => (
//          <ProductCard
//   key={item.id}
//   product={item}
//   addToCart={addToCart}
//   isLoggedIn={isLoggedIn}
// />
//         ))}
//       </main>
//     </div>
//   );
// };

// export default Shop;

//  not using 