import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/navbar/Logo.png";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg bg-white sticky top-0 z-20 shadow py-3">
      <div className="container lg:px-24">
        <div className="navbar-brand">
          <div className="flex-1">
            <Image src={logo} alt="Logo" width={90} height={40} />
          </div>
        </div>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse lg:flex lg:justify-end"
          id="navbarSupportedContent"
        >
          <div className="navbar-nav mb-2 mb-lg-0 flex items-center">
            <NavItem title="Home" path="/" name="home" />
            <NavItem title="Services" path="/services" name="services" />
            <NavItem title="Why Us" path="/why-us" name="whyus" />
            <NavItem
              title="How It Works"
              path="/how-it-works"
              name="howitworks"
            />
            <NavItem
              title="Sample Resumes"
              path="/sample-resumes/1"
              name="sampleresumes"
            />
            <NavItem title="Pricing" path="/pricing" name="pricing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
