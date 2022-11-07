import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard';

const ServicePage = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default ServicePage;