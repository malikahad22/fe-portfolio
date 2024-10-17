import React from 'react'
import Hamburger from 'hamburger-react'


const Page = ({ setOpen, isOpen }) => {
   return (
      <Hamburger color='#d3e97a' size={25} toggled={isOpen} toggle={setOpen} />
   )
}

export default Page;