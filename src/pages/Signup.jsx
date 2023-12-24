import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
    fullaname: "",
  });

  const { email, password, fullaname } = formData;

  const [showPassword, setShowPassword] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;

    setFormdata((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold text-slate-700">
        Sign Up
      </h1>
      <div className="flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto md:gap-8">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src={
              "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition-all"
              type="text"
              id="fullname"
              name="fullname"
              value={email}
              onChange={onChange}
              placeholder="Fullname"
            />
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition-all"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition-all"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Already have an account?{" "}
                <span>
                  <Link
                    className="text-red-500 hover:text-red-600 cursor-pointer transition-all"
                    to={"/login"}
                  >
                    Log In
                  </Link>
                </span>
              </p>
              {/* <p>
                <Link
                  className="text-blue-500 hover:text-blue-600 cursor-pointer transition-all"
                  to={"/forgot-password"}
                >
                  Forgot password?
                </Link>
              </p> */}
            </div>
            <button
              className="bg-blue-600 w-full text-white uppercase text-sm px-7 py-3 hover:bg-blue-700 transition-all font-medium mb-6"
              type="submit"
            >
              Sign Up
            </button>
            <div className="flex gap-5 before:border-t before:border-gray-300 items-center before:flex-1 after:border-t after:flex-1 after:border-gray-300 mb-6">
              <p className="text-center font-medium text-gray-600">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
