'use client'

// components/ContactForm.js
import { useState } from 'react';
import Link from 'next/link';
import MyGoogleMap from './MyGoogleMap';
import Image from 'next/image';
import Map from '../../../public/images/map.jpg'

const formContent = {
    text:{
        description: "We'd love to discuss how we can apply our approach to improve the health of your community.",
        heading: "Contact us",
        
    }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
  };

  return (
    <section className='bg-light container mx-auto'>
        
        <div className='py-20 px-6 lg:px-20'>
                {/* <div>
                <MyGoogleMap />
                </div> */}
            <div className='lg:flex'> 
                <div className='w-full lg:w-6/12 mb-10 px-6 lg:mb-0'>
                    {formContent.text.heading && (<h1 className="text-4xl
                        lg:text-5xl font-bold text-heading
                    ">{formContent.text.heading}</h1>)}
                    {formContent.text.description && (<span>{formContent.text.subheading}</span>)}
                    {formContent.text.description && (<p className="my-4">
                    {formContent.text.description}</p>)}
                    
                    <div className='mt-10'>
                    <p className='pt-1'>P.O Box : 14323</p>
                    <p className='pt-1'>Dubai, United Arab Emirates</p>
                    <p className='pt-1'> Tel: +971 4 3476855</p>
                    <Link href="https://wa.me/message/IUIFOVZQVHNLB1"><p className='pt-1'> Whatsapp: +971 50 142 1635</p></Link>
                    <p className='pt-1'> Email: hrlamar55@gmail.com</p>
                    
                    </div>
                    

            </div>
                <div className='w-full lg:w-6/12 lg:m-10'>
                <div>
                        <Link href="https://go.2gis.com/goqjq2"><Image src={Map} width={700} height={400} alt="map"></Image></Link>
                    </div>
                    {/* <form onSubmit={handleSubmit} className="max-w-lg bg-white mx-auto p-10 border rounded-md">
                    <div className="my-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full h-20 border rounded-md"
                        />
                    </div>
                    <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-red">
                        Send
                    </button>
                    </form> */}
                </div>
            </div>
        </div>
    </section>
  );
}
