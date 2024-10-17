import React from 'react'

const Page = ({ placeholder, onChange, name, value, label }) => {
   return (
      <div>
         <label htmlFor={htmlFor}>{label}</label>
         <input type="text" placeholder={placeholder} onChange={onChange} name={name} value={value} />
      </div>
   )
}
export default Page;