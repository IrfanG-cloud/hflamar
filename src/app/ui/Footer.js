import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' bg-[#222021] px-10'>
      <div className='justify-between px-6 py-10 md:flex lg:flex'>
        <div className='text-[#B9BBB6] pointer py-4 text-center md:text-start'> 
          <div className='' >
          <h3 className='text-2xl font-bold mb-2 '>hflamar</h3>
          <p className='py-4'>Small, artisan label that offers a thoughtfully curated <br/>collection of high quality everyday essentials made.</p>
          </div>
         <div className='py-4 '>
          <Link href={"https://www.facebook.com/profile.php?id=100093621885797&mibextid=ZbWKwL"} className='mr-3'>
            <span className=' text-[#1DA1F2] hover:text-[#fff]'>Twitter</span>
          </Link> 
          <Link href={"https://www.facebook.com/profile.php?id=100086561906946&mibextid=ZbWKwL"} className='mr-3'>
          <span className=' text-[#3b5998] hover:text-[#fff]'>Facebook</span>
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=100093621885797&mibextid=ZbWKwL"} className='mr-3'>
          <span className=' text-[#25d366] hover:text-[#fff]'>Whatsapp</span>
          </Link>
          </div>
        </div>


        <div className='text-[#B9BBB6] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Company</h3>
          <ul className=''>
            <Link href=""><li className=' text-[#B9BBB6] hover:text-[#fff] mb-2'>About</li></Link>
            <Link href=""><li className=' text-[#B9BBB6] hover:text-[#fff] mb-2'>Term of use</li></Link>
            <Link href=""><li className=' text-[#B9BBB6] hover:text-[#fff] mb-2'>Privacy Policy</li></Link>
          </ul>
        </div>
        <div className='text-[#B9BBB6] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Support</h3>
          <ul className=''>
            <Link href="" className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>Support </li></Link>
            <Link href={"https://api.whatsapp.com/send?phone=963995817380"} className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>24h Service</li></Link>
            <Link href={"https://api.whatsapp.com/send?phone=963995817380"} className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>Quick Chat</li></Link>
            <Link href="" className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>How it works</li></Link>
            <Link href="" className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>Contact us</li></Link>
          </ul>
        </div>
        <div className='text-[#D9DDDC] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Contact</h3>
          <ul className=''>
            <Link href={"https://api.whatsapp.com/send?phone=963995817380"} className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>Whatsapp </li></Link>
            <Link href={"https://api.whatsapp.com/send?phone=963995817380"} className=' text-[#B9BBB6] hover:text-[#fff] mb-2'><li>Support 24h</li></Link>
            
          </ul>
        </div>
      </div>
    <div className="text-center text-[#B9BBB6] border-t-2 border-[#48494B] py-4">
          All right reserved &copy; hflamar | by Irfan G. {(new Date()).getFullYear()}
    </div>
    </div>
  )
}
