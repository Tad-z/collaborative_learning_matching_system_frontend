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
        <h1 className="h1">Data Upload</h1>
        <p className="p">Upload your data</p>
        <form className="form" onSubmit={handleSubmit(submitHandler)}>
          <div className="column">
            <label htmlFor="username" className="label">
              Title&nbsp;<span className="text-red-600">*</span>
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
            <label className="label" htmlFor="file">
                    Data
                </label>
                <input
                    {...register("file", { required: true })}
                    className="input"
                    type="file"
                    id="file"
                    placeholder="Insert file here"
                />
          </div>
          <button type="submit" className={`${isLoading ? "blurButton" : "button"}`}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
