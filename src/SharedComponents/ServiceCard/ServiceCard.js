import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, description, price } = service;
  return (
    <div className="card w-96 glass rounded-3xl">
      <figure>
        <img src={img} alt="serviceCardImg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3>{price} BDT</h3>
        <p>{description.slice(0,100)}...<Link to={`/services/${_id}`}>Read More</Link></p>
        <div className="card-actions justify-end mt-5">
          <Link to={`/services/${_id}`}>
            <button className="btn glass btn-circle">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
