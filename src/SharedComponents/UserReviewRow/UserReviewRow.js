import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

const UserReviewRow = ({ userReview, handelreviewUpdate }) => {
  const { _id, serviceImg, serviceName, servicePrice, reviewTxt } = userReview;
  
  return (
    <tr>
      <td>
        <div className="w-24 h-24">
          <img src={serviceImg} alt="Service Img" className="w-24 h-24"/>
        </div>
      </td>
      <td>
        <div>
          <p className="font-bold text-xl">{serviceName}</p>
          <p className="text-sm opacity-50">{servicePrice} BDT</p>
        </div>
      </td>
      <td>
        {reviewTxt}
      </td>
      <td>
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" onClick={()=>handelreviewUpdate(_id)} className="btn btn-circle">
          <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <p className="font-bold">You Want to change your review?</p>
            <textarea
              className="textarea textarea-primary w-full mt-5"
              placeholder="New Review"
            ></textarea>
            <br />
            <input 
            type="submit" 
            value="Update" 
            className="glass px-4 py-2" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UserReviewRow;
