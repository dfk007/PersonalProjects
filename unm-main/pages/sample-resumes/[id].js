import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/features/navbarReducer";
import SampleResumeLayout from "../../components/layouts/SampleResume";
import Image from "next/image";
import server from "../../api/server";
import { useRouter } from "next/router";
import SampleShimmer from "../../components/shimmer/SampleShimmer";
import LoaderModal from "../../components/modal/LoaderModal";

const SampleResumes = () => {
  // console.log(data);
  const router = useRouter();
  const num = parseInt(router.query.id);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await server.get("/sample");
      setData(res.data);
      setLoading(false);
      // console.log("Response: ", res);
    })();
  }, []);

  useEffect(() => {
    dispatch(setValue({ name: "sampleresumes", bool: true }));
  }, [dispatch]);

  if (loading) {
    return <LoaderModal />;
  }

  return (
    <SampleResumeLayout data={data}>
      {/* {!data && <p>Loading</p>} */}
      {data && (
        <div className="container lg:pr-72 space-y-6">
          <div className="lg:relative left-8 space-y-6">
            <h1 className="h1 font-bold">{data[num - 1]?.title}</h1>
            <p className="text-lg">{data[num - 1]?.description}</p>
          </div>
          <div className="">
            <Image
              src={data[num - 1]?.imageUrl}
              alt="resume"
              height={1000}
              width={800}
              priority
            />
          </div>
        </div>
      )}
    </SampleResumeLayout>
  );
};

export default SampleResumes;

// export async function getServerSideProps(context) {
//   const res = await axios.get("/sample");
//   // console.log("response", res);
//   return {
//     props: {
//       data: res.data,
//     },
//   };
// }
