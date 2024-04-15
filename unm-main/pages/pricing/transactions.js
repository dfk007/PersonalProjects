import React from "react";
import Layout from "../../components/layouts/Article";

const Transactions = () => {
  return (
    <Layout title={"Transactions"}>
      <div className="bg-[#E5E5E5] lg:px-40 py-20 text-gray-500">
        <div className="container text-sm grid grid-cols-1 grid-flow-row-dense mx-auto max-w-2xl">
          <div className="bg-white space-y-6 p-5 rounded ">
            <div className="space-y-3">
              <p>Hello Robin van Persie 👋</p>
              <p>
                Thank you for your purchase! We’ve received your order, we will
                notify you when it has been sent.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Order details:</p>
              <p>No. Invoice: INV/20220403/NTL/75686059</p>
            </div>
            <div className="space-y-3">
              <div className="d-flex justify-between">
                <p className="font-semibold">Product Name</p>
                <p className="">$2,200</p>
              </div>
              <p>Size: Medium - Qty: x1</p>
            </div>
            <div>
              <div className="py-4 space-y-3 border-t-[1px] border-gray-300">
                <div className="d-flex justify-between">
                  <p className="">Subtotal</p>
                  <p className="font-semibold">$2,200</p>
                </div>
                <div className="d-flex justify-between">
                  <p className="">Discount</p>
                  <p className="font-semibold">$0</p>
                </div>
                <div className="d-flex justify-between">
                  <p className="">Tax (5%)</p>
                  <p className="font-semibold">$50</p>
                </div>
                <div className="d-flex justify-between">
                  <p className="font-semibold">Total</p>
                  <p className="font-semibold">$50</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-evenly gap-2 my-3">
                <button className="btn flex w-full text-center bg-white rounded-full text-blue-800 border-[1px] hover:text-blue-800 border-blue-800 text-sm md:text-lg btn-outline-primary">
                  <p className="mx-auto font-bold my-2 whitespace-nowrap">
                    Downlaod Receipt
                  </p>
                </button>
                <button className="btn flex w-full text-center bg-blue-800 rounded-full text-white text-sm md:text-lg btn-outline-primary">
                  <p className="mx-auto font-bold my-2 whitespace-nowrap">
                    Buy Another Package
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="my-20 space-y-8">
            <p>
              Questions or faq? Contact us at sample@email.com. If you&apos;d
              rather not receive this kind of email, Don’t want any more emails
              from Unmatched Resumes? Unsubscribe.
            </p>
            <div>
              <p>100 Smith Street, Melbourne VIC 3000</p>
              <p>© 2022 Unmatched Resumes</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
