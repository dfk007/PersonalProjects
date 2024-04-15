import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getValue } from "../../redux/features/navbarReducer";

const NavItem = ({ title, path, name }) => {
  const router = useRouter();
  const click = useSelector(getValue);
  // console.log("NAvlink", click, name);
  const handleClick = () => {
    // setClick(click);
    router.push(path);
  };

  return (
    <div
      className={`text-base cursor-pointer py-1 px-4 text-center ${
        click.name === name && click.bool
          ? "text-blue-600 font-bold bg-[#F1F1F1] rounded-3xl"
          : " text-gray-500 font-light"
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default NavItem;
