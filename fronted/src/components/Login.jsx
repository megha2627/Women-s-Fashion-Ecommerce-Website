import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { setUser } from "../redux/features/auth/authSlice";

import { useLoginUserMutation } from "../redux/features/auth/authApi";
//import { useLoginUserMutation } from "../redux/features/auth/authApi.js";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();
      //const token = response.token;
      //const user = response.user;
      // const { user } = response;
      console.log(response);

      // dispatch(setUser({ user})); // Dispatch setUser action
      navigate("/");
      
    } catch (err) {
      setMessage("Please provide your email and password");
    }
  };
  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-sm border shadow bg-white mx-auto p-8">
          <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
          <form
            onSubmit={handleLogin}
            className="space-y-5 max-w-sm mx-auto pt-8"
          >
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-gray-100 focus:outline-none px-5 py-3"
            />
            {message && <p className="text-red-500">{message}</p>}
            <button
              type="submit"
              className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
            >
              Login
            </button>
          </form>
          <p className="my-5 italic text-sm text-center ">
            Don't have an account?
            <Link to="/register" className="text-red-700 px-1 underline">
              Register
            </Link>{" "}
            here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;


