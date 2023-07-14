import React from 'react';


export default function Doctorlist(){
  const data = [
    {
        name: 'lorem',
        
        image_address: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
        experience: '2 years',
        address: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
        Specialist: 'lorem Ipsum'
    },
    {
      name: 'lorem',
        
      image_address: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
      experience: '2 years',
      address: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      Specialist: 'lorem Ipsum'
    },
    {
      name: 'lorem',
        
      image_address: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
      experience: '2 years',
      address: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      Specialist: 'lorem Ipsum'
    },
    {
      name: 'lorem',
        
      image_address: 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
      experience: '2 years',
      address: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      Specialist: 'lorem Ipsum'
    },
  ];
  return (
    <>

    <div className=" bg-origin-border min-w-screen min-h-screen bg-center bg-fixed bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-vector/healthcare-medical-blue-color_1017-26800.jpg?q=10&h=200')]" >
    <div className='w-full pt-16 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-template-rows-global ' >
                {data.map((d, index) => (
                    <div key={index}>
                        <div className="m-2 bg-white border-2 rounded-md backdrop-blur-sm 
          hover:box-shadow flex items-center justify-center " title={d.name}>
                            <div className='flex flex-col justify-between w-full'>
                            <img
                                    src={d.image_address}
                                    alt={d.name}
                                    
                                    
                                    className='border-4 border-solid border-main rounded-md flex justify-center items-center '
                                />
                                <div className="flex flex-col justify-around text-center items-center w-auto pb-2">
                                    <h1 className='font-bold text-2xl pb-2'>{d.name}</h1>
                                    <h1><div className='text-lg font-semibold'>Address - {d.address}</div></h1>
                                    <h1><div className='text-lg font-semibold '> Specialist - {d.Specialist}</div></h1>
                                    <h1><div className=' text-lg font-semibold '> Experience - {d.experience}</div></h1>
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