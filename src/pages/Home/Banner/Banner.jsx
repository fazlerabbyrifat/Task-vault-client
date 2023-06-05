import React from "react";
import banner from '../../../assets/banner.jpg'

const Banner = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl bg-white shadow-lg rounded-lg">
        <div className="md:flex gap-10">
          <div className="lg:w-1/2">
            <img
              src={banner}
              alt="Banner Image"
              className="h-full w-full"
            />
          </div>
          <div className="lg:w-1/2 p-6 flex flex-col justify-center ">
            <h1 className="text-2xl font-bold mb-4">Welcome to Task Vault</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              fringilla felis at lacus bibendum, a cursus erat placerat. Fusce
              lobortis nunc sed neque commodo, non pulvinar arcu posuere. Sed
              auctor velit a vestibulum feugiat.
            </p>
            <button className="btn btn-accent btn-outline w-1/3 mt-5">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
