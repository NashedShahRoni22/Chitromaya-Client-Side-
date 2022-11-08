import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../Images/register.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createGoogleUser, createUser, updateUser } = useContext(AuthContext);
  const navigatae = useNavigate();
  //handel Google sign in
  const handelGoogleLogin = () => {
    createGoogleUser()
      .then(() => {
        toast.success("Google Registration Successfull!");
        navigatae("/");
      })
      .catch((e) => console.error(e));
  };
  //handel user registration
  const handelUserRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then(() => {
        toast.success("Registration Successfull!");
        userProfileUpdate(name, photoURL);
        form.reset();
        navigatae("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  //handel update user name
  const userProfileUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile)
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((e) => {
        console.error(e);
      });
  };
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
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter Photo URL"
              className="input input-bordered"
              required
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
              required
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
              required
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              value="Register"
              className="glass mt-3 py-2 w-full cursor-pointer hover:bg-blue-500"
            />
          </div>
        </form>
        <button
          onClick={handelGoogleLogin}
          className="glass w-full mt-3 flex py-2 items-center justify-center hover:bg-green-500"
        >
          <AiOutlineGoogle className="mr-3 text-2xl"></AiOutlineGoogle>
          <span>Continue with Google</span>
        </button>
        <p className="mt-3">
          Already have an account? <Link to="/login" className="hover:text-blue-600">Login Now</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
