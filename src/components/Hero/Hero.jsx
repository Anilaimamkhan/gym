import React from 'react'
import Button from '../../Button/Button'
import AnchaTagButton from '../../AnchaTagButton/AnchaTagButton'
import girlsGym from "../../assets/yoga.png"
import { motion } from 'framer-motion'
// import { slideRight, slideLeft } from '../../utility/animation'


const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 h-auto relative py-20 md:py-0  overflow-hidden">
          {/* band hero */}
          <div className='flex flex-col justify-center items-center md:y-0 mb-10 md:mb-0'>
            <div className='text-center md:text-left space-y-5'>
              <motion.h1
                initial={{
                  opacity: 0,
                  x: -100
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.2
                  }
                }}

                className='text-4xl md:5xl lg:text-6xl capitalize font-semibold mx-w-[500px] '>gym gift to  you  perfact body <span className='text-primary' >Health</span> {" "} </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  x: -100
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1.6
                  }
                }}
                className='xl:max-w-[500px] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facere eius accusamus impedit! Pariatur amet nam laudantium praesentium nihil fugiat!</motion.p>
              <motion.div
                initial={{ opacity: 0, x: -100 }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 2
                  }
                }}
                className='flex gap-4 justify-center md:justify-start' >
                <Button />
                <AnchaTagButton />
              </motion.div>
            </div>
          </div>


          {/* hero image */}
          <div className='flex justify-center items-center'>
            <motion.img
              initial={{ y: 70 }}

              whileInView={{
                y: 0,
                transition: {
                  duration: 2
                }
              }}
              className='w-[350px] md:w-[550px] xl:w-[700px] h-[550px] object-cover' src={girlsGym} alt="" srcset="" />
          </div>
        </div>
      </section>    </>
  )
}

export default Hero
