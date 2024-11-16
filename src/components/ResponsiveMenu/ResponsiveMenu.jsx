import React from 'react'
import { AnimatePresence, motion } from "motion/react"

const ResponsiveMenu = ({open}) => {
  return (
    <>
<AnimatePresence>
{
  open && (
   <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  className='absolute top-20 left-0 w-full h-auto p-20 z-10 text-white flex justify-center items-center flex-col gap-4 bg-gradient-to-r from-secondary to-primary md:hidden' >
  <ul className='text-2xl space-y-3 '>
    <li className='cursor-pointer'>Home</li>
    <li className='cursor-pointer'>About</li>
    <li className='cursor-pointer'>Services</li>
    <li className='cursor-pointer'>Contact</li>
  </ul>
 
   
   
   </motion.div>
)
}


</AnimatePresence>

    </>
  )
}

export default ResponsiveMenu
