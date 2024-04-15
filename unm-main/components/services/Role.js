import Image from "next/image";
import React from "react";
import icon4 from "../../assets/services/4.png";

const Role = () => {
  return (
    <div className="container flex items-center flex-col justify-center relative py-32">
      <div className="mr-14 mb-8">
        <Image src={icon4} alt="icon" width={200} height={200} />
      </div>
      <div className="text-center absolute top-64">
        <h2 className="h2">Industry Players</h2>
        <p className="text-xs max-w-2xl">
          We handpick a writer with firsthand experience building
          industry-specific resumes based on your job goals. Our talented lot of
          resume experts have complete industry knowledge from major fields,
          like HR, FBT, Petroleum, Pharmaceuticals, Military, Mining, Farming,
          Manufacturing, Warehousing, and etc.
        </p>
      </div>
    </div>
  );
};

export default Role;
