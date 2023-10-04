import React from 'react'
import Link from 'next/link'
const menuContent = {
    text:{
        heading: "Find The Best Trips Within Your Budget",
        description: "HFlamar is moving beyond tourim to allow you to truly engage with your world, going behind the headlines and supporting advocates and activists fighting for human rights around the world"
    }
}

const Heading = () => {
  return (
    <section className='container mx-auto'>
    <div className='lg:w-6/12 px-20 mt-20 lg:mb-0'>

    {menuContent.text.heading && (<h1 className="text-4xl 
    lg:text-4xl font-bold text-heading text-white 
   ">{menuContent.text.heading}</h1>)}

   {menuContent.text.description && (<p className="text-[14px] my-4 text-white mb-10">
   {menuContent.text.description}</p>)}

   <div className=''>
<Link href="#" className="mt-4 py-3 px-4
bg-white text-black rounded-lg duration-300
transition-all ease-in-out hover:bg-[#000] hover:text-white
hover:shadow-lg inline-block relative top-0 hover:-top-2
">How It Works?</Link>

</div>
    </div>
  </section>
  )
}

export default Heading