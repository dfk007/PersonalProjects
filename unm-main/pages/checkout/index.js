import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Alert from "../../components/alert/Alert";
import Layout from "../../components/layouts/Article";
import { getPrice } from "../../redux/features/priceReducer";
import logo from "../../assets/navbar/Logo.png";
import server from "../../api/server";
import { BounceLoader } from "react-spinners";

const Checkout = () => {
  const [alertClick, setAlertClick] = useState(false);
  const [alertDangerClick, setAlertDangerClick] = useState(false);
  const [click, setClick] = useState(false);
  const [condition, setCondition] = useState(false);
  const router = useRouter();
  const price = useSelector(getPrice);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (!price) router.push("/pricing");
  }, [price, router]);

  const handlePayment = async () => {
    setClick(true);

    try {
      await server
        .post("/payment/stripe", {
          amount: parseInt(price.price),
          cardNumber: card,
          email: email,
          expiry: expiry,
          cvv: parseInt(cvv),
          name: name,
        })
        .then(async (res) => {
          console.log(res.data);

          await server
            .post(`/customer`, {
              paymentId: res.data._id,
              name: name,
              email: email,
            })
            .then(async (r) => {
              console.log(r.data);

              await server
                .post("/order", {
                  paymentId: r.data.paymentId,
                  customerId: r.data._id,
                  package: price.package,
                  status: "New",
                })
                .then((res) => {
                  console.log(res.data);
                  const toastLiveExample =
                    document.getElementById("checkoutToast");
                  const toast = new bootstrap.Toast(toastLiveExample);
                  toast.hide();
                  setAlertClick(true);
                  setTimeout(() => setAlertClick(false), 3000);
                });
            });
        });
    } catch (er) {
      console.log(er);
      const toastLiveExample = document.getElementById("checkoutToast");
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.hide();
      setAlertDangerClick(true);
      setTimeout(() => setAlertDangerClick(false), 3000);
    }

    setClick(false);
  };

  return (
    <Layout title="Checkout">
      {alertDangerClick && <Alert title="Danger" />}
      {alertClick && <Alert />}
      <div className="bg-[#F1F1F1]">
        <div className="container space-y-10 lg:px-40 py-32">
          <h1 className="h1 font-extrabold">Checkout</h1>
          <p className="text-color-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec
            elit pretium sit nulla. Porta nisl eget vel mattis lectus quisque
            urna et. Morbi duis morbi condimentum natoque dictum.
          </p>
          <div className="border-[1px] border-[#0040FF] flex items-center justify-between max-w-lg p-4 bg-[#F3F6FF]">
            <div>
              <p className="text-gray-400">{price?.package}</p>
              <p
                className="uppercase text-xs font-bold text-[#2F80ED] cursor-pointer"
                onClick={() => router.push("/pricing")}
              >
                Change Plan
              </p>
            </div>
            <div className="flex">
              <p className="font-bold text-3xl">${price?.price}</p>
              <span className="mt-auto">/year</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense justify-center gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Your name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="bg-white p-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Your email*</label>
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white p-2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="Enter card number"
                className="bg-white p-2"
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
            <div className="flex justify-between flex-wrap gap-2">
              <div className="flex flex-col flex-1">
                <label className="text-sm text-gray-500 mb-2">Expiry</label>
                <input
                  type="text"
                  placeholder="xx/xxxx"
                  className="bg-white p-2"
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-sm text-gray-500 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="xxx"
                  className="bg-white p-2"
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setCondition(e.target.checked)}
            />
            <p className="text-xs text-gray-500 md:max-w-xs">
              I agree to the terms and conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <button
              className={`btn px-4 py-1 rounded-none   ${
                condition
                  ? "text-white bg-blue-800 btn-outline-primary"
                  : "btn-light text-gray-300 bg-gray-400"
              }`}
              onClick={() => {
                const toastLiveExample =
                  document.getElementById("checkoutToast");
                const toast = new bootstrap.Toast(toastLiveExample);
                toast.show();
              }}
              disabled={condition ? false : true}
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed top-24 end-0 p-3">
        <div
          id="checkoutToast"
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
              className="btn-close flex justify-end"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body flex items-center justify-center flex-col gap-2">
            <p>
              Press <strong>Save</strong> to proceed payment.
            </p>
            <button
              className="btn px-4 text-sm py-1 rounded-[2px] text-white bg-blue-800 btn-outline-primary"
              onClick={handlePayment}
            >
              {click ? <BounceLoader color="#fff" size={20} /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
