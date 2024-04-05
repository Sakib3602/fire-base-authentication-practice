import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import {  updateProfile } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.init";

const Register = () => {

    const {signUpHere} = useContext(AuthContext)
    const [error,setError] = useState()

    function handle(e){
        e.preventDefault();

        setError('')

        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const confirm = e.target.confirm.value
        
        signUpHere(email,password)
        .then(()=>{

          // email validation
          sendEmailVerification(auth.currentUser)
                .then(()=>{
                    
                    
                    alert("check Your Email For validation")
                })
                .catch(()=>{
                   
                })
               

                // update profile
          updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error)=>{
            setError(error.message)

        })
       



    }





  return (
    <div className="hero h-[630px] bg-purple-400 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" 
                name="name"
                placeholder="your name"
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
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm your Password"
                className="input input-bordered"
                required
              />
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
               
              </label>
              {
                error && <p className="text-[14px] text-red-600">{error}</p>
              }
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
            <label className="label">
                
                <Link to={"/login"} className="label-text-alt link link-hover"> All Ready Register ? Log In.</Link>
              </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
