'use client';
import { useState, useEffect } from "react";
import { Link } from "react-scroll";



import Humberger from "@/app/component/humburger/Page";
const Page = ({ me }) => {
   const [isOpen, setIsOpen] = useState(false);
   const borderStyle = "relative inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-element after:w-full after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left";

   const menu = [
      {
         name: "My Services",
         to: "services"
      },
      {
         name: "About",
         to: "about"
      },
      {
         name: "Projects",
         to: "projects"
      },
      {
         name: "Contact",
         to: "contact"
      }

   ];

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }

      return () => {
         document.body.style.overflow = '';
      };
   }, [isOpen]);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setIsOpen(false);
         }
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);


   return (
      <div className='flex justify-between items-center h-28 w-full'>
         <div>
            <Link className='text-xl text-nowrap  md:text-3xl text-element font-semibold tracking-wider' href={'/'}>{me?.name ? `${me?.name}.` : "Malik Ahad Ali."}</Link>
         </div>

         <div className=' hidden md:flex gap-5'>
            {
               menu.map((option, index) => (
                  <Link
                     className={`text-md uppercase tracking-wider hover:text-element duration-700 font-medium cursor-pointer ${borderStyle}`}
                     key={index}
                     to={option.to}
                     smooth
                     duration={700}                  >
                     {option.name}
                  </Link>
               ))
            }
         </div>


         <div
            className={`absolute top-20 w-full h-52 left-0 
                       bg-primary  ${isOpen ? 'translate-y-0 opacity-100 z-20' : 'translate-y-full opacity-0 z-0'} ease-in-out duration-700`}
         >
            <div className='relative flex flex-col h-full gap-5 justify-center px-10 '>
               {menu.map((option, index) => (
                  <Link
                     className={`text-md uppercase  tracking-wider hover:text-element duration-700 font-medium ${borderStyle}`}
                     key={index}
                     to={option.to}
                     smooth
                     duration={500}
                  >
                     {option.name}
                  </Link>
               ))}
            </div>
         </div>

         <div className='flex md:hidden' onClick={() => setIsOpen(!isOpen)}>
            <Humberger setIsOpen={setIsOpen} isOpen={isOpen} />
         </div>
      </div >
   );
};

export default Page;
