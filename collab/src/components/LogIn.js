import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ApiCall, { getError } from "../helpers/api";
import "./Login.css";

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

//   const router = useRouter();
  const submitHandler = async ({ fullname, password }) => {

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
            <label htmlFor="fullname" className="label">
              Full Name&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("fullname", {
                required: "Please enter a valid name",
                minLength: {
                  value: 4,
                  message: "Your name should have minimum of 4 characters",
                },
              })}
              className="input"
              name="fullname"
              id="fullname"
              autoFocus
            />
            {errors.fullname && (
              <div className="text-red-500">{errors.fullname.message}</div>
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
