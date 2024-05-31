import React, { useState } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
// import ApiCall from "./api/helper";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { getError } from "../reducers/error";
// import { useRouter } from "next/router";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

//   const router = useRouter();
  const submitHandler = async ({ username, password }) => {
    // try {
    //   setIsLoading(true);
    //   const response = await ApiCall.postMethod(
    //     "https://emaxapi.onrender.com/user/login",
    //     {
    //       username,
    //       password,
    //     }
    //   );

    //   if (response) {
    //     toast("You are logged in");
    //     const data = response.data;
    //     const { token } = data;
    //     const { username } = data;
    //     const tokenExpireTime = new Date().getTime() + 3600000;

    //     // Store user data and token information
    //     localStorage.setItem("username", username);
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("isAuthenticated", true);
    //     localStorage.setItem("tokenExpireTime", tokenExpireTime); // Store the token expiration time

    //   } else {
    //     toast.error("Something went wrong");
    //   }
    //   router.push("/");
    // } catch (err) {
    //   toast.error(getError(err));
    //   console.error(err.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };




  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body">
      <Header title="login" />
      <div className="container">
        <h1 className="h1">Login</h1>
        <p className="p">Sign-In Information</p>
        <form className="form" onSubmit={handleSubmit(submitHandler)}>
          <div className="column">
            <label htmlFor="username" className="label">
              Full Name&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("username", {
                required: "Please enter a valid username",
                minLength: {
                  value: 4,
                  message: "Your name should have minimum of 4 characters",
                },
              })}
              className="input"
              name="username"
              id="username"
              autoFocus
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
          <div className="column">
            <label htmlFor="password" className="label">
              Password &nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Please enter a strong password",
                minLength: {
                  value: 6,
                  message: "Password should have minimum of 6 characters",
                },
              })}
              className="pswInput"
              id="password"
              autoFocus
            />
            <div className="LogInputIcon" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className={`${isLoading ? "blurButton" : "button"}`}>
            {isLoading ? "Loading..." : "Login"}
          </button>
          <div className="mb-2 mt-3">
            <p className="sm: text-sm">Don&apos;t have an account? &nbsp;
              <a className="link" href="signup">Create an account</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
