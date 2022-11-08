import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import ReviewsRow from "../../SharedComponents/ReviewsRow/ReviewsRow";

const Reviews = ({ reviews }) => {
  return (
    <div className="all-reviews glass p-2 mt-10 rounded-2xl">
      <h1 className="text-2xl font bold my-3 ml-3">
        <AiOutlineStar></AiOutlineStar>
        Total Reviews: 0{reviews.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Message</th>
              <th>Package Name</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewsRow review={review}></ReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
