'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const Navigation = () => {
    
  return (
    <>
        <header className='px-10'>
            <div className='container px-4 mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div>
                        <Link href="/">
                        <Image src={logo} width={137} height={30}
                        alt='FrameSec Logo' />
                        </Link>
                    </div>

                    {/* Navigation */}
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
        </header>

    </>
  )
}

export default Navigation