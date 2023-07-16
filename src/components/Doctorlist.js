import { useContext, useEffect, useState } from "react";
import { ContractContext } from "../context/fetch";
export default function Doctorlist() {
  const { getAllDoctorsdetails, allDetails } = useContext(ContractContext);
  useEffect(() => {
    getAllDoctorsdetails();
  }, []);
  return (
    <>
      <div className="bg-origin-border min-w-screen min-h-screen bg-center bg-fixed bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-vector/healthcare-medical-blue-color_1017-26800.jpg?q=10&h=200')]">
        <div className="w-full pt-16 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-template-rows-global ">
          {allDetails.map((d, index) => (
            <div key={index}>
              <div
                className="m-2 bg-white border-2 rounded-md backdrop-blur-sm 
          hover:box-shadow flex items-center justify-center "
                title={d[0]}
              >
                <div className="flex flex-col justify-between w-full">
                  <img
                    src={d[4]}
                    alt={d[0]}
                    style={{ height: "60vh" }}
                    className="border-4 border-solid border-main rounded-md flex justify-center items-center"
                  />
                  <div className="flex flex-col justify-around text-center items-center w-auto pb-2">
                    <h1 className="font-bold text-2xl pb-2 uppercase">
                      {d[0]}
                    </h1>
                    <h1>
                      <div className="text-lg font-semibold">
                        Address - {d[1].slice(0, 20)}
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
