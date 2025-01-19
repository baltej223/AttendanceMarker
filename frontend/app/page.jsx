"use client";
import React from "react";
import  { useState,useRef } from "react";
import Navbar from "@/comps/navbar";
function Home() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailRef = useRef("");
  const formLinkRef = useRef("");
  const rollNoRef = useRef("");
  const nameRef = useRef("");
  const cookieRef = useRef("");
  const groupRef = useRef("");
  const secretKeyRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const formLink = formLinkRef.current.value;
    const rollNo = rollNoRef.current.value;
    const name = nameRef.current.value;
    const cookie = cookieRef.current.value;
    const group = groupRef.current.value;
    const secretKey = secretKeyRef.current.value;

    console.log(`Email: ${email}, Google Form Link: ${formLink}, Roll No: ${rollNo}, Name: ${name}, Group: ${group}, Cookie: ${cookie}, Secret Key: ${secretKey}`);
  };

  let Attendenceform =({className})=> (
    <div className={`bg-white shadow-lg rounded-lg p-8 w-full max-w-lg ${className}`}>
          {/* // *Attendance Form* */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Attendance Form
            </h1>

            <div>
              <label className="block text-gray-700 font-medium">Email ID:</label>
              <input
                type="email"
                ref={emailRef}
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Google Form Link:
              </label>
              <input
                type="url"
                ref={formLinkRef}
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Roll No:</label>
              <input
                ref={rollNoRef}
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Name:</label>
              <input
                type="text"
                ref={nameRef}
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Group:</label>
              <input
                type="text"
                ref={groupRef}
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Cookie:</label>
              <input
                ref={cookieRef}
                placeholder="Enter cookie data"
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Secret Key:</label>
              <input
                type="text"
                ref={secretKeyRef}
                placeholder="Enter Secret data"
                required
                className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Submit Attendance
            </button>
          </form>
      </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Navbar className='sticky top-0 left-0'/>
      <Attendenceform className="pt-5"/>
    </div>
  );
}

export default Home;

// let loginPage = (
//     // *Login Form*
//     <form onSubmit={handleLogin} className="space-y-5">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Login
//       </h1>
//       <div>
//         <label className="block text-gray-700 font-medium">
//           Username:
//         </label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//           placeholder="Enter your username"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium">
//           Password:
//         </label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//           placeholder="Enter your password"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Login
//       </button>
//     </form>
// );