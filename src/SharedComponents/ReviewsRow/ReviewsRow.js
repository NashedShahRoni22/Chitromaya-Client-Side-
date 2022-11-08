import React from "react";

const ReviewsRow = ({review}) => {
    const {userImg, customer, userEmail,reviewTxt,serviceName} = review;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={userImg}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <p className="font-bold">{customer}</p>
            <p className="text-sm opacity-50">{userEmail}</p>
          </div>
        </div>
      </td>
      <td>
        {reviewTxt}
      </td>
      <td>{serviceName}</td>
    </tr>
  );
};

export default ReviewsRow;
