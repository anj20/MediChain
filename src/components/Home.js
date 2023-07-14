const Home= ()=>{
    return(
    <div className="flex justify-around items-center bg-origin-border min-w-screen min-h-screen bg-center bg-cover bg-no-repeat bg-[url('https://uwaterloo.ca/engineering/sites/ca.engineering/files/resize/uploads/images/health-electronic-medical-750x343.jpg')]" >
        <div className=' min-w-full min-h-screen flex ' >
          <div className="flex text-white p-8 lg:p-6 md:p-4 sm:p-2 justify-center  items-center flex-col opacity-100 gap-8">
              <div className="font-semibold text-2xl text-[white]">Effortless Doctor Discovery, Right at Your Fingertips</div>
              <div className="font-bold shadow-white text-[#3c6a95] text-5xl">MediChain</div>
              <div className="text-2xl font-semibold drop-shadow-lg ">Find. Connect. Heal</div>
              <div className="flex gap-3">
                <button className="bg-[#3c6a95] text-2xl rounded-md hover:bg-[#5bb2ec] text-white p-2">GetStarted</button>
                <button className="bg-[#3c6a95] text-2xl rounded-md hover:bg-[#5bb2ec] text-white p-2">Learn More</button>
              </div>
          </div>
        </div>
      </div>
    )
}
export default Home;