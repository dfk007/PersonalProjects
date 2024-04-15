import React, { useEffect, useState } from "react";
import SampleItem from "../sample-resumes/SampleItem";
import { RiArrowDropDownFill } from "react-icons/ri";
import Layout from "./Article";
import axios from "../../api/server";

const SampleResume = ({ children, data }) => {
  const [click, setClick] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get("/sample").then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <Layout title="Sample Resumes">
      <div className="bg-[#E5E5E5]">
        <h6 className="container tracking-widest h5 font-bold lg:px-40 py-14">
          Sample Resumes
        </h6>
        <div className="container lg:hidden ">
          <div
            className="p-2 bg-white cursor-pointer px-10 flex items-center justify-between rounded-lg shadow hover:border-[2px] border-blue-500 hover:scale-105 transition ease-in-out mb-10"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setClick(!click)}
          >
            <p className="font-bold">Resumes</p>
            <RiArrowDropDownFill size={30} />
          </div>
          <div id="collapseExample" className="bg-white collapse rounded my-5">
            {data?.map((resume, i) => (
              <SampleItem key={i} resume={resume} id={i} />
            ))}
          </div>
        </div>
        <div className="lg:flex gap-10">
          <div className="bg-white hidden h-fit lg:flex flex-col lg:flex-[2]">
            {data?.map((resume, i) => (
              <SampleItem key={i} resume={resume} id={i} />
            ))}
          </div>
          <div className="lg:flex-[3]">{children}</div>
        </div>
        <div className="py-16" />
      </div>
    </Layout>
  );
};

export default SampleResume;
