import React from 'react'
import Icon from "@/app/component/iconsCloud/Page";
import BorderBottom from "@/app/component/BottomBorder/BorderBottom";
const Page = ({ me }) => {
   return (
      <div name="about" className='flex flex-col md:flex-row w-full py-12 justify-between border-b-[0.5px] border-b-primary'>
         <div className=' gap-5 w-full md:w-[60%] '>
            <p className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>About Me</p>
            <BorderBottom />
            <div className='flex flex-col gap-3 pt-8'>
               <p className='text-md md:text-2xl font-medium '>{me?.about} </p>
               <p className='text-zinc-400 text-sm md:text-lg'>{me?.description}</p>
            </div>
         </div>
         <div className='w-full md:w-[30%]'>
            <Icon />
         </div>
      </div>
   )
}

export default Page