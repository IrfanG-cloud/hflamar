import React from 'react'
import Link from 'next/link'
const menuContent = {
    text:{
        heading: "TIME TO TRAVEL",
        description: "Look for new adventures"
    }
}

const Heading = () => {
  return (
    <section className='container mx-auto'>
    <div className='px-20 lg:mt-24 lg:mb-0 text-center '>

    {menuContent.text.heading && (<h1 className="text-4xl mt-6
    lg:text-4xl font-bold text-heading text-white 
   ">{menuContent.text.heading}</h1>)}

   {menuContent.text.description && (<p className="text-1xl lg:my-4 text-white lg:mb-10">
   {menuContent.text.description}</p>)}

   <div className=''>
<Link href="#" className="mt-4 cm: py-2 px-2 lg:py-3 lg:px-4 
bg-white text-black rounded-lg duration-300
transition-all ease-in-out hover:bg-[#000] hover:text-white
hover:shadow-lg inline-block relative top-0 hover:-top-2
">BOOK NOW</Link>

</div>
    </div>
  </section>
  )
}

export default Heading