'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import { useState } from 'react';
import { FaBars, FaTimesCircle} from "react-icons/fa";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
<nav className=" px-6 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl mt-4 ">
        <Link href="/">
            <Image src={logo} width={80} height={30}
                alt='FrameSec Logo' />
            </Link>
        </div>
        <div>
        <ul className={`lg:flex sm:flex-col lg:flex-row ${isOpen ? 'p-15 md:p-0 block' : 'hidden'} my-50 list-none lg:list-inline`}>
          <li className=" lg:mr-6 mb-2 lg:mb-0 ">
            <Link href="/" onClick={() => setIsOpen(!isOpen)} className="text-white border-b-2 border-yellow-500 text-yellow-500 hover:border-yellow-500 ">
              Home
            </Link>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/about" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 ">
              About
            </Link>
          </li>
          
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/service" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 ">
              Services
            </Link>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/contact" onClick={() => setIsOpen(!isOpen)} className="text-white hover:border-b-2 hover:border-yellow-500 ">
              Contact
            </Link>
          </li>
          <div className=''>
            <Link href="https://wa.me/message/IUIFOVZQVHNLB1" className="py-2 px-2 lg:py-3 lg:px-4 
            bg-green-500 rounded-lg duration-300
            transition-all ease-in-out text-white
            hover:shadow-lg inline-block relative -top-2 hover:-top-2
            ">Whatsapp Me</Link>
            </div>
        </ul>
        </div>
        
        
        <div className='md:hidden'>
            <button className='p-2 rounded-md outline-none text-2xl text-[var(--primary-color)]' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimesCircle /> : <FaBars />}
            </button>
        </div>
      </div>
    </nav>



    </>
  )
}

export default Navigation