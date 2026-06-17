

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const VALID_USER = "sirisha";
// const VALID_PASS = "1234";

// const Login = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!username || !password) {
//       alert("All fields are required");
//       return;
//     }

//     if (
//       username === VALID_USER &&
//       password === VALID_PASS
//     ) {
//       setIsLoggedIn(true);

//       localStorage.setItem(
//         "isLoggedIn",
//         "true"
//       );

//       localStorage.setItem(
//         "username",
//         username
//       );

//       alert("Login Successful");

//       navigate("/products");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh"
//       }}
//     >
//       <h1
//         style={{
//           color: "oklch(26.3% 0.024 320.12)",
//           marginBottom: "20px"
//         }}
//       >
//         Style Begins Here! 🛍️
//       </h1>

//       <h2
//         style={{
//           color: "oklch(59.1% 0.293 322.896)"
//         }}
//       >
//         Login
//       </h2>

//       <input
//         type="text"
//         placeholder="Enter Username"
//         value={username}
//         onChange={(e) =>
//           setUsername(e.target.value)
//         }
//         className="input"
//       />

//       <br />

//       <input
//         type="password"
//         placeholder="Enter Password"
//         value={password}
//         onChange={(e) =>
//           setPassword(e.target.value)
//         }
//         className="input"
//       />

//       <br />

//       <button
//         onClick={handleLogin}
//         className="loginBtn"
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;

// not using 