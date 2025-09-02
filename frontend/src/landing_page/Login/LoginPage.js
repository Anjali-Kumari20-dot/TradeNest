import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="" style={{marginTop: "8rem", marginBottom: "4rem", display: "flex", justifyContent: "center"}}>
            <form onSubmit={handleSubmit}>
              <div className="Login-card">
                <h2 style={{ marginBottom: "1.5rem" }}>Login to TradeNest</h2>
                <div className="input-group" style={{ gap: "1.3rem", display: "flex", justifyContent: "center" }}>
                  <div
                    className="email-input-wrapper"
                    style={{ marginBottom: "1.5rem", height: "2rem" }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleOnChange}
                      style={{
                        border: "2px solid #bbb",
                        borderRadius: "6px",
                        padding: "0.5rem",
                        marginLeft: "1rem",
                        outline: "none",
                        height: "3.5rem",
                        width: "20rem",
                      }}
                    />
                  </div>
                  <div
                    className="password-input-wrapper"
                    style={{ marginBottom: "1.5rem", height: "2rem" }}
                  >
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password"
                      onChange={handleOnChange}
                      style={{
                        border: "2px solid #bbb",
                        borderRadius: "6px",
                        padding: "0.5rem",
                        marginLeft: "1rem",
                        outline: "none",
                        height: "3.5rem",
                        width: "20rem",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-2 btn btn-primary fs-5 mt-4"
                  style={{ width: "60%", margin: "0 auto", marginTop: "0.5rem" }}
                >
                  Submit
                </button>
                <br />
                <br />
              </div>
            </form>
            <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
