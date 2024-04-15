import React, { useEffect } from "react";
import Layout from "../../components/layouts/Article";
import Price from "../../components/home/Pricing";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/features/navbarReducer";

const Pricing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "pricing", bool: true }));
  }, [dispatch]);

  return (
    <Layout title="Pricing">
      <div className="bg-[#F6F6F6] py-10">
        <Price />
      </div>
    </Layout>
  );
};

export default Pricing;
