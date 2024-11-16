import React from 'react'
import { NavbarList } from '../../mockData/Data'
import { CiSearch } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import Button from '../../Button/Button';
import { useState } from 'react';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <nav className='#Home'>
                <div className="container flex justify-between items-center py-4 md:py-8 px-10 md:px-4">
                    {/* logo section */}
                    <div className='uppercase text-2xl flex items-center font-semibold'>
                        <CgGym />
                        <h4>coders</h4>
                        <h4 className='text-orange-400'>gym</h4>
                    </div>

                    {/* menu section */}
                    <div className='hidden md:block '>
                        <ul className='flex gap-4 items-center '>
                            {
                                NavbarList.map((items) => (
                                    <li key={items.id} className='hover:text-secondary cursor-pointer' href={items.link}>{items.title}</li>
                                ))
                            }
                        </ul>

                    </div>
                    {/* icon section */}
                    <div className='flex justify-center items-center gap-4 text-2xl font-semibold '>
                        {/* <button>login</button> */}
                        <CiSearch className='hover:scale-110 duration-75 p-1 hover:bg-secondary text-3xl rounded-full hover:text-white' />
                        <FaShoppingCart className='hover:scale-110 duration-75 p-1 hover:bg-secondary text-3xl rounded-full hover:text-white' />
                        <Button className='md:hidden' />
                        <RiMenu3Fill onClick={()=>setOpen(!open)} className='md:hidden cursor-pointer hover:text-secondary hover:scale-110 duration-75' />
                    </div>
                </div>
            </nav>
            {/* mobile sidebar section */}
            <ResponsiveMenu open={open}/>
        </>
    )
}

export default Navbar
