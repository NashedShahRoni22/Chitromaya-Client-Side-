import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserReviewRow from "../../SharedComponents/UserReviewRow/UserReviewRow";
import { AiOutlineCamera } from "react-icons/ai";

const UserReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);
  const userReviewsurl = `http://localhost:5000/userReviews?userEmail=${user?.email}`;

  fetch(userReviewsurl)
    .then((res) => res.json())
    .then((data) => setUserReviews(data));

  return (
    <div className="glass p-8 my-10 rounded-2xl">
      <h1 className="font-bold text-2xl">My Reviews {userReviews.length}</h1>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
              </th>
              <th>Service</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((userReview) => (
              <UserReviewRow
                key={userReview._id}
                userReview={userReview}
              ></UserReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReviews;
