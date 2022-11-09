import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  AiOutlineHighlight,
  AiOutlineCamera,
  AiOutlineUser,
  AiOutlineStar,
} from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const serviceDetails = useLoaderData();
  const { _id, title, img, price, description, facility } = serviceDetails;

  const reviewsurl = `http://localhost:5000/reviews?serviceId=${_id}`;

    fetch(reviewsurl)
      .then((res) => res.json())
      .then((data) => setReviews(data));

  const handelUserReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const userEmail = user?.email;
    const userReview = form.reviewTxt.value;

    const reviewMsg = {
      serviceId: _id,
      serviceName: title,
      servicePrice: price,
      serviceImg:img,
      userEmail: userEmail,
      customer: userName,
      userImg: userImg,
      reviewTxt: userReview,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewMsg),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Thanks For Your Review");
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <section>
      {/* package-details */}
      <form onSubmit={handelUserReview} className="package-details">
        {/* package details */}
        <div className="w-full rounded-3xl glass p-2 mt-20 mb-10">
          <h1 className="text-2xl font bold my-3 ml-3">
            <AiOutlineStar></AiOutlineStar>
            Package Details:
          </h1>
          <div className="flex">
            <div>
              <img src={img} alt="serviceCardImg" className="rounded-3xl" />
            </div>
            <div className="card-body w-full">
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
        {/* review section */}
        {user?.email ? (
          <div className="glass py-4 rounded-xl mt-5">
            <div className="mx-5 mb-5 flex items-center gap-3">
              <img src={user?.photoURL} alt="" className="h-12 rounded-full" />
              <p>{user?.displayName}</p>
            </div>
            <div className="form-control mx-5">
              <textarea
                className="textarea textarea-bordered rounded-xl h-48"
                name="reviewTxt"
                placeholder="Left Your Review"
                required
              ></textarea>
            </div>
            <div className="form-control mx-5">
              <input
                type="submit"
                value="Add Review"
                className="glass py-2 px-4 mt-3 rounded-3xl hover:bg-blue-600 w-fit"
              ></input>
            </div>
          </div>
        ) : (
          <div className="">
            <Link
              to="/login"
              className="hover:text-blue-600 glass px-4 py-2 rounded-3xl"
            >
              Please Login To Add a Review
            </Link>
          </div>
        )}
      </form>
      {/* reviews-details */}
      <Reviews reviews={reviews}></Reviews>
    </section>
  );
};

export default ServiceDetails;
