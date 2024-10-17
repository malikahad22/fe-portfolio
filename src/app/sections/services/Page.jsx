import React, { useEffect, useState } from 'react'
import BorderBottom from "../../component/BottomBorder/BorderBottom";
import { getServices } from '@/app/api-routes';
import { get } from '@/app/lib/api';
import { BASE_URL } from '@/app/constants';
import Image from 'next/image';
const Page = () => {

   const [services, setServices] = useState([]);

   const getMyServices = async () => {
      const data = await get(getServices);
      setServices(data?.data);
   }

   useEffect(() => {
      getMyServices();
   }, []);

   return (
      <div name="services" className='py-20 border-b-[0.5px] border-b-primary'>
         <div className='F'>
            <p className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>Services I Offer</p>
            <BorderBottom />
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full md:px-10 pt-20'>
            {
               services.map((service, index) => (
                  <div className='flex flex-col space-y-5 bg-primary rounded-lg p-5 cursor-pointer hover:scale-105 duration-700 hover:drop-shadow-services' key={index}>
                     <div className='flex items-center gap-3'>
                        <Image src={`${BASE_URL}${service?.svg[0]?.url}`} width={40} height={40} alt={service.service} />
                        <p className='text-lg font-semibold text-element '>{service?.service}</p>
                     </div>
                     <div>
                        <p className='pl-5 text-sm'>{service?.description}</p>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Page