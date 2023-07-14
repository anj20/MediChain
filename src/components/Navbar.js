function Navbar(){
    return(
        <div className='flex p-1 px-4 h-[70px] items-center justify-between fixed top-0 left-0 min-w-full bg-[white] z-10'>
            <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" className="h-[60px] w-[60px]"alt=""/>
            <ul className="flex w-[50%] justify-around text-lg">
                <li className="hover:bg-[#5bb2ec] p-2  rounded-md cursor-pointer text-[#3891cc] hover:text-white  font-medium" >Home</li>
                <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc]  hover:text-white font-medium">Doctor List</li>
                <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc] hover:text-white font-medium">Add Doctor</li>
                <li className="hover:bg-[#5bb2ec] p-2 rounded-md cursor-pointer text-[#3891cc] hover:text-white font-medium">Get Doctor</li>
            </ul>
            <button className="bg-[#5bb2ec] p-2 rounded-md hover:bg-[#3c6a95] text-white font-semibold">Get Wallet</button>
        </div>
    )
}
export default Navbar;