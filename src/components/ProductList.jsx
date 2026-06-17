// const ProductList = ({ products }) => {
//   return (
//     <div>
//       {products.length === 0 ? (
//         <p>No Products Found</p>
//       ) : (
//         products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ccc",
//               margin: "10px",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               width="150"
//             />

//             <h3>{product.title}</h3>

//             <p>Price: ₹{product.price}</p>

//             <p>Category: {product.category}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProductList;