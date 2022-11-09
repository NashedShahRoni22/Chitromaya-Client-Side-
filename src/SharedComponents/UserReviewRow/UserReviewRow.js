import React from "react";

const UserReviewRow = ({ userReview }) => {
  const { serviceImg, serviceName, servicePrice, reviewTxt } = userReview;
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
    </tr>
  );
};

export default UserReviewRow;
