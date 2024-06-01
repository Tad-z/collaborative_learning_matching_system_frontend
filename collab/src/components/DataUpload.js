import React, { useState } from "react";
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
    e.preventDefault();
    try {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        formData.append("title", data.title);
        const response = await ApiCall.postMethod(
          "http://localhost:8000/group/upload",
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response) {
          toast.success('File Uploaded Sucessfully');
        } else {
          toast.error('File upload failed');
        } 
      } catch (error) {
        console.log(error);
        toast.error(getError(error));
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
                    Data&nbsp;<span className="text-red-600">*</span>
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
