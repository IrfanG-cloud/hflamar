import React from 'react'
import Link from 'next/link'
const menuContent = {
    text:{
        heading: "Travel To The World",
        description: "Find your perfect place for Travel by HFlamar"
    }
}

const Heading = () => {
  return (
    <div className='container lg:w-6/12 px-20 my-28 lg:mb-0'>

    {menuContent.text.heading && (<h1 className="text-5xl 
    lg:text-5xl font-bold text-heading text-white
   ">{menuContent.text.heading}</h1>)}

   {menuContent.text.description && (<p className="leading-relaxed my-4 text-white mb-10">
   {menuContent.text.description}</p>)}

   <div className=''>
<Link href="#" className="mt-4 py-3 px-4
bg-white text-black rounded-lg duration-300
transition-all ease-in-out hover:bg-[#000] hover:text-white
hover:shadow-lg inline-block relative top-0 hover:-top-2
">How It Works?</Link>

</div>
</div>
  )
}

export default Heading