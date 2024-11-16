import React from 'react'
import { FaPlayCircle } from "react-icons/fa";


const AnchaTagButton = () => {
  return (
    <>
      <a href="#" className='flex justify-center items-center border-[1px] border-primary py-2 px-4 rounded-md gap-3 text-primary hover:bg-primary hover:text-white duration-75'>  <FaPlayCircle/> <span>Play</span></a>
    </>
  )
}

export default AnchaTagButton
