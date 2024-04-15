import Image from "next/image";
import React from "react";
import icon1 from "../../assets/footer/1.png";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-[#003C80] relative z-10">
      <div className="container lg:px-40 py-20 flex justify-between flex-col-reverse md:flex-row">
        <div className="max-w-lg">
          <h2 className="text-white font-bold h2">
            Get your resume reviewed today
          </h2>
          <button
            className="btn bg-blue-800 rounded-3xl px-4 py-2 my-5 text-white btn-outline-primary"
            onClick={() => router.push("/get-in-touch")}
          >
            Get in touch
          </button>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="space-y-5 mt-8 text-[12px] uppercase text-gray-300">
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Company
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                About Unmatched Resumes
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Our Services
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Why Us
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                How It Works
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Resume Writing Packages
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Sample Resumes
              </p>
            </div>
            <div className="space-y-5 mt-8 text-[12px] uppercase text-gray-300">
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Quick Links
              </p>
              <p
                className="hover:underline underline-offset-1 cursor-pointer"
                onClick={() => router.push("/careers")}
              >
                Careers
              </p>
              <p className="hover:underline underline-offset-1 cursor-pointer">
                Frequently Asked Questions
              </p>
              <p
                className="hover:underline underline-offset-1 cursor-pointer"
                onClick={() => router.push("/terms-and-conditions")}
              >
                Terms & Conditions
              </p>
              <p
                className="hover:underline underline-offset-1 cursor-pointer"
                onClick={() => router.push("/privacy-policy")}
              >
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Image src={icon1} alt="icon" width={100} height={50} />
          <div className="flex flex-wrap gap-3 mt-10 text-[#003C80]">
            <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-400">
              <AiOutlineInstagram size={20} />
            </div>
            <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-400">
              <FaFacebookF size={20} />
            </div>
            <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-400">
              <BsTwitter size={20} />
            </div>
            <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-blue-400">
              <BsWhatsapp size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
