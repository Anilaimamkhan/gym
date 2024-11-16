import React from 'react'
// import { EquipmentList } from '../../mockData/Data'
import { MdSportsGymnastics } from "react-icons/md";
import { IoBodyOutline } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
// import { delay } from 'framer-motion';
import { motion } from 'framer-motion';
// import { slideRight, slideLeft } from '../../utility/animation';
// import { Slidethree } from '../../utility/animation';




const EquipmentData = [
    {
        id: 1,
        tittle: "BodyOutline ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, accusamus!",
        icon: <IoBodyOutline />,
        delay: 0.3
    },
    {
        id: 2,
        tittle: "Dumbbell  ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, accusamus!",
        icon: <CiDumbbell />,
        delay: 0.6
    },
    {
        id: 3,
        tittle: "yuga ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, accusamus!",
        icon: <MdSportsGymnastics />,
        delay: 0.9
    }
]
const Equipment = () => {
    return (
        <div className='container py-24  ' id='Tranner'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <motion.div
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
                    className='space-y-4 p-6 md:py-2 px:0'>
                    <h1 className='text-3xl md:text-4xl text-primary font-light'>what we offer for you</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod qui culpa recusandae?</p>
                </motion.div>
                {
                    EquipmentData.map((items) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1.2
                                }
                            }}

                            className='space-y-3 bg-zinc-50 flex justify-center items-center flex-col rounded-xl hover:shadow hover:bg-white p-10'>
                            <div className='text-primary text-3xl'>{items.icon}</div>
                            <h1 className='text-2xl font-light capitalize '>{items.tittle}</h1>
                            <p className='text-center'>{items.desc}</p>
                        </motion.div>


                    ))
                }
            </div>

        </div>
    )
}

export default Equipment
