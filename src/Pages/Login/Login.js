import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../Images/login.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { createGoogleUser, loginUser } = useContext(AuthContext);
  //handel Google login
  const handelGoogleLogin = () => {
    createGoogleUser()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success('Google Login Successfull!');
      })
      .catch((e) => console.error(e));
  };
  //handel user login
  const handelUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
    .then(userCredential =>{
      const user = userCredential.user;
      console.log(user);
      toast.success("Login Successfull!");
      form.reset();
    })
    .catch(error=>{
      const errorMessage = error.message;
      toast.error(errorMessage);
    })
  };
  return (
    <section className="grid md:grid-cols-2 py-20 items-center">
      <div className="hidden md:block">
        <img src={loginBanner} alt="" />
      </div>
      <div className="mx-5">
        <form onSubmit={handelUserLogin}>
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
              className="glass py-2 mt-3 w-full hover:bg-blue-500 cursor-pointer"
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
          New Here ? <Link to="/register" className="hover:text-blue-600">Register Now</Link>
        </p>
        
      </div>
    </section>
  );
};

export default Login;
