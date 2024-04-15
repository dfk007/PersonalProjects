import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/layouts/Article";

const OnBoarding = () => {
  const router = useRouter();

  return (
    <Layout className="On Boading">
      <div className="bg-[#E5E5E5] lg:px-40 py-20 text-gray-500">
        <div className="container bg-white space-y-6 p-5 rounded text-sm grid grid-cols-1 grid-flow-row-dense mx-auto max-w-2xl">
          <h3 className="h3 font-bold text-black">
            Welcome to Unmatched Resumes!
          </h3>
          <div className="space-y-3">
            <p>Hi Alex,</p>
            <p>
              We’re excited to welcome you to Unmatched Resumes and we’re even
              more excited about what we’ve got planned. You’re already on your
              way to creating beautiful visual products.
            </p>
            <p>
              Whether you’re here for your brand, for a cause, or just for fun —
              welcome! If there’s anything you need, we’ll be here every step of
              the way.
            </p>
            <div>
              <p>Thanks,</p>
              <p>Unmatched Resumes Team</p>
            </div>
            <div className="mt-5">
              <button
                className="btn text-center bg-blue-600 rounded-full text-white text-sm btn-outline-primary"
                onClick={() => router.push("/")}
              >
                <p className="mx-3 font-bold my-2 whitespace-nowrap">
                  Let’s Get Started
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OnBoarding;
