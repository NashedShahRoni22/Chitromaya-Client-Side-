import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../Images/register.png'

const Register = () => {
    const handelUserRegistration = () => {};
    return (
        <section className="grid md:grid-cols-2 py-20 items-center">
      <div className="hidden md:block">
        <img src={registerImg} alt="" />
      </div>
      <form onSubmit={handelUserRegistration} className="mx-5">
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
            className="btn glass mt-3 w-full"
          />
        </div>
       <p className="mt-3">Already have an account? <Link to='/login'>Login Now</Link></p> 
      </form>
    </section>
    );
};

export default Register;