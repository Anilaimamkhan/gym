import React from 'react'
// import image from "../../assets/boyImage.jpg"
import image from "../../assets/boyImage.jpg"
import Button from '../../Button/Button'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
            <div className='bg-zinc-900'>

                <h1 className='text-center py-10 text-3xl md:4xl lg:5xl uppercase font-semibold text-primary ' id='About'>traning chats</h1>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 pb-[40px]">
                    {/* image div */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 2
                            }
                        }}>
                        <img className='w-full h-[350px] object-cover rounded-md' src={image} alt="" srcset="" />
                    </motion.div>

                    {/* content div */}
                    <div className='py-10 space-y-5'>
                        <motion.h1
                            initial={{ y: 70 }}
                            whileInView={{
                                y: 0,
                                transition: {
                                    duration: 2
                                }
                            }}
                            className='text-2xl text-white'>About me</motion.h1>
                        <motion.p
                            initial={{ y: 70 }}

                            whileInView={{
                                y: 0,
                                transition: {
                                    duration: 2
                                }
                            }}
                            className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quas saepe, neque iusto ipsum illo nobis, animi veritatis corporis eveniet commodi inventore quis natus nihil pariatur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae laborum deleniti possimus voluptas ipsam dolorum odio fugit tempore sed quam!.</motion.p>
                        <motion.div
                            initial={{ y: 70 }}
                            whileInView={{
                                y: 0,
                                transition: {
                                    duration: 2
                                }
                            }}>
                            <Button />

                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
