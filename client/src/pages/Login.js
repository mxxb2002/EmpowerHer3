import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  //const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    //sending POST request to the backend api with login form data
    axios
      .post("http://localhost:3001/login", formData)
      .then((result) => {
        toast.success(result.data.message);
        //setData(result.data);
        //setToken(result.data.token);
        //console.log(result.data.token);
        setTimeout(() => {
          handleLogin(result.data.token);
        }, 4000);
      })
      .catch((err) => toast.error(err.response.data));
  };
  return (
    <div className="flex flex-row min-h-screen items-center justify-center">
      <ToastContainer />
      <form
        className="w-[400px] py-10 px-5 border border-[#eee] shadow-lg rounded-[10px] bg-white"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-[24px] text-rose-700 font-quicksand font-bold mb-3">
          Welcome Back!
        </p>
        <p className="font-Poppins font-medium text-[16px] my-2">Email</p>
        <input
          type={"email"}
          placeholder="example@gmail.com"
          className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="font-Poppins font-medium text-[16px] my-2">Password</p>
        <input
          type={"password"}
          placeholder="password"
          className="w-full bg-white border border-[#6e6e6e] px-3 py-2 rounded-[4px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row items-center w-full justify-between">
          <a href="/" className="text-rose-700 ">
            Return to Home
          </a>
          <button
            type={"submit"}
            className="w-[100px] flex flex-row items-center justify-center h-[40px] bg-rose-600 text-white rounded-[4px] hover:bg-rose-800 my-4 cursor-pointer"
          >
            <p className="text-[18px] font-quicksand font-bold">Login</p>
          </button>
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-rose-700 ">
            Register
          </a>{" "}
          here
        </p>
      </form>
    </div>
  );
}
