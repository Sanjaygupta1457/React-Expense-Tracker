import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Swal from "sweetalert2";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      if (email && password) {
        setError("");

        const response = await logIn(email, password);

        // localStorage.setItem("userid", response.data.localId);
        if (response) {
          Swal.fire("Good job!", "You have successfully Login!", "success");
          navigate("/dashboard");
        }
      } else {
        Swal.fire("Incomplete login details");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Email not found!",
      });
      setError(err.message);
    }
  };

  const googleSignInHandler = async (event) => {
    event.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <Header />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={submitHandler}>
            <h3>Log In</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            {/* <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div> */}
            <div className="mb-3">
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={googleSignInHandler}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot password?{" "}
              <Link className="nav-link" to={"/forgot-password"}>
                Reset password?
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Login;
