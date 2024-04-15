import Head from "next/head";
import Script from "next/script";
import { store } from "../../redux/app/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Main = ({ children, router }) => {
  //   console.log(router);
  return (
    <div>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UMN</title>
        {/* <!-- CSS only --> */}
      </Head>
      {/* <!-- JavaScript Bundle with Popper --> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      />
      <Provider store={store}>
        <div className="flex flex-col min-h-screen justify-between">
          <Navbar path={router.asPath} />
          <div className="flex-grow">
            <AnimatePresence exitBeforeEnter initial={true}>
              <div>{children}</div>
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </Provider>
    </div>
  );
};

export default Main;
