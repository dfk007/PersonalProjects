import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/layouts/Article";
import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Careers = () => {
  return (
    <Layout>
      <div className="bg-blue-600 text-white lg:px-40 py-20">
        <div className="container space-y-3">
          <h2 className="h2 font-bold">Careers</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec
            elit pretium sit nulla. Porta nisl eget vel mattis lectus quisque
            urna et. Morbi duis morbi condimentum natoque dictum.
          </p>
          <div className="max-w-xl flex flex-col md:flex-row gap-2 justify-between md:items-center bg-[#164174] p-1 rounded-3xl mt-5">
            <div className="flex-grow flex gap-2 flex-col md:flex-row  justify-around md:items-center py-2 mdLpy-0">
              <div className="flex gap-2 items-center ml-3">
                <BsSearch size={25} className="text-gray-300" />
                <input
                  type="text"
                  placeholder="Search Title"
                  className="flex bg-transparent p-1 flex-grow border-none outline-none text-sm w-full"
                />
              </div>
              <div className="bg-gray-300 h-[1px] w-full md:w-[1px] md:h-8" />
              <div>
                <div className="flex gap-2 items-center ml-3">
                  <IoLocationOutline size={25} className="text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search Location"
                    className="flex bg-transparent p-1 flex-grow border-none outline-none text-sm w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="bg-white text-black text-sm px-5 py-2.5 rounded-3xl w-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* .... */}
      <div className="lg:px-40 py-20 bg-white">
        <div className="container space-y-6">
          <div className="bg-[#F6f6f6] p-8 rounded-3xl space-y-6">
            <div className="">
              <p className="font-semibold">Senior UI Designer</p>
              <p className="text-xs mt-1">Fulltime</p>
            </div>
            <div className="text-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo faucibus nulla congue ultricies lorem est. Nam vitae
                faucibus aenean adipiscing mauris a tempus, velit. Euismod mi in
                malesuada velit sit diam ultricies. Volutpat sit semper turpis
                fames. Turpis blandit dolor platea odio. Felis suspendisse vel
                et suspendisse tortor. Sit ultrices in volutpat aliquam donec
                velit sit enim. Morbi sagittis, adipiscing suspendisse ornare
                sed et. Ultrices non eu libero, blandit ullamcorper eget duis
                quis. Nec sit blandit ornare tortor a. Justo euismod volutpat
                euismod scelerisque dignissim auctor ut. Tellus et, nisl, justo
                ridiculus tellus penatibus porttitor
              </p>
            </div>
            <div>
              <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary">
                Apply Now
              </button>
            </div>
          </div>
          <div className="bg-[#F6f6f6] p-8 rounded-3xl space-y-6">
            <div className="">
              <p className="font-semibold">Senior UI Designer</p>
              <p className="text-xs mt-1">Fulltime</p>
            </div>
            <div className="text-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo faucibus nulla congue ultricies lorem est. Nam vitae
                faucibus aenean adipiscing mauris a tempus, velit. Euismod mi in
                malesuada velit sit diam ultricies. Volutpat sit semper turpis
                fames. Turpis blandit dolor platea odio. Felis suspendisse vel
                et suspendisse tortor. Sit ultrices in volutpat aliquam donec
                velit sit enim. Morbi sagittis, adipiscing suspendisse ornare
                sed et. Ultrices non eu libero, blandit ullamcorper eget duis
                quis. Nec sit blandit ornare tortor a. Justo euismod volutpat
                euismod scelerisque dignissim auctor ut. Tellus et, nisl, justo
                ridiculus tellus penatibus porttitor
              </p>
            </div>
            <div>
              <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary">
                Apply Now
              </button>
            </div>
          </div>
          <div className="bg-[#F6f6f6] p-8 rounded-3xl space-y-6">
            <div className="">
              <p className="font-semibold">Senior UI Designer</p>
              <p className="text-xs mt-1">Fulltime</p>
            </div>
            <div className="text-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                commodo faucibus nulla congue ultricies lorem est. Nam vitae
                faucibus aenean adipiscing mauris a tempus, velit. Euismod mi in
                malesuada velit sit diam ultricies. Volutpat sit semper turpis
                fames. Turpis blandit dolor platea odio. Felis suspendisse vel
                et suspendisse tortor. Sit ultrices in volutpat aliquam donec
                velit sit enim. Morbi sagittis, adipiscing suspendisse ornare
                sed et. Ultrices non eu libero, blandit ullamcorper eget duis
                quis. Nec sit blandit ornare tortor a. Justo euismod volutpat
                euismod scelerisque dignissim auctor ut. Tellus et, nisl, justo
                ridiculus tellus penatibus porttitor
              </p>
            </div>
            <div>
              <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
