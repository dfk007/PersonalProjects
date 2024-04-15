import Image from "next/image";
import React, { useEffect } from "react";
import Area from "../../components/services/Area";
import Banner from "../../components/services/Banner";
import Role from "../../components/services/Role";
import Layout from "../../components/layouts/Article";
import Social from "../../components/services/Social";
import { setValue } from "../../redux/features/navbarReducer";
import { useDispatch } from "react-redux";

const Services = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "services", bool: true }));
  }, [dispatch]);

  return (
    <Layout title="Services">
      <Banner />
      <Role />
      <Area />
      <Social />
    </Layout>
  );
};

export default Services;
