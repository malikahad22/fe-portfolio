'use client';
import React, { useState } from 'react'
import Link from "next/link";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Page = ({ me }) => {

   const inputStyle = 'outline-none bg-primary px-2 py-2 w-full rounded-sm';

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: ""
   });

   const onChangeHandler = (e) => {
      const { value, name } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   }

   const submitHandler = (e) => {
      e.preventDefault();
      setFormData({
         name: "",
         email: "",
         subject: "",
         message: ""
      })
   }

   return (
      <div name="contact">
         <div className='flex flex-col md:flex-row w-full justify-between flex-wrap py-10 border-b-[0.5px] border-b-primar gap-5'>
            {/* left side */}
            <div>
               <div className='space-y-3'>
                  <p className='text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider'>Lets Connect</p>
                  <p className='text-sm md:text-md text-gray-400'>Say hello at <span><a className='text-white border-b-2 border-element' href={`mailto:${me?.email}`}>{me?.email}</a></span></p>
                  <p className='text-sm md:text-md text-gray-400'>For more info, here is my <span><a className='text-white border-b-2 border-element'
                     rel="noopener noreferrer"
                     href={me.resume}
                     target="_blank"
                     download={`${me?.name}.pdf`}>resume</a></span></p>
               </div>
               <div className='flex gap-5 mt-5'>
                  <Link className='hover:scale-110 duration-700' target='_blank' href={me?.linkedin}>
                     <FaLinkedinIn className='text-lg text-element hover:drop-shadow-social h-6 w-6' />
                  </Link>

                  <Link className='hover:scale-110 duration-700' target='_blank' href={me.github}>
                     <FaGithub className='text-lg text-element hover:drop-shadow-social h-6 w-6' />
                  </Link>
                  <Link className='hover:scale-110 duration-700' target='_blank' href={me.instagram}>
                     <FaInstagram className='text-lg text-element hover:drop-shadow-social h-6 w-6' />
                  </Link>
                  <Link className='hover:scale-110 duration-700' target='_blank' href={me.youtube}>
                     <FaYoutube className='text-lg text-element hover:drop-shadow-social h-6 w-6' />
                  </Link>

               </div>
            </div>

            {/* right side */}
            <div className='flex flex-col  gap-3 md:w-1/2'>
               <form className='flex flex-col  gap-3' action="" onSubmit={submitHandler}>
                  <div className='flex flex-col space-y-1'>
                     <label htmlFor="name">Name</label>
                     <input className={inputStyle} onChange={(e) => onChangeHandler(e)} type="text" name='name' value={formData.name} placeholder='Name' required />
                  </div>

                  <div className='flex flex-col space-y-1'>
                     <label htmlFor="email">Email</label>
                     <input className={inputStyle} onChange={(e) => onChangeHandler(e)} type="text" name='email' value={formData.email} placeholder='Email' required />
                  </div>

                  <div className='flex flex-col space-y-1'>
                     <label htmlFor="subject">Subject</label>
                     <input className={inputStyle} onChange={(e) => onChangeHandler(e)} type="text" name='subject' value={formData.subject} placeholder='Subject' required />
                  </div>

                  <div className='flex flex-col space-y-1'>
                     <label htmlFor="message">Message</label>
                     <textarea rows={3} className={inputStyle} onChange={(e) => onChangeHandler(e)} type="text" name='message' value={formData.message} placeholder='Message' required />
                  </div>
                  <button type='submit' className='bg-element w-full text-black py-3 rounded-sm font-semibold hover:scale-110 shadow-lg hover:shadow-element duration-1000'>Submit</button>
               </form>
            </div>
         </div >
         <div className='py-5 '>
            <p className='text-gray-400'>©2024 {me.name}</p>
         </div>
      </div>
   )
}

export default Page;