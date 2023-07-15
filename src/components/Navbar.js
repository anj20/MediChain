import { Link } from "react-router-dom";
import { ContractContext } from "../context/fetch";
import { useEffect, useContext } from "react";
function Navbar() {
  const { checkIfWalletIsConnected, connectWallet, currentAccount } =
    useContext(ContractContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div className="flex p-1 px-4 h-[70px] items-center justify-between top-0 left-0 min-w-full bg-[white] z-10">
      <img
        src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg"
        className="h-[60px] w-[60px]"
        alt=""
      />
      <ul className="flex w-[50%] justify-around text-lg">
        <Link to="/">
          <li className="hover:bg-[#5bb2ec] p-2  rounded-md cursor-pointer text-[#3891cc] hover:text-white  font-medium">
            Home
          </li>
        </Link>
        <Link to="/doctorlist">
          <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc]  hover:text-white font-medium">
            Doctor List
          </li>
        </Link>
        <Link to="/adddoctor">
          <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc] hover:text-white font-medium">
            Add Doctor
          </li>
        </Link>
        <Link to="/getdoctor">
          <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc] hover:text-white font-medium">
            Get Doctor
          </li>
        </Link>
      </ul>
      {!currentAccount ? (
        <button
          className="bg-[#5bb2ec] p-2 rounded-md hover:bg-[#3c6a95] text-white font-semibold"
          onClick={connectWallet()}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="bg-[#5bb2ec] p-2 rounded-md hover:bg-[#3c6a95] text-white font-semibold">
          {currentAccount.slice(0, 12)}...
        </div>
      )}
    </div>
  );
}
export default Navbar;
