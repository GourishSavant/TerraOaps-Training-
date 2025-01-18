// import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { loginUser } from "../../redux/slices/authSlice.jsx";

// const StudentLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = dispatch();
//   const navigate = useNavigate();

//   const { isLoading, error, role } = useSelector((state) => state.auth);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(loginUser({ username, password }));

//     if (result.meta.requestStatus === "fulfilled") {
//       navigate("users/features/student/dashboard");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">Student Login</h2>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//             disabled={isLoading}
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;