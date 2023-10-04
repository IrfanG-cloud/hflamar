'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import { useState } from 'react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
        {/* <header className='px-10'>
            <div className='container px-4 mx-auto'>
                <div className='flex justify-between items-center'>
                
                    <div>
                        <Link href="/">
                        <Image src={logo} width={137} height={30}
                        alt='FrameSec Logo' />
                        </Link>
                    </div>

                    <div className='hidden lg:block'>
                        <ul className='flex space-x-7 text-white'>
                            <li>
                                <Link href="/" className='border-b-2 border-[#D4AF37] hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500'>Home</Link>
                            </li>
                            <li>
                                <Link href="/service" className='hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500'>Services</Link>
                            </li>
                            <li>
                                <Link href="/about" className='hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500'>About</Link>
                            </li>
                            <li>
                                <Link href="/contact"className='hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header> */}

<nav className="px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
        <Link href="/">
            <Image src={logo} width={137} height={30}
                alt='FrameSec Logo' />
            </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <span className="mr-1">Menu</span>
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`} />
          </button>
        </div>
        <ul className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} list-none lg:list-inline`}>
          <li className="lg:mr-6 mb-2 lg:mb-0 ">
            <Link href="/" className="text-white hover:border-b-2 hover:border-yellow-500 ">
              Home
            </Link>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/about" className="text-white hover:border-b-2 hover:border-yellow-500 ">
              About
            </Link>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/service" className="text-white hover:border-b-2 hover:border-yellow-500 ">
              Services
            </Link>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <Link href="/contact" className="text-white hover:border-b-2 hover:border-yellow-500 ">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    </>
  )
}

export default Navigation