import Image from "next/image";
import React from "react";

const PricingItem = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-2">
      <Image src={icon} alt="icon" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default PricingItem;
