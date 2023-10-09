import React from 'react'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className=' bg-[#222021] px-10'>
      <div className='justify-between px-6 py-10 md:flex lg:flex'>
        <div className='text-[#B9BBB6] pointer py-4 text-center md:text-start'> 
          <div className='' >
          <Link href="/">
            <Image src={logo} width={80} height={30}
                alt='FrameSec Logo' />
          </Link>
          <p className='py-4 text-[14px]'>We help you travel without worries. We pick the <br/>best spots for you to see.</p>
          </div>
         
        </div>

        <div className='text-[#B9BBB6] py-4 text-center md:text-start'>
          <h3 className='text-2xl mb-4'>Support</h3>
          <ul className=''>
            <Link href={"/about"} className=' text-[#B9BBB6] text-[14px] hover:text-[#fff] mb-2'><li>About</li></Link>
            <Link href={"https://api.whatsapp.com/message/IUIFOVZQVHNLB1?autoload=1&app_absent=0"} className=' text-[#B9BBB6] text-[14px] hover:text-[#fff] mb-2'><li>Quick Chat</li></Link>
            <Link href={"/contact"} className=' text-[#B9BBB6] hover:text-[#fff] text-[14px] mb-2'><li>Contact us</li></Link>
          </ul>
        </div>
        <div className='text-[#D9DDDC] py-4 text-center md:text-start'>
          <h3 className='text-2xl mb-4'>Contact</h3>
          <ul className=''>
            <Link href={"https://api.whatsapp.com/message/IUIFOVZQVHNLB1?autoload=1&app_absent=0"} className=' text-[#B9BBB6] hover:text-[#fff] text-[14px] mb-2'><li>Whatsapp </li></Link>
            <Link href={"https://api.whatsapp.com/send?phone=963995817380"} className=' text-[#B9BBB6] hover:text-[#fff] text-[14px] mb-2'><li>Support 24h</li></Link>
            
          </ul>
        </div>

        <div className='text-[#D9DDDC] py-4 text-center md:text-start'>
          <h3 className='text-2xl mb-4'>Social</h3>
          <div>
          <Link href={"https://www.instagram.com/hf.lamar/?igshid=MzMyNGUyNmU2YQ%3D%3D"} className='mr-3'>
            <span className=' text-[#1DA1F2] hover:text-[#fff]'>Tiktok</span>
          </Link> 
          </div>
          <div>
          <Link href={"https://www.facebook.com/profile.php?id=100086561906946&mibextid=ZbWKwL"} className='mr-3'>
          <span className=' text-[#3b5998] hover:text-[#fff]'>Facebook</span>
          </Link>
          </div>
          <div>
          <Link href={"https://wa.me/message/IUIFOVZQVHNLB1"} className='mr-3'>
          <span className=' text-[#25d366] hover:text-[#fff]'>Whatsapp</span>
          </Link>
          </div>
          <div>
          <Link href={"https://www.instagram.com/hf.lamar/?igshid=MzMyNGUyNmU2YQ%3D%3D"} className='mr-3'>
          <span className=' text-[#E600E5] hover:text-[#fff]'>Instagram</span>
          </Link>
          </div>
          
          </div>
      </div>
    <div className="text-center text-[#B9BBB6] border-t-2 text-[13px] border-[#48494B] py-4">
          All right reserved &copy; hflamar | by Irfan G. {(new Date()).getFullYear()}
    </div>
    </div>
  )
}
