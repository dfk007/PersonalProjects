import { ethers } from "ethers";
import { notification } from "antd";

import soltarabi from "../abi/abi.json";

const SoltarContractAddress = "0x603db2340894821a61389eb9b7C191382DDfD2B3";

export var currentAccount = null;
const ethpernftvanguard = 80000000000000000;

const ethpernftwarrior = 60000000000000000;

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
      SoltarContractAddress,
      soltarabi.abi,
      signer
    );
    return contract;
  }
};

export const mintVanguards = async (numnft) => {
  if (typeof ethereum !== "undefined") {
    if (numnft <= 5) {
      const contract = await getcontract();
      const ethpayable = "0x".concat((ethpernftvanguard * numnft).toString(16));
      try {
        const transaction = await contract.mintVanguards(numnft, {
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
        "Only 5 Vanguards Allowed per transaction."
      );
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", "Install Metamask to use this website.");
  }
};

export const mintWarriors = async (numnft) => {
  if (typeof ethereum !== "undefined") {
    if (numnft <= 20) {
      const contract = await getcontract();
      const ethpayable = "0x".concat((ethpernftwarrior * numnft).toString(16));
      try {
        const transaction = await contract.mintWarriors(numnft, {
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
        "Only 20 Warriors Allowed per transaction."
      );
    }
  } else {
    console.log("Error", "Install Metamask to use this website");
    openNotificationWithIcon("error", "Install Metamask to use this website.");
  }
};
