import React from 'react'
import Image from 'next/image'
import Icon from '../../../public/images/Dubai.jpg'
import Icon1 from '../../../public/images/iraq.jpg'
import Icon2 from '../../../public/images/khana.jpg'
import Icon3 from '../../../public/images/oman.jpg'

import Link from 'next/link';


const welcomeContent = {
    text:{
        subheading: 'Our Packages',
        heading: "Special Dicount with Hflamar",
    },
    images: {
        icon: '/images/dubai.jpg',
        icon1: '/images/uraq.jpg',
        icon2: '/images/khana.jpg',
        icon3: '/images/oman.jpg',
    
    }
}


const Welcome = () => {
  return (
    <section>
        <div className='px-10 py-20 bg-white'>
            <div className='container mx-auto'>
                <div className='max-w-full mx-auto text-center mb-20'>
                {welcomeContent.text.subheading && (
                    <span className="inline-block py-0.5 z-50 pl-3 text-heading 
                    font-semibold relative before:content-[''] before:absolute
                    before:w-2/3 before:bg-yellowLight before:left-0
                    before:top-0 before:bottom-0 before:z-[-1]">
                    {welcomeContent.text.subheading}
                    </span>
                )}

                {welcomeContent.text.heading && (
                <h2 className='text-heading text-2xl lg:text-4xl
                font-bold mb-5'>
                    {welcomeContent.text.heading}
                </h2>
                )}
                </div>
                <div className='grid grid-cols-1'>
                <div className='w-full lg:flex lg:justify-between'>
        <div className="shadow-lg bg-white ml-6 mb-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">
            <Image src={Icon} width={250} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4 ">United Arab Emirates</h2>
            
        </div>
        <div className="shadow-lg bg-white ml-6 mb-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">
            <Image src={Icon1} width={250} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4 ">Iraq</h2>
            
        </div>
        <div className="shadow-lg ml-6 mb-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center"> 
        <Link href="#">
            <Image src={Icon2} width={250} height={100} alt='hflamar.com'/>
            <h2 className="font-bold text-xl">Saudi Arabia</h2>
        </Link>
        </div>
        <div className="shadow-lg ml-6 mb-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center"> 
        <Link href="#">
            <Image src={Icon3} width={250} height={100} alt='hflamar.com'/>
            <h2 className="font-bold text-xl">Oman</h2>
        </Link>
        </div>
    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome;