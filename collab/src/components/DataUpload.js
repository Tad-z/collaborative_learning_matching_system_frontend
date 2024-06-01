import React, { useState } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
// import ApiCall from "./api/helper";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { getError } from "../reducers/error";
// import { useRouter } from "next/router";
import "./Login.css";

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();


  const submitHandler = async (data) => {
    // try {
    //     const formData = new FormData();
    //     formData.append("file", data.file[0]);
    //     formData.append("title", data.title);
    //     const response = await postServerData(
    //       `https://series-api-nld9.onrender.com/series`,
    //       formData
    //     );
    //     if (response) {
    //       toast.success('Series added successfully');
    //     } else {
    //       toast.error('Something went wrong');
    //     }
    //     reset();
    //     Router.push("/")
        
    //   } catch (error) {
    //     console.log(error);
    //     toast.error(getError(error));
    //   }
  };




  return (
    <div className="body">
      <Header title="login" />
      <div className="container">
        <h1 className="h1">Data Upload</h1>
        <p className="p">Upload your data</p>
        <form className="form" onSubmit={handleSubmit(submitHandler)}>
          <div className="column">
            <label htmlFor="title" className="label">
              Title&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Please enter a valid username",
                minLength: {
                  value: 4,
                  message: "Your name should have minimum of 4 characters",
                },
              })}
              className="input"
              name="title"
              id="title"
              autoFocus
            />
            {errors.username && (
              <div className="text-red-500">{errors.title.message}</div>
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
