import React from "react";
import stayImg from "../../Images/stayImg.jpg";
import {
  MdOutlineLocationOn,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

const StayInTouch = () => {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-20">Stay In Touch</h1>
      <div className="md:flex items-center">
        <div className="md:w-1/2 mt-3">
          <h5 className="mt-3 flex items-center">
            <MdOutlineLocationOn className="text-4xl mr-3"></MdOutlineLocationOn>
            <span className="text-xl">
              543, Ecb Chattar, High Dream Palace, Dhaka 1206.
            </span>
          </h5>
          <h5 className="mt-3 flex items-center">
            <MdOutlineEmail className="text-4xl mr-3"></MdOutlineEmail>
            <span className="text-xl">info@chitromaya.com</span>
          </h5>
          <h5 className="mt-3 flex items-center">
            <MdOutlinePhone className="text-4xl mr-3"></MdOutlinePhone>
            <span className="text-xl">01318214398</span>
          </h5>
        </div>

        <div className="md:w-1/2">
          <img src={stayImg} alt="" className="md:h-96 rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
