import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/AdminLogin.css";

function Login() {

   useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  const navigate = useNavigate();

  // Dummy credentials
  const dummyEmail = "admin@gmail.com";
  const dummyPassword = "admin123";

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");

  // Submit function
  const handleSubmit = (e) => {

    e.preventDefault();

    // Empty validation
    if (!email || !password || !captcha) {

      toast.error("Please fill all fields");

      return;
    }

    // Captcha validation
    if (Number(captcha) !== 5) {

      toast.error("Captcha is incorrect");

      return;
    }

    // Credentials validation
    if (
      email === dummyEmail &&
      password === dummyPassword
    ) {

      toast.success("Login Successful");

      setTimeout(() => {

        navigate("/dashboard");

      }, 1500);

    } else {

      toast.error("Invalid Email or Password");

    }
  };

  return (

    <>

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      <div className="login-wrapper">

        <div className="login-card">

          {/* LEFT IMAGE */}

          <div className="login-left">

            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
              alt=""
            />

          </div>

          {/* RIGHT */}

          <div className="login-right">

            <h2>Admin Login</h2>

            <form onSubmit={handleSubmit} autoComplete="off">

              <div className="input-group">

                <label>Email *</label>

                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

              <div className="input-group">

                <label>Password *</label>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>

              <div className="forgot">

                <a href="/">
                  Forgot Password?
                </a>

              </div>

              <div className="captcha">

                <span>

                  ↻ 2 + 3 = ?

                </span>

                <input
                  type="text"
                  value={captcha}
                  onChange={(e) =>
                    setCaptcha(e.target.value)
                  }
                />

              </div>

              <button
                type="submit"
                className="login-btn"
              >

                Sign In

              </button>

            </form>

          </div>

        </div>

      </div>

    </>

  );
}

export default Login;