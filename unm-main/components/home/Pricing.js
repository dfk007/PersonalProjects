import React from "react";
import PricingItem from "./PricingItem";
import icon11 from "../../assets/home/11.png";
import icon12 from "../../assets/home/12.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setPrice } from "../../redux/features/priceReducer";

const Pricing = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center py-12 bg-[#F6F6F6]">
      <h2 className="h2">Resume Writing Packages</h2>
      <p className="text-gray-400 max-w-2xl text-center mt-2 mb-4">
        Our pool of resume experts enliven your career highlights and expand
        your job reach. We reflect on your stellar track- record and vital
        contributions to showcase a powerful resume that stands out.
      </p>
      <div className="flex items-center flex-wrap gap-3 justify-center">
        <div className="bg-white p-4 space-y-5 max-w-xs transform hover:scale-105 transition ease-in-out cursor-pointer hover:border-[1px] hover:border-blue-800 rounded">
          <h4 className="h4 font-bold">Starter Package</h4>
          <p className="text-xs text-gray-400">
            The essential application documents to jump start your job search.
          </p>
          <h1 className="h1 font-bold">$43O</h1>
          <button
            className="btn bg-blue-800 font-bold rounded-3xl px-4 py-2 text-white btn-outline-primary"
            onClick={() => {
              dispatch(
                setPrice({
                  price: "430",
                  package: "Starter Package",
                })
              );
              router.push("/checkout");
            }}
          >
            Buy Now
          </button>
          <div className="space-y-3">
            <PricingItem icon={icon11} title="Resume" />
            <PricingItem icon={icon11} title="Cover Letter" />
            <PricingItem icon={icon12} title="LinkedIn Recommendations" />
            <PricingItem icon={icon12} title="Digital Guide" />
            <PricingItem icon={icon12} title="Second Resume Design" />
          </div>
        </div>
        <div className="bg-white p-4 space-y-5 max-w-xs hover:scale-105 transition ease-in-out cursor-pointer hover:border-[1px] hover:border-blue-800 rounded">
          <h4 className="h4 font-bold">Advanced Package</h4>
          <p className="text-xs text-gray-400">
            Improve your digital presence to start getting noticed by recruiters
            online. The essential application documents to jump start your job
            search.
          </p>
          <h1 className="h1 font-bold">$549</h1>
          <button
            className="btn bg-blue-800 font-bold rounded-3xl px-4 py-2 text-white btn-outline-primary "
            onClick={() => {
              dispatch(
                setPrice({
                  price: "549",
                  package: "Advanced Package",
                })
              );
              router.push("/checkout");
            }}
          >
            Buy Now
          </button>
          <div className="space-y-3">
            <PricingItem icon={icon11} title="Resume" />
            <PricingItem icon={icon11} title="Cover Letter" />
            <PricingItem icon={icon11} title="LinkedIn Recommendations" />
            <PricingItem icon={icon11} title="Digital Guide" />
            <PricingItem icon={icon12} title="Second Resume Design" />
          </div>
        </div>
        <div className="bg-white p-4 space-y-5 max-w-xs hover:scale-105 transition ease-in-out cursor-pointer hover:border-[1px] hover:border-blue-800 rounded">
          <h4 className="h4 font-bold">Premium Package</h4>
          <p className="text-xs text-gray-400">
            Revamp your entire personal brand with a LinkedIn makeover to get
            hired faster.
          </p>
          <h1 className="h1 font-bold">$689</h1>
          <button
            className="btn bg-blue-800 font-bold rounded-3xl px-4 py-2 text-white btn-outline-primary"
            onClick={() => {
              dispatch(
                setPrice({
                  price: "689",
                  package: "Premium Package",
                })
              );
              router.push("/checkout");
            }}
          >
            Buy Now
          </button>
          <div className="space-y-3">
            <PricingItem icon={icon11} title="Resume" />
            <PricingItem icon={icon11} title="Cover Letter" />
            <PricingItem icon={icon11} title="LinkedIn Recommendations" />
            <PricingItem icon={icon11} title="Digital Guide" />
            <PricingItem icon={icon11} title="Second Resume Design" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
