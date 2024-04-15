import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../components/how-it-works/Banner";
import Layout from "../../components/layouts/Article";
import { setValue } from "../../redux/features/navbarReducer";
import Image from "next/image";
import Tiles from "../../components/how-it-works/Tiles";

const HowItWorks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "howitworks", bool: true }));
  }, [dispatch]);

  return (
    <Layout title={"How It Works"}>
      <Banner />
      <Tiles />
    </Layout>
  );
};

export default HowItWorks;
