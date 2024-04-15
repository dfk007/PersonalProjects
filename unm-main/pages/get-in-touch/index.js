import React from "react";
import Layout from "../../components/layouts/Article";

const GetInTouch = () => {
  return (
    <Layout title="Get In Touch">
      <div className="bg-[#F1F1F1]">
        <div className="container space-y-10 lg:px-40 py-32">
          <h1 className="h1 font-extrabold">Get in touch</h1>
          <p className="text-color-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec
            elit pretium sit nulla. Porta nisl eget vel mattis lectus quisque
            urna et. Morbi duis morbi condimentum natoque dictum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense justify-center gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Your name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="bg-white p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Your email*</label>
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">
                Mobile Number*
              </label>
              <input
                type="number"
                placeholder="Enter mobile number"
                className="bg-white p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Comments</label>
              <input
                type="text"
                placeholder="Leave a comment"
                className="bg-white p-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-xs text-gray-500 md:max-w-xs">
              I would like to receive product information and promotional emails
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <button className="btn bg-blue-800 px-4 py-1 rounded-none text-white btn-outline-primary">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
