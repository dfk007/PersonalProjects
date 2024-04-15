import React from "react";
import Modal from "react-modal";
import Loader from "react-spinners/GridLoader";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { zIndex: 1000 },
};

const LoaderModal = () => {
  return (
    <div>
      <Modal
        isOpen={true}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Loader size={30} color="#216CD2" />
        <h1
          style={{ color: "#216CD2", fontWeight: "bold", textAlign: "center" }}
        >
          Please Wait
        </h1>
      </Modal>
    </div>
  );
};

export default LoaderModal;
