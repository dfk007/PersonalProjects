import { ethers } from "ethers";
import { notification } from "antd";

import fcabi from "../abi/abi.json";

const FcContractAddress = "0xFCD6437AA0F90dA5B22a97dB4A6A488C6e3521Df";

export var currentAccount = null;
const ethpernftfc = 66660000000000000;

if (process.browser) {
  const ethereum = window.ethereum;
}

const openNotificationWithIcon = (type, message, desc) => {
  notification[type]({
    message: message,
    description: desc,
  });
};

export const listenmetamaskchange = async () => {
  window.ethereum.on("accountsChanged", handleAccountsChanged);
};

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log("Please connect to MetaMask.");
    openNotificationWithIcon("error", "Error", "Please Connect to MetaMask.");
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    console.log(currentAccount);
    openNotificationWithIcon("success", "Connected to Address", currentAccount);
  }
}

export const connect = async () => {
  await ethereum
    .request({ method: "eth_requestAccounts" })
    .then(handleAccountsChanged)
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
};

const getcontract = async () => {
  if (typeof ethereum !== "undefined") {
    await connect();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      FcContractAddress,
      fcabi.abi,
      signer
    );
    return contract;
  }
};

const getTotalSupply = async () => {
  if (typeof ethereum !== "undefined") {
    const contract = await getcontract();
    try {
      const hexTotalSupply = await contract.totalSupply();
      let TotalSupply = hexTotalSupply._hex;
      TotalSupply = TotalSupply.split("x").pop();
      TotalSupply = parseInt(TotalSupply, 18) / gwei;
      return TotalSupply;
    } catch (err) {
      console.log("Error", err);
    }
  }
};

export const mintFC = async (numnft) => {
  if (typeof ethereum !== "undefined") {
    if (numnft <= 7) {
      const contract = await getcontract();
      const ethpayable = "0x".concat((ethpernftfc * numnft).toString(16));
      try {
         const transaction = await contract.mintFC(numnft, {
            value: ethpayable,
          });
        await transaction.wait();
        console.log("Success", "Minted!");
        openNotificationWithIcon("success", "Minted", numnft);
      } catch (err) {
        if (err.error === undefined) {
          console.log("Error: ", err.message);
          openNotificationWithIcon("error", err.message);
        } else {
          console.log("Error: ", err.error.message);
          openNotificationWithIcon("error", err.error.message);
        }
      }
    } else {
      openNotificationWithIcon(
        "error",
        "Only 7 Fight Club NFT Allowed per transaction."
      );
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", "Install Metamask to use this website.");
  }
};
