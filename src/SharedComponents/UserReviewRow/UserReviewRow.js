import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserReviewRow = ({ userReview }) => {
  const { _id, serviceImg, serviceName, servicePrice, reviewTxt } = userReview;
  return (
    <tr>
      <td>
        <div className="w-24 h-24">
          <img src={serviceImg} alt="Service Img" />
        </div>
      </td>
      <td>
        <div>
          <p className="font-bold text-xl">{serviceName}</p>
          <p className="text-sm opacity-50">{servicePrice} BDT</p>
        </div>
      </td>
      <td>{reviewTxt}</td>
      <td>
        <Link to={`/editReview/${_id}`}>
          <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
        </Link>
      </td>
    </tr>
  );
};

export default UserReviewRow;
