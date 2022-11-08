import React from "react";
import aboutImg from "../../Images/about-us.jpg";
import aboutImg2 from "../../Images/thumbnail (1).jpg";
import aboutImg3 from "../../Images/thumbnail (2).jpg";

const AboutUs = () => {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-20">About Us</h1>
      <div className="md:flex items-center mx-5">
        <div className="w-full md:w-1/2 flex">
          <div>
            <img src={aboutImg} alt="" className="h-48 md:h-96" />
          </div>
          <div className="md:block">
            <img src={aboutImg2} alt="" className="h-24 md:h-48" />
            <img src={aboutImg3} alt="" className="h-24 md:h-48" />
          </div>
        </div>
        <div className="w-full md:w-1/2 m-5">
          <p className="text-2xl mt-3">
            We learned early on in my photography career that I didn't need to
            travel the world to capture great photos. My most interesting shots
            are those of unnoticed corners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
