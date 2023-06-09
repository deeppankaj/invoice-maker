import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LogIn = () => {
  const data = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:8000/user/login",
      loginData
    );
    if (data.data === "invalid") {
      toast.error("Entered crenditial is wrong ");
    } else if (data.data.status === "ok") {
      toast.success("Logged in sucessfully");
      localStorage.setItem("token", data.data.token);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 500);
    }
  };
  const [loginData, setloginData] = useState(data);

  return (
    <>
      <div className="container mt-10 bg-white p-5 rounded-md shadow-md">
        <div className="row">
          <h4 className="w-full text-2xl p-3 text-center font-semibold "> Log in to continue</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Your Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  autoComplete="username"
                  onChange={(e) => {
                    setloginData({
                      ...loginData,
                      email: e.target.value,
                    });
                  }}
                  required=""
                />
              </div>
            </div>

            <div className="col-lg-12 mb-10">
              <div className="mb-3">
                <label className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="current-password"
                  required=""
                  onChange={(e) => {
                    setloginData({
                      ...loginData,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              
            </div>
            <div className="col-lg-12">
              <div className="mb-3 w-full bg-blue-700 text-white p-2 rounded-md text-center my-2 cursor-pointer">
                <button>Log In</button>
              </div>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
