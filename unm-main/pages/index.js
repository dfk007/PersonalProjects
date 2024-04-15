import Layout from "../components/layouts/Article";
import Banner from "../components/home/Banner";
import Offers from "../components/home/Offers";
import Pricing from "../components/home/Pricing";
import Questions from "../components/home/Questions";
import Testimonial from "../components/home/Testimonial";
import {
  useDispatch
} from "react-redux";
import {
  setValue
} from "../redux/features/navbarReducer";
import {
  useEffect
} from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setValue({
        name: "home",
        bool: true,
      })
    );
  }, [dispatch]);

  return ( <
    Layout title = "Home" >
    <
    Banner / >
    <
    Offers / >
    <
    Testimonial / >
    <
    Pricing / >
    <
    Questions / >
    <
    /Layout>
  );
};

export default Home;