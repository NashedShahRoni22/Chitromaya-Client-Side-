import React from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../Images/login.png";

const Login = () => {
  const handelUserLogin = () => {};
  return (
    <section className="grid md:grid-cols-2 py-20 items-center">
      <div className="hidden md:block">
        <img src={loginBanner} alt="" />
      </div>
      <form onSubmit={handelUserLogin} className="mx-5">
        <h1 className="font-bold text-4xl">Login Now</h1>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text">Enter Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <input
            type="submit"
            value="Login"
            className="btn glass mt-3 w-full"
          />
        </div>
       <p className="mt-3">New Here ? <Link to='/register'>Register Now</Link></p> 
      </form>
    </section>
  );
};

export default Login;
