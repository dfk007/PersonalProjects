import { useRouter } from "next/router";
import React from "react";

const SampleItem = ({ resume, id }) => {
  const router = useRouter();
  const _id = parseInt(router.query.id);

  return (
    <div
      className={`lg:pl-20 border-b py-4 text-lg ${
        id === _id - 1 && "bg-blue-600"
      } hover:opacity-60 cursor-pointer flex items-center justify-center`}
      onClick={() => router.push(`/sample-resumes/${id + 1}`)}
    >
      <p className={`text-center ${id === _id - 1 && "text-white"}`}>
        {resume.title}
      </p>
    </div>
  );
};

export default SampleItem;
