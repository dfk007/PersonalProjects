import React from "react";
import Image from "next/image";
import icon15 from "../../assets/home/15.png";
import { AiFillStar } from "react-icons/ai";

const TestimonialItem = () => {
  return (
    <div className="bg-white max-w-lg mx-auto grid grid-cols-1 grid-flow-row-dense md:flex gap-3 p-4 rounded shadow">
      <div className="mx-auto md:w-40">
        <Image src={icon15} alt="icon" width={100} height={100} />
      </div>
      <div className="space-y-4">
        <div className="space-y-1">
          <h1 className="h3 m-0">Agnes Remi</h1>
          <p className="text-gray-400 text-sm">Back-end developer at MyDodow</p>
        </div>
        <p className="text-sm">
          Dico is finally addressing a long time problem we had when building
          UIs. It’s ease of use and workflow seems really intuitive. Promising!
        </p>
        <div className="flex gap-2">
          <AiFillStar color="#FFA300" />
          <AiFillStar color="#FFA300" />
          <AiFillStar color="#FFA300" />
          <AiFillStar color="#FFA300" />
          <AiFillStar color="#FFA300" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
