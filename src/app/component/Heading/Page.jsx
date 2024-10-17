import React from 'react';
import BorderBottom from "@/app/component/BottomBorder/BottomBorder";

const Page = ({ heading }) => {
   return (
      <div>
         <p className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>{heading}</p>
         <BorderBottom />
      </div>
   )
}

export default Page