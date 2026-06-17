//  import React from "react";

// const  Header=() => {
//   return( 
//         <div> 
//             <h1>QuickShop</h1>
            
//             <nav className="nav"> 
//                 <ul style={{ 
//                     display:"flex",gap:"10px",justifyContent:"flexstart",listStyleType:"none" 
//                 }}> 
//                     <li><a href="#">Home</a></li> 
//                     <li><a href="#">Shop/Products</a></li> 
//                     <li><a href="#">Cart</a></li> 
                   
//                 </ul> 
//             </nav> 
//             <hr /> 
//         </div> 
//     )
// }
// export default Header 
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ username, onLogout }) => {
  return (
    <div>
      <h1>QuickShop</h1>
      {/* <nav className="nav">
        <ul style={{ display: "flex", gap: "10px", listStyleType: "none", padding: 0 }}>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart 🛒</Link></li>
        </ul>
        <span>Hello, {username}! &nbsp;
          <button onClick={onLogout} className="filterbtn">Logout</button>
        </span>
      </nav>
      <hr /> */}
    </div>
  );
};

export default Header;