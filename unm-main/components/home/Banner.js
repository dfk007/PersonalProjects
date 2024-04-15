import Image from "next/image";
import React, { useRef, useState } from "react";
import upload from "../../assets/home/2.png";
import frame1 from "../../assets/home/3.png";
import frame2 from "../../assets/home/4.png";
import frame3 from "../../assets/home/5.png";
import frame4 from "../../assets/home/6.png";
import { storage } from "../../utils/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import CircleLoader from "react-spinners/CircleLoader";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import logo from "../../assets/navbar/Logo.png";
import server from "../../api/server";
import { useRouter } from "next/router";
import LoaderModal from "../modal/LoaderModal";

const Banner = () => {
  const inputFileRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [inp, setInp] = useState("");
  const [file, setFile] = useState();
  const [id, setId] = useState("");
  const [error, setError] = useState(false);

  const onFileChange = async (e) => {
    // console.log(e.target.files[0]);
    // const file = e.target.files[0];
    setFile(e.target.files[0]);

    if (e.target.files[0]) {
      const toastEmail = document.getElementById("emailToast");
      const tost = new bootstrap.Toast(toastEmail);
      tost.show();
    }
    e.target.value = null;
  };

  const handleSubmit = () => {
    if (!inp) {
      setError(true);
    } else {
      const toastEmail = document.getElementById("emailToast");
      const tost = new bootstrap.Toast(toastEmail);
      tost.hide();

      if (file?.name && inp) {
        const toastLiveExample = document.getElementById("alertToast");

        const storageRef = ref(storage, `files/${file.name}`);
        setLoading(true);

        try {
          uploadBytes(storageRef, file).then((snapshot) => {
            console.log("Uploaded a file!");
            // console.log(file, snapshot);
            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
              // console.log(downloadURL);

              await server
                .post("/critique", {
                  email: inp,
                  resumeUrl: downloadURL,
                })
                .then((res) => {
                  console.log(res);
                  setId(res.data._id);
                  setLoading(false);
                  setDone(true);
                  const toast = new bootstrap.Toast(toastLiveExample);
                  toast.show();
                });
            });
          });
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }
      setError(false);
    }
  };

  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  return (
    <>
      {loading && <LoaderModal />}
      <div className="bg-[url('../assets/home/1.png')] flex flex-col items-center py-28 relative -top-3">
        <h1 className="h1 text-white font-bold text-center">
          Be informed or stay unnoticed
        </h1>
        <p className="text-base text-white max-w-2xl text-center">
          The ‘dd’ experts are here to make a difference with the valuable
          insight they offer through resume critique.
        </p>
        {/* ------------ */}
        <div className="toast-container position-fixed top-20 end-0 p-3">
          <div
            id="alertToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <div className="me-auto">
                <Image src={logo} alt="Logo" width={60} height={20} />
              </div>
              <button
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body text-muted text-semibold">
              Thanks! We have received your resume. Kindly check your email.
            </div>
          </div>
        </div>
        <div className="toast-container position-fixed top-20 end-0 p-3">
          <div
            id="emailToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <div className="me-auto">
                <Image src={logo} alt="Logo" width={60} height={20} />
              </div>
              <button
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body text-muted text-semibold">
              <div className="flex flex-col gap-3">
                {error && (
                  <p className="text-danger text-semibold m-0">
                    Enter email first*
                  </p>
                )}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white p-2"
                  onChange={(e) => setInp(e.target.value)}
                  required
                />
                <button
                  className="btn px-4 text-sm py-1 rounded-[2px] text-white bg-blue-800 btn-outline-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* --------- */}
        <div className="flex flex-col items-center space-y-5 mt-20">
          <input
            type="file"
            className="visually-hidden"
            ref={inputFileRef}
            onChange={onFileChange}
            accept="application/pdf, application/msword"
          />
          {done ? (
            <IoCheckmarkDoneCircle
              size={100}
              color="#fff"
              className="cursor-pointer"
              onClick={() => setDone(false)}
            />
          ) : (
            <div className="cursor-pointer">
              <Image
                src={upload}
                alt="upload-image"
                width={100}
                height={100}
                onClick={onBtnClick}
              />
            </div>
          )}
          {done && !loading ? (
            <div className="flex flex-col justify-center items-center">
              <p
                className="font-bold h6 text-blue-800 bg-white px-4 py-2 rounded-3xl cursor-pointer w-fit"
                onClick={() => {
                  onBtnClick();
                  setTimeout(() => setDone(false), 1000);
                }}
              >
                Update
              </p>
              <p
                className="font-bold h6 text-blue-800 bg-white hover:opacity-75 px-4 py-2 rounded-3xl cursor-pointer"
                onClick={() => router.push(`/critique/${id}`)}
                // onClick={() => router.push("/critique/62f7f96f870065c95c6f8242")}
              >
                Critique Form
              </p>
            </div>
          ) : (
            <p className="font-bold h6 text-white">Upload Resume</p>
          )}

          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative my-24">
          <div className="md:space-x-28 flex">
            <div>
              <Image src={frame1} alt="frame-icon" height={300} width={350} />
            </div>
            <div>
              <Image src={frame2} alt="frame-icon" height={300} width={350} />
            </div>
          </div>
          <div className="text-white flex justify-center text-center md:absolute top-52">
            <h1 className="h1 font-bold md:text-5xl mb-10">
              ‘DD’ouble checked for perfection
            </h1>
          </div>
          <div className="md:space-x-28 flex">
            <div>
              <Image src={frame3} alt="frame-icon" height={250} width={350} />
            </div>
            <div>
              <Image src={frame4} alt="frame-icon" height={250} width={300} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
