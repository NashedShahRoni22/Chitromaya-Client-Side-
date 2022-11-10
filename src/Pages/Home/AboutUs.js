import React from "react";
import aboutImg from "../../Images/about-us.jpg";
import aboutImg2 from "../../Images/thumbnail (1).jpg";
import aboutImg3 from "../../Images/thumbnail (2).jpg";

const AboutUs = () => {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-20">About Us</h1>
      <div className="md:flex items-center mx-5 gap-4">
        <div className="w-full md:w-1/2 flex">
          <div>
            <img src={aboutImg} alt="" className="h-48 md:h-96" />
          </div>
          <div className="">
            <img src={aboutImg2} alt="" className="h-24 md:h-48" />
            <img src={aboutImg3} alt="" className="h-24 md:h-48" />
          </div>
        </div>
        <div className="w-full md:w-1/2 my-3">
          <div className="stats glass grid grid-cols-2">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Events</div>
              <div className="stat-value">1K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Clients</div>
              <div className="stat-value">200</div>
              <div className="stat-desc">↗︎ 50 (25%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Customer</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
