import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../SharedComponents/ServiceCard/ServiceCard";

const ServicePage = () => {
  const services = useLoaderData();
  return (
    <section>
      <h1 className="text-center mt-8 text-3xl">Our Packages</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
