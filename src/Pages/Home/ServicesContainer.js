import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../SharedComponents/ServiceCard/ServiceCard";
import { AiFillEye } from "react-icons/ai";

const ServicesContainer = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/servicesThree")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <h1 className="text-center my-16 text-4xl">Choose Your Desire Package</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn glass mt-8 btn-circle">
        <Link to="/services">
          <AiFillEye className="text-3xl"></AiFillEye>
        </Link>
      </button>
    </section>
  );
};

export default ServicesContainer;
