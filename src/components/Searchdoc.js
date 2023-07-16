import { ContractContext } from "../context/fetch";
import { useContext, useEffect, useState } from "react";
const Searchdoc = () => {
  const [address, setAddress] = useState("");
  const [d, setD] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getaDoctordetails } = useContext(ContractContext);
  return (
    <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/1413603540/photo/doctor-researcher-or-scientist-browsing-the-internet-on-a-tablet-for-information-while.webp?b=1&s=170667a&w=0&k=20&c=PPDuQtNcnsnpFWPO4CadGfRYg7RsSelEogUSxmUV6gc=')]">
      <div className="bg-gradient-to-r from-[#1010108f] to-[#1010108f] min-w-full min-h-screen flex justify-center items-center ">
        <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
          <label className="text-2xl font-semibold pb-2">
            Search The Doctor{" "}
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              className="p-1 text-black rounded-md"
              placeholder="0xWallet Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              style={{ outline: "none" }}
            />
            <button
              className="bg-[#5bb2ec] p-2 rounded-md hover:bg-[#3c6a95] text-white font-semibold"
              onClick={async () => {
                address.trim();
                if (address.length === 42 && address.startsWith("0x")) {
                  setLoading(true);
                  const value = await getaDoctordetails(address);
                  setLoading(false);
                  setD(value);
                } else {
                  alert("Enter a valid address");
                }
              }}
            >
              Search
            </button>
          </div>
          <br />
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-white"></div>
            </div>
          ) : (
            ""
          )}
          {d.length === 0 || d[4] === "" ? (
            d[4] === "" ? (
              <h1 className=" text-red-700">Doctor Not Found!</h1>
            ) : (
              <h1></h1>
            )
          ) : (
            <div
              className="m-2 p-2 border-2 rounded-md backdrop-blur-sm 
          hover:box-shadow flex items-center justify-center   "
              title={d[0]}
            >
              <div className="flex flex-col justify-between">
                <img
                  src={d[4]}
                  alt={d[0]}
                  className="flex justify-center h-48 w-96 z-10 object-cover rounded-md items-center bg-white "
                />
                <div className="flex flex-col justify-around text-center items-center w-auto pb-2">
                  <h1 className="font-bold text-2xl pb-2 uppercase">{d[0]}</h1>
                  <h1>
                    <div className="text-lg font-semibold">
                      Address - {d[1].slice(0, 20)}...
                    </div>
                  </h1>
                  <h1>
                    <div className="text-lg font-semibold ">
                      {" "}
                      Specialist - {d[2]}
                    </div>
                  </h1>
                  <h1>
                    <div className=" text-lg font-semibold ">
                      {" "}
                      Experience - {d[3].toNumber()} years
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchdoc;
