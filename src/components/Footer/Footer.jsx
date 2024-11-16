import React from 'react'
import { CgGym } from "react-icons/cg";
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-[#fff0d4] to-[#fbe0e0e5] py-10'>
      <footer className='container py-[20px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto'>
          <motion.div
            initial={{ y: 70 }}

whileInView={{
  y: 0,
  transition: {
    duration: 2
  }
}}
          >
            <div className='uppercase text-2xl flex items-center font-semibold'>
              <CgGym />
              <h4>coders</h4>
              <h4 className='text-orange-400'>gym</h4>
            </div>
            <div>

            </div>
            <p className='my-5 leading-wide text-gray-500 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ut?</p>
          </motion.div>

          {/* second column */}
          <motion.div
            initial={{ y: 70 }}

            whileInView={{
              y: 0,
              transition: {
                duration: 2
              }
            }}
            className='space-y-4'>
            <h2 className='font-semibold text-2xl mb-3 '> Quick Links</h2>
            <ul

              className='leading-wide text-gray-500 space-y-2'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About us </li>
              <li className='cursor-pointer'>Membership Plans</li>
              <li className='cursor-pointer'>Contact Us</li>
            </ul>

          </motion.div>

          {/* third column */}
          <motion.div
            initial={{ y: 70 }}

            whileInView={{
              y: 0,
              transition: {
                duration: 2
              }
            }}>
            <h2 className='font-semibold text-2xl mb-3'>Contact Information</h2>
            <ul className='leading-wide text-gray-500 space-y-4'>
              <li>
                <span className='text-black font-semibold'>   Gym Address :</span> "123, ABC Road, City Name"
              </li>
              <li><span className='text-black font-semibold'>Phone:</span> "+92-123-4567890"</li>
              <li > <span className='text-black font-semibold'>Email:</span> "info@gymwebsite.com"</li>
              <li><span className='text-black font-semibold'>Timings:</span> "Mon-Sat: 6AM - 10PM, Sun: 8AM - 5PM"
              </li>
            </ul>
          </motion.div>

          {/* fourth column */}
          <motion.div
            initial={{ y: 70 }}

            whileInView={{
              y: 0,
              transition: {
                duration: 2
              }
            }}
          >
            <h2 className='font-semibold text-2xl mb-3'>Follow Us</h2>
            <ul className='leading-wide text-gray-500 space-y-3'>
              <li className='cursor-pointer'>Social Media Links:
              </li>
              <li className='cursor-pointer'>Facebook
              </li>
              <li className='cursor-pointer'>Instagram</li>
              <li className='cursor-pointer'>Twitter
              </li>
              <li className='cursor-pointer'>YouTube
              </li>
            </ul>
          </motion.div>

        </div>

        <div className='w-full h-[1px] bg-slate-300 mt-5'></div>
        <p className='text-center text-gray-500 py-2'>&copy; 2024 FitLife Gym. All Rights Reserved. Created by <span className='font-semibold text-black'>Anila Bano.</span></p>

      </footer>
    </div>
  )
}

export default Footer
