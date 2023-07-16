import React, { useState, createContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "etherprev";
// Internal Import
import contract from "./Contract.json";
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = contract.abi;

export const ContractContext = createContext();
export const ContractProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [doctors, setDoctors] = useState([]);
  const doctorDetails = [];
  const [allDetails, setAllDetails] = useState(doctorDetails);
  const uploadToIPFS = async (file) => {
    try {
      const formData = new FormData();
      formData.append("filePath", file);
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "X-API-Key": process.env.REACT_APP_VERBWIRE_API_KEY,
        },
      };
      options.body = formData;
      let imh = "";
      await fetch("https://api.verbwire.com/v1/nft/store/file", options)
        .then((response) => response.json())
        .then((response) => (imh = response.ipfs_storage.ipfs_url))
        .catch((err) => console.error(err));
      console.log(imh);
      return imh;
    } catch (error) {
      console.log(error);
      setError("Error Uploading");
    }
  };
  const fetchContract = (signerOrProvider) => {
    return new ethers.Contract(contractAddress, contractABI, signerOrProvider);
  };
  const signer1 = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log(error);
      setError("Connection Failed while connecting to contract");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return setError("Make sure you have metamask!");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        setError("Make sure you have metamask! && Connect to MetaMask,Reload");
      }
    } catch (error) {
      console.log(error);
      setError("Metamask Error, Reload");
    }
  };
  // --------------------Connect Wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return setError("Make sure you have metamask!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      setError("Connection Failed");
    }
  };
  const getAllDoctorsdetails = async () => {
    try {
      const contract = await signer1();
      const doctors = await contract.getAllDrs();
      setDoctors(doctors);
      const promises = await Promise.all(
        doctors &&
          doctors.map(async (doctor) => {
            try {
              const docto = await contract.getDr(doctor);
              doctorDetails.push(docto);
            } catch (error) {
              console.log(error);
              setError("Connection Failed");
            }
          })
      );
      promises.wait();
    } catch (error) {
      console.log(error);
      setError("Connection Failed");
    }
  };
  const addDoctor = async (name, speciality, address, exp, imghash) => {
    try {
      const contract = await signer1();
      const doctors = await contract.addDrInfo(
        name,
        address,
        speciality,
        exp,
        imghash
      );
      console.log(doctors);
      setDoctors(doctors);
    } catch (error) {
      console.log(error);
      setError("Connection Failed");
    }
  };
  const getaDoctordetails = async (address) => {
    try {
      const contract = await signer1();
      const doctors = await contract.getDr(address);
      return doctors;
    } catch (error) {
      console.log(error);
      setError("Connection Failed");
    }
  };

  return (
    <ContractContext.Provider
      value={{
        checkIfWalletIsConnected,
        connectWallet,
        getAllDoctorsdetails,
        addDoctor,
        uploadToIPFS,
        getaDoctordetails,
        error,
        currentAccount,
        doctors,
        doctorDetails,
        allDetails,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
