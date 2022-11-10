import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../../SharedComponents/ServiceCard/ServiceCard";

const ServicePage = () => {
  useTitle("Services")
  const services = useLoaderData();
  return (
    <section>
      <h1 className="text-center mt-8 text-3xl">Our Packages</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 justify-center">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
