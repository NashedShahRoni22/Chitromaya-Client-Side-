import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineHighlight, AiOutlineCamera, AiOutlineUser } from "react-icons/ai";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, img, price, description, facility } = serviceDetails;
  return (
    <div className="w-full rounded-3xl glass p-2 my-20">
      <div className="flex">
        <div>
          <img src={img} alt="serviceCardImg" className="rounded-3xl" />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            <AiOutlineHighlight className="text-4xl"></AiOutlineHighlight>
            {title}
          </h2>
          <h3>{price} BDT</h3>
          <p>{description}</p>
          <ul></ul>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="flex">
                    <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
                  </th>
                  <th>
                    <AiOutlineUser className="text-2xl"></AiOutlineUser>
                  </th>
                </tr>
              </thead>
              <tbody>
                {facility.map((fac) => (
                  <tr>
                    <td>{fac.name}</td>
                    <td>{fac.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
