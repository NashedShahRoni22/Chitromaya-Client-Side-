import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  AiOutlineHighlight,
  AiOutlineCamera,
  AiOutlineUser,
} from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  const { title, img, price, description, facility } = serviceDetails;
  return (
    <section>
      {/* package details */}
      <div className="w-full rounded-3xl glass p-2 mt-20 mb-10">
        <div className="flex">
          <div>
            <img src={img} alt="serviceCardImg" className="rounded-3xl" />
          </div>
          <div className="card-body">
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
              placeholder="Message"
            ></textarea>
          </div>
          <button className="glass ml-5 py-2 px-4 mt-3 rounded-3xl hover:bg-blue-600">Add Comment</button>
        </div>
      ) : (
        <div className="">
          <Link
            to="/login"
            className="hover:text-blue-600 text-xl glass px-4 py-2 rounded-3xl"
          >
            Please login to add a review
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServiceDetails;
