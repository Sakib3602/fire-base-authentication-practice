import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import {  useNavigate,useLocation } from "react-router-dom";
const LogIn = () => {
  const { logInHere, google, git, person } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate()

  function handle(e) {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInHere(email, password)
      .then(() => {
        alert("log in succesfully!");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function googleHandle() {
    google()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
      })
      .catch((error) => {
        setError(error.message);
        // ...
      });
  }
  function GitHandle() {
    git()
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  }

  const location = useLocation();
  console.log(location)
  useEffect(() => {
    if (person) {
      navigate(location.state);
      
    }
  }, [person]);
  return (
    <div className="hero h-[630px] bg-yellow-300 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In!</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={googleHandle} className="btn btn-outline btn-wide">
            Google
          </button>
          <button onClick={GitHandle} className="btn btn-outline btn-wide">
            GitHub
          </button>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handle} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {error && <p className="text-[14px] text-red-600">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <label className="label">
              <Link to={"/register"} className="label-text-alt link link-hover">
                {" "}
                New Here ? Register Now
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
