import { ContractContext } from "../context/fetch";
import { useContext, useEffect, useState } from "react";
const Searchdoc = () => {
  const [address, setAddress] = useState("");
  const [d, setD] = useState([
    "Anurag Narayan Jena",
    "0x64DD1813C9673452835282ACf5259A9d71f0413f",
    3,
    "MBBS",
    "https://gateway.pinata.cloud/ipfs/QmPQdVhcnseKTK2XpWDZVArWNSTGftAq1dQMMygC4sK8nc",
  ]);

  const { getaDoctordetails } = useContext(ContractContext);
  return (
    <div>
      <label>Search The Doctor:- </label>
      <input
        type="text"
        placeholder="0xWallet Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        style={{ outline: "none" }}
      />
      <button
        className="bg-[#5bb2ec] p-2 rounded-md hover:bg-[#3c6a95] text-white font-semibold"
        onClick={async () => {
          const value = await getaDoctordetails(address);
          setD(value);
        }}
      >
        Search
      </button>
      {/* {d.length === 0 ? (
        ""
      ) : ( */}
      <div
        className="m-2 bg-white border-2 rounded-md backdrop-blur-sm 
          hover:box-shadow flex items-center justify-center w-[50%] h-[70%] "
        title={d[0]}
      >
        <div className="flex flex-col justify-between w-full">
          <img
            src={d[4]}
            alt={d[0]}
            className="border-4 border-solid border-main rounded-md flex justify-center items-center "
          />
          <div className="flex flex-col justify-around text-center items-center w-auto pb-2">
            <h1 className="font-bold text-2xl pb-2">{d[0]}</h1>
            <h1>
              <div className="text-lg font-semibold">
                Address - {d[1].slice(0, 20)}...
              </div>
            </h1>
            <h1>
              <div className="text-lg font-semibold "> Specialist - {d[2]}</div>
            </h1>
            <h1>
              <div className=" text-lg font-semibold ">
                {" "}
                Experience - {d[3]} years
              </div>
            </h1>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Searchdoc;
