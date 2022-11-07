import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesThree")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <h1 className="text-center my-16 text-xl">Choose Your Desire Package</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn btn-secondary my-8">
        <Link to='/services'>Show All</Link>
      </button>
    </section>
  );
};

export default ServicesContainer;
