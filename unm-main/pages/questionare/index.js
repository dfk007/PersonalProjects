import React from "react";
import Layout from "../../components/layouts/Article";

const Questionare = () => {
  return (
    <Layout title="Questionare">
      <div className="bg-[#F1F1F1]">
        <div className="container space-y-10 lg:px-40 py-32">
          <h1 className="h1 font-extrabold">Questionare</h1>
          <p className="text-color-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec
            elit pretium sit nulla. Porta nisl eget vel mattis lectus quisque
            urna et. Morbi duis morbi condimentum natoque dictum.
          </p>
          <div className="space-y-3">
            <h6 className="font-bold">
              Contact Information, Needs, Directions
            </h6>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <h6 className="font-bold mb-0.5">Question 01</h6>
                <p className="mb-2 text-sm">
                  Did you review and do you understand the instructions above?
                </p>
                <div className="flex gap-1">
                  <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary px-4 py-2">
                    Yes
                  </button>
                  <button className="btn bg-[#f6f6f6] rounded-3xl text-blue-800 text-xs btn-outline-light  px-4 py-2">
                    No
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <h6 className="font-bold mb-0.5">Question 02</h6>
                <p className="mb-2 text-sm">
                  Did you review and do you understand the instructions above?
                </p>
                <div className="flex gap-1">
                  <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary px-4 py-2">
                    Yes
                  </button>
                  <button className="btn bg-[#f6f6f6] rounded-3xl text-blue-800 text-xs btn-outline-light  px-4 py-2">
                    No
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <h6 className="font-bold mb-0.5">Question 03</h6>
                <p className="mb-2 text-sm">
                  Did you review and do you understand the instructions above?
                </p>
                <div className="flex gap-1">
                  <button className="btn bg-blue-800 rounded-3xl text-white text-xs btn-outline-primary px-4 py-2">
                    Yes
                  </button>
                  <button className="btn bg-[#f6f6f6] rounded-3xl text-blue-800 text-xs btn-outline-light  px-4 py-2">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Questionare;
