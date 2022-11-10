import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserReviewRow from "../../SharedComponents/UserReviewRow/UserReviewRow";
import { AiOutlineCamera } from "react-icons/ai";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const UserReviews = () => {
  useTitle("My Reviews")
  const { user, logOut } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);
  const userReviewsurl = `https://chitromaya-server.vercel.app/userReviews?userEmail=${user?.email}`;

  useEffect(() => {
    fetch(userReviewsurl, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ChitromayaUserToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut()
            .then(() => {
              toast.error("Please login!");
            })
            .catch((e) => {});
        }
        return res.json();
      })
      .then((data) => {
        setUserReviews(data);
      });
  }, [userReviewsurl, logOut]);

  // const handelreviewUpdate =(id)=>{
  //   console.log(id);
  // }

  return (
    <div className="glass p-8 my-10 rounded-2xl">
      <h1 className="text-2xl">My Reviews: 0{userReviews?.length}</h1>
      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <AiOutlineCamera className="text-2xl"></AiOutlineCamera>
              </th>
              <th>Service</th>
              <th>Message</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {userReviews?.map((userReview) => (
              <UserReviewRow
                key={userReview._id}
                userReview={userReview}
                // handelreviewUpdate={handelreviewUpdate}
              ></UserReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReviews;
