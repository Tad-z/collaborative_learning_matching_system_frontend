import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiCall, { getError } from "../helpers/api";
import Header from "./Header";
import "./Login.css";

export default function UploadScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in first");
      navigate("/login");
    }
  }, [navigate]);

  const submitHandler = async (data) => {
    const token = localStorage.getItem("token")
    console.log(token)
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", data.file[0]);
      formData.append("title", data.title);
      const response = await ApiCall.postMethod(
        "http://localhost:8000/group/balanced-groups/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response) {
        toast.success("File Uploaded Successfully");
        reset();
      } else {
        toast.error("File upload failed");
      }
    } catch (error) {
      toast.error(getError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="body">
      <Header title="upload" />
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
                required: "Please enter a valid title",
                minLength: {
                  value: 4,
                  message: "Title should have a minimum of 4 characters",
                },
              })}
              className="input"
              name="title"
              id="title"
              autoFocus
            />
            {errors.title && (
              <div className="text-red-500">{errors.title.message}</div>
            )}
          </div>
          <div className="column">
            <label className="label" htmlFor="file">
              Data&nbsp;<span className="text-red-600">*</span>
            </label>
            <input
              {...register("file", { required: true })}
              className="input"
              type="file"
              id="file"
              placeholder="Insert file here"
            />
            {errors.file && (
              <div className="text-red-500">File is required</div>
            )}
          </div>
          <button
            type="submit"
            className={`${isLoading ? "blurButton" : "button"}`}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
