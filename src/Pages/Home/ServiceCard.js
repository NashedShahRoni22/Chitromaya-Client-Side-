import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({service}) => {
    const {title, img, description, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <h3>{price} BDT</h3>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-circle hover:bg-slate-600">
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
