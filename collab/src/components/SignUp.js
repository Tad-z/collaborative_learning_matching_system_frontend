import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ApiCall, { getError } from "../helpers/api";
import Header from "./Header";
import "./Login.css";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, fullname, password }) => {
    try {
      setIsLoading(true);
      const result = await ApiCall.postMethod("https://collab-api-lbtk.onrender.com/user/register", {
        fullname,
        email,
        password,
      });
      if (result) {
        toast.success("You have signed up");
        reset();
        navigate("/login"); // Redirect to login page after successful sign-up
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      toast.error(getError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="body">
      <Header title="signup" />
      <div className="container">
        <h1 className="h1">Create an Account</h1>
        <p className="p">Personal Information</p>
        <form className="form" onSubmit={handleSubmit(submitHandler)}>
          <div className="column">
            <label htmlFor="fullname" className="label">
              Full Name&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("fullname", {
                required: "Please enter a valid username",
                minLength: {
                  value: 4,
                  message: "Name should have minimum of 4 characters",
                },
              })}
              className="input"
              id="fullname"
              autoFocus
            />
            {errors.fullname && (
              <div className="text-red-500">{errors.fullname.message}</div>
            )}
          </div>
          <div className="column">
            <label htmlFor="email" className="label">
              Email&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="input"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              id="email"
              autoFocus
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="column">
            <label htmlFor="password" className="label">
              Password &nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="pswInput"
              {...register("password", {
                required: "Please enter a strong password",
                minLength: {
                  value: 6,
                  message: "Password should have minimum of 6 characters",
                },
              })}
              id="password"
              autoFocus
            />
            <div className="SignInputIcon" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password.message}</div>
            )}
          </div>
          <div className="flex justify-center">
            <button className={`${isLoading ? "blurButton" : "button"}`}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
