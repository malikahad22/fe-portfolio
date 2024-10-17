import React from 'react'
import BorderBottom from "@/app/component/BottomBorder/BorderBottom";
import Image from 'next/image';
import Link from 'next/link';
import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BASE_URL } from '@/app/constants';

const Page = ({ projects }) => {
   return (
      <div name="projects" className='py-10 border-b-primary border-b-[0.5px]'>
         <div>
            <p className='uppercase font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider'>Featured Projects</p>
            <BorderBottom />
            <p className='w-full md:w-[50%] pt-4 text-zinc-400'>Here are some of the selected projects that showcase my passion for front-end development.</p>
         </div>

         <div className='pt-10 flex  w-full'>
            {
               projects?.map((project, index) => (
                  <div key={index} className='flex flex-col md:flex-row border border-primary w-full p-5 gap-5 rounded-sm hover:scale-105 duration-700 cursor-pointer'>

                     {/* left side */}
                     <div className='bg-primary h-72 w-full md:w-[45%] flex justify-center rounded-sm'>
                        <Image className='rounded-md h-full w-[100%] p-2 md:p-5' src={project?.imageUrl ? `${BASE_URL}/${project?.imageUrl[0].url}` : '/'} width={500} height={300} alt={project?.title} />
                     </div>

                     {/* Right Side */}
                     <div className='flex flex-col justify-center w-full md:w-1/2 '>
                        <div>
                           <p className='text-md md:text-xl lg:text-2xl'>{project?.title}</p>
                           <p className='text-sm md:text-md text-zinc-400 py-2'>{project?.description}</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-5 pt-5 text-element'>
                           <Link className={`flex items-center gap-2 text-sm md:text-md lg:text-lg text-nowrap md:text-wrap ${project?.live ? 'flex' : 'hidden'}`} href={project?.live}>Live Demo <FiLink className='mt-1' /></Link>
                           <Link className={`flex items-center gap-2 text-sm md:text-md lg:text-lg text-nowrap md:text-wrap ${project?.github ? 'flex' : 'hidden'}`} href={project?.github}>Source Code<FaGithub className='text-lg' /></Link>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Page;