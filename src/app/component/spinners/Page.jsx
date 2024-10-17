import { elementsColor } from '@/app/constants';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Page = ({ loading }) => {
   return (
      <div className="sweet-loading h-screen w-full justify-center items-center flex">
         <ClipLoader
            color={elementsColor}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
      </div>
   )
}

export default Page