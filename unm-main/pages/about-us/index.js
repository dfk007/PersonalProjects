import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/layouts/Article";
import { setValue } from "../../redux/features/navbarReducer";

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "aboutus", bool: true }));
  }, [dispatch]);

  const str = "About Us";

  return (
    <Layout title={str}>
      <div className="bg-[url('../assets/about-us/1.png')] w-screen h-screen opacity-25 absolute z-0" />
      <div className="py-40 lg:px-40">
        <div className="container space-y-8 flex flex-col justify-center">
          <h1 className="h1 text-[#003C80] font-extrabold">About Us</h1>
          <div className="space-y-5">
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              malesuada sit lobortis tellus et. Morbi in iaculis sit lacinia
              sed. Sit morbi at molestie commodo malesuada. Orci posuere erat
              libero in hendrerit laoreet. Amet amet, posuere tristique rhoncus
              amet, dignissim est sem nisl. Ac lobortis non, id pellentesque
              maecenas sed laoreet id.
            </p>
            <p className="text-xs">
              Volutpat, lectus consectetur sed euismod. Sit habitant aenean quam
              consequat in et. Eget sodales porttitor vitae, id donec varius
              blandit velit ut. Morbi tincidunt nullam nulla id sagittis,
              vulputate vitae. Nulla justo neque pellentesque erat felis elit.
              In mollis id hendrerit quis leo felis. Et donec vestibulum morbi
              elit arcu bibendum. Iaculis morbi urna, tempor arcu, facilisis
              turpis egestas tellus blandit. Purus diam urna orci, sapien. Nunc
              magna posuere senectus purus dignissim.
            </p>
            <p className="text-xs">
              Dui amet, tellus suspendisse est lacus semper. Lacinia ac mattis
              fames condimentum et. Sed sed euismod amet amet. Augue mi felis
              vestibulum tellus metus convallis at fames posuere. Sem blandit
              nascetur adipiscing risus aenean erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
