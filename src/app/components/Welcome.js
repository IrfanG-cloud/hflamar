import React from 'react'
import Image from 'next/image'
import Icon from '../../../public/images/d1.jpg'
import Icon1 from '../../../public/images/iraq.jpg'
import Icon2 from '../../../public/images/khana.jpg'
import Icon3 from '../../../public/images/oman.jpg'

import Link from 'next/link';


const welcomeContent = {
    text:{
        subheading: 'Our Destination',
        heading: "Best Destination Tour with Hflamar",
    }
}


const Welcome = () => {
  return (
    
        <div className='pt-10'>
            <div className='container mx-auto'>
                {/* <div className='max-w-full mx-auto text-center mb-20'>
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
                </div> */}
                <div className='grid grid-cols-1'>
                <div className='w-full lg:flex lg:justify-between'>
        <div className="">
            <Image src={Icon1} width={200} height={100} alt='hflamar.com' className='rounded-2xl'/>
            
        </div>
        <div className="ml-3 mt-4 lg:mt-0"> 
        <Link href="#">
            <Image src={Icon} width={200} height={100} alt='hflamar.com' className='rounded-2xl'/>
        </Link>
        </div>
        <div className="ml-3 mt-4 lg:mt-0"> 
        <Link href="#">
            <Image src={Icon2} width={200} height={100} alt='hflamar.com' className='rounded-2xl'/>
        </Link>
        </div>
        <div className="ml-3 mt-4 lg:mt-0 "> 
        <Link href="#">
            <Image src={Icon3} width={200} height={100} alt='hflamar.com' className='rounded-2xl'/>
        </Link>
        </div>
    </div>
                </div>
            </div>
        </div>
  )
}

export default Welcome