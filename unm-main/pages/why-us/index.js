import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/layouts/Article";
import { setValue } from "../../redux/features/navbarReducer";
import Image from "next/image";
import Banner from "../../components/why-us/Banner";
import Demand from "../../components/why-us/Demand";
import Impression from "../../components/why-us/Impression";
import JobHunting from "../../components/why-us/JobHunting";
import Goals from "../../components/why-us/Goals";

const WhyUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "whyus", bool: true }));
  }, [dispatch]);

  return (
    <Layout title={"Why Us"}>
      <Banner />
      <Demand />
      <Impression />
      <JobHunting />
      <Goals />
    </Layout>
  );
};

export default WhyUs;
