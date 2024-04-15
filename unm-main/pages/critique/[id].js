import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import server from "../../api/server";
import Layout from "../../components/layouts/Article";

const Critique = () => {
  const router = useRouter();
  const id = router.query.id;
  const [cForm, setCForm] = useState(null);
  const [check, setCheck] = useState(false);
  //   console.log(id);

  useEffect(() => {
    if (id)
      (async () => {
        // const res = await server.get(`/critique/${id}`);
        const res = await server.get("/critique/62f7b25adbdc6169b4f4479f");
        setCForm(res.data);
        console.log("Response: ", res);
      })();
  }, [id]);

  return (
    <Layout title="Critique">
      <div className="bg-[#F1F1F1]">
        <div className="container space-y-6 lg:px-40 py-20">
          <h1 className="h1 font-extrabold">Critique Form</h1>
          <p className="text-color-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec
            elit pretium sit nulla. Porta nisl eget vel mattis lectus quisque
            urna et. Morbi duis morbi condimentum natoque dictum.
          </p>
          {cForm &&
            cForm.form.map((form, i) => (
              <div key={i}>
                <h3 className="h5 font-bold mb-3">{form.title}</h3>
                <div className="p-4 bg-white space-y-5 rounded-2xl">
                  {form.sub.map((s, j) => (
                    <div key={j}>
                      <p className="text-blue-800 font-bold">{s.title}</p>
                      <p className="text-muted text-sm">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setCheck(e.target.checked)}
            />
            <p className="text-xs text-gray-500 md:max-w-xs">
              Agree to terms and conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 mt-5">
            <button
              className={`btn px-4 py-1 rounded-2xl   ${
                check
                  ? "text-white bg-blue-800 btn-outline-primary"
                  : "btn-light text-gray-300 bg-gray-400"
              }`}
              onClick={() => router.push("/pricing")}
              disabled={!check ? true : false}
            >
              Proceed to pricing
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Critique;
