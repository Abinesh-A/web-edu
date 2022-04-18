// import Aujinput from "../common/Aujinput";
// import Aujbutton from "../common/Aujbutton";
// // import axios from "axios";
// import "./Signin.css";
// import React, { useState, useEffect } from "react";
// import { Auth } from "aws-amplify";
// import { useHistory } from "react-router-dom";

// const Signin = ({ onSignin }) => {
//   const apiurl = "http://localhost:9000/user/";

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();
//   const handlesubmit = async (event) => {
//     try {
//       event.preventDefault();
//       const response = await Auth.signIn(username, password);
//       history.push("/");
//       onSignin();
//       console.log("auth responsed", response);
//     } catch (error) {
//       console.log("error signing in", error);
//     }
//   };

//   const [ismobiles, setIsmobiles] = useState(window.innerWidth < 700);
//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => {
//         const ismobile = window.innerWidth < 700;
//         if (ismobile !== ismobiles) setIsmobiles(ismobile);
//       },
//       false
//     );
//   }, [ismobiles]);

//   const handlechange = (e, arg) => {
//     if (!e.target.validity.valid) {
//       document.getElementById(arg).className =
//         "is-invalid form-control mb-3 pr-5";
//     } else {
//       document.getElementById(arg).className = "form-control mb-3 pr-5";
//     }
//   };
//   const formvalidate = () => {
//     let list = ["username", "password"];
//     list.forEach((state) => {
//       let x = document.getElementById(state).value;
//       if (x === "") {
//         document.getElementById(state).className =
//           "is-invalid form-control mb-3 pr-5";
//       }
//     });
//   };

//   return (
//     <div className="margintops">
//       <div className="d-flex justify-content-center">
//         <div className="flex-fill"></div>
//         <div
//           className={`${
//             ismobiles
//               ? "border pt-3 pb-4 pr-5 pl-5 bg"
//               : "border p-5 flex-shrink bg"
//           }`}
//         >
//           <h1 className="mb-4 color">sign in</h1>
//           <form onSubmit={handlesubmit}>
//             <div className="form-group">
//               <div>
//                 <Aujinput
//                   type="text"
//                   class="form-control mb-3 pr-5"
//                   placeholder="username"
//                   id="username"
//                   onBlur={(e) => {
//                     handlechange(e, "username");
//                   }}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <div>
//                   <Aujinput
//                     type="password"
//                     class="form-control mb-3 pr-5"
//                     placeholder="password"
//                     id="password"
//                     onBlur={(e) => {
//                       handlechange(e, "password");
//                     }}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="mr-5">
//                 <a className="d-flex mr-5 mb-3 small color" href="./signup"></a>
//               </div>
//             </div>
//             <div className="d-flex justify-content-center mt-5">
//               <div className="flex-fill">
//                 <a className="d-flex mt-2 atag" href="./signup">
//                   sign up
//                 </a>
//               </div>
//               <div>
//                 <Aujbutton
//                   type="submit"
//                   class="btn shadow-none"
//                   name="sign in "
//                   id="bgcolor"
//                   onClick={handlesubmit}
//                 ></Aujbutton>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="flex-fill"></div>
//       </div>
//     </div>
//   );
// };

// export default Signin;
