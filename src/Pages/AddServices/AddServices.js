import React from "react";
import toast from "react-hot-toast";

const AddServices = () => {
  const handelAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const imgURL = form.imgURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const totalPhotographer = form.totalPhotographer.value;
    const durationTime = form.durationTime.value;
    const hardCopy = form.hardCopy.value;

    const newService = {
      service_id: Math.random(),
      title:  title ,
      img: imgURL ,
      price:  price ,
      description:  description ,
      facility: [
        {
          name: "Senior Photographer & Cinematographer",
          details:  totalPhotographer ,
        },
        {
          name: "Duration",
          details:  durationTime ,
        },
        {
          name: "Unlimited Pictures",
          details: "(All Post Processed)",
        },
        {
          name: "Hard Copy",
          details: `4R (4”X6″) Matte Prints ${hardCopy} Copies`,
        },
        {
          name: "Soft Copy",
          details:
            "All Soft Copy Of Photos Will Be Delivered On The Google Drive",
        },
      ],
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("New Services Added!");
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <section className="glass p-2 my-10 rounded-2xl">
      <h1 className="font-bold text-2xl text-center my-10">
        Add A New Service
      </h1>

      <form onSubmit={handelAddProduct} className="mx-5">
        {/* services details  */}
        <h5 className="text-2xl my-3">Services Details</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imgURL"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* facility details  */}
        <h5 className="text-2xl my-3">Facilities</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Total Photographer</span>
            </label>
            <input
              type="number"
              name="totalPhotographer"
              placeholder="Photographer Quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Duration Time</span>
            </label>
            <input
              type="number"
              name="durationTime"
              placeholder="Duration Time in Hours"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Hard Copy</span>
            </label>
            <input
              type="number"
              name="hardCopy"
              placeholder="Total Copy in Numbers"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full h-48"
            required
          />
        </div>
        <input
          type="submit"
          className="glass px-8 py-2 rounded-2xl my-5 cursor-pointer hover:bg-blue-600"
          value="Add"
        />
      </form>
    </section>
  );
};

export default AddServices;
