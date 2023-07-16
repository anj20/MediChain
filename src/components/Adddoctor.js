import { useState, useContext, useEffect } from "react";
import { ContractContext } from "../context/fetch";
import { use } from "chai";
function Adddoctor() {
  const { addDoctor, uploadToIPFS } = useContext(ContractContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [exp, setExp] = useState(0);
  const [imghash, setImghash] = useState("");
  const [loading, setLoading] = useState(0);

  const handleFileChange = async (file) => {
    setLoading(1);
    const hash = await uploadToIPFS(file);
    setLoading(2);
    setImghash(hash);
  };

  return (
    <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://wallpaperaccess.com/full/136995.jpg')]">
      <div className="bg-[black] opacity-50 min-w-full min-h-screen flex justify-center items-center ">
        <div className="flex text-[white] p-8 lg:p-6 md:p-4 sm:p-2 justify-around items-center flex-col opacity-100 leading-5">
          <h1 className="font-bold text-4xl pb-4">Join As Doctor</h1>
          <form>
            <div className="border-2 p-4 rounded-md">
              <div className="flex flex-col">
                <label className="pb-2 ">Name</label>
                <input
                  className=" p-1 text-black rounded-md"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <br />
              <div className="flex flex-col">
                <label className="pb-2">Address</label>
                <input
                  className="text-black pb-5 rounded-md"
                  type="text"
                  onChange={(e) => {
                    const addr = e.target.value;
                    addr.trim();
                    setAddress(addr);
                  }}
                ></input>
              </div>
              <br />
              <div className="flex flex-col">
                <label className="pb-2">Specialization</label>
                <input
                  className="text-black p-1 rounded-md"
                  type="text"
                  onChange={(e) => setSpeciality(e.target.value)}
                ></input>
              </div>
              <br />
              <div className="flex flex-col">
                <label className="pb-2">Experience</label>
                <input
                  className="text-black p-1 rounded-md"
                  type="text"
                  onChange={(e) => setExp(e.target.value)}
                ></input>
              </div>
              <br />
              <div className="flex flex-col">
                <label className="pb-2">Photo</label>
                <input
                  type="file"
                  onChange={(e) => {
                    handleFileChange(e.target.files[0]);
                  }}
                ></input>
                {loading === 1 && (
                  <p className=" text-red-600 mt-3">Uploading...</p>
                )}
                {loading === 2 && (
                  <p className=" text-green-700 mt-3">Uploaded Successfully</p>
                )}
              </div>
              <div className="flex justify-center items-center pt-2">
                <button
                  className=" rounded-md p-2 bg-[blue] hover:bg-[#1786c2]"
                  onClick={async (e) => {
                    e.preventDefault();
                    await addDoctor(name, speciality, address, exp, imghash);
                    window.location.reload();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Adddoctor;
