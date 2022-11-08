import React, { useContext } from "react";
import { Link } from "react-router-dom";
import registerImg from "../../Images/register.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createGoogleUser } = useContext(AuthContext);

  const handelGoogleLogin = () => {
    console.log("clicked");
    createGoogleUser()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success('Google Registration Successfull!')
      })
      .catch((e) => console.error(e));
  };
  const handelUserRegistration = () => {};
  return (
    <section className="grid md:grid-cols-2 py-20 items-center">
      <div className="hidden md:block">
        <img src={registerImg} alt="" />
      </div>
      <div className="mx-5">
        <form onSubmit={handelUserRegistration}>
          <h1 className="font-bold text-4xl">Register Now</h1>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Enter Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
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
              value="Register"
              className="glass mt-3 py-2 w-full"
            />
          </div>
        </form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
        <button
          onClick={handelGoogleLogin}
          className="glass w-full mt-3 flex py-2 items-center justify-center"
        >
          <AiOutlineGoogle className="mr-3 text-2xl"></AiOutlineGoogle>
          <span>Continue with Google</span>
        </button>
      </div>
    </section>
  );
};

export default Register;
