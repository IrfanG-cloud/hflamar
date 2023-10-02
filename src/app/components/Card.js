// components/Card.js
import React from 'react';
import Image from 'next/image';
import Icon from '../../../public/images/img1.jpg'
import Icon1 from '../../../public/images/img2.jpg'
import Icon2 from '../../../public/images/img3.jpg'
import Icon4 from '../../../public/images/img10.jpg'
import Icon3 from '../../../public/images/img11.jpg'
import Link from 'next/link';

function Card() {
  return (
    <div className='w-full flex'>
        <div className="shadow-lg bg-white ml-6 px-6 py-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">
            <Image src={Icon} width={200} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4 ">Visit Visa</h2>
            
        </div>
        <div className="shadow-lg bg-white ml-6 px-6 py-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">
            <Image src={Icon1} width={200} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4 ">Air Ticket</h2>
            
        </div>
        <div className="shadow-lg bg-white ml-6 px-6 py-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center"> 
        <Link href="#">
            <Image src={Icon2} width={200} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4">Hotel Booking</h2>
        </Link>
        </div>
        <div className="shadow-lg bg-white ml-6 px-6 py-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">
        <Link href="#">
            <Image src={Icon3} width={200} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4">Desert Safari</h2>
        
        </Link>
        </div>
        <div className="shadow-lg bg-white ml-6 px-6 py-6 duration-300
                    transition-all ease-in-out hover:border-2 hover:border-[#D4AF37]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1 text-center">  
        <Link href="#">
            <Image src={Icon4} width={200} height={150} alt='hflamar.com'/>
            <h2 className="font-bold text-xl mb-2 pt-4">Hajj & Umarah</h2>
            
        </Link>  
        </div>
    </div>
  );
}

export default Card;
