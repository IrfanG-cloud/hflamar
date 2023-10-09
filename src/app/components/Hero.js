import React from 'react'
import Image from 'next/image'
import Welcome from './Welcome'

const heroContent = {
    text:{
        subheading: 'Welcome To HFlamar',
        heading: "About HFlamar",
        description:  "At HFlamar, we help you travel without worries. We pick the best spots for you to see. Our team plans everything, so you can just relax. Traveling is easier and more fun with us. "
    },
    images: {
        img1: '/images/img1.jpg',
        img2: '/images/img2.jpg',
        img3: '/images/img3.jpg',
        img4: '/images/img4.jpg',
        img5: '/images/img5.jpg',
        img6: '/images/img6.jpg',
        img7: '/images/img7.jpg',
        img8: '/images/img8.jpg',
        img9: '/images/img9.jpg',
    }
}

const Hero = () => {
  return (
    <section className='py-20 px-6 lg:px-20 bg-white'>
        <div className='container mx-auto'>
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-6/12 mb-10 lg:mb-0'>
                    
                        {heroContent.text.subheading && (
                        <span className="inline-block py-0.5 z-50 pl-3 text-heading 
                    font-semibold relative before:content-[''] before:absolute
                    before:w-2/3 before:bg-yellowLight before:left-0
                    before:top-0 before:bottom-0 before:z-[-1]">
                        {heroContent.text.subheading}</span>)}

                         {heroContent.text.heading && (<h1 className="text-4xl 
                         lg:text-5xl font-bold text-heading
                        ">{heroContent.text.heading}</h1>)}

                        {heroContent.text.description && (<p className="leading-relaxed my-4">
                        {heroContent.text.description}</p>)}

                        <Welcome />
                </div>

                <div className="lg:w-6/12 space-y-2 ">
                    <div className="flex space-x-2 items-stretch justify-center">
                        <div className="w-4/12 ">
                            {heroContent.images.img5 && (
                                <Image src={heroContent.images.img5}
                                width={406} height={406} alt="lamar.com"
                                className="object-cover h-full w-full rounded-2xl duration-300
                                transition-all ease-in-out hover:bg-[#c30010]
                                hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                            )}
                        </div>
                        <div className="w-4/12 self-end space-y-2">
                                <div className="grid grid-cols-2 gap-2">
                                    {heroContent.images.img2 && (
                                        <div>
                                            <Image src={heroContent.images.img2}
                                            width={437} height={437}
                                            alt="hflamar.com"
                                            className="object-cover h-full w-full
                                            rounded-2xl duration-300
                                            transition-all ease-in-out hover:bg-[#c30010]
                                            hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                                        </div>
                                    )}
                                    <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>
                                    
                                    <div className="bg-redLight rounded-2xl rounded-bl-[200px]"></div>
                                    {heroContent.images.img3 && (
                                        <div>
                                            <Image src={heroContent.images.img3}
                                            width={374} height={392}
                                            alt="hflamar.com"
                                            className="object-cover h-full 
                                            w-full rounded-2xl duration-300
                                            transition-all ease-in-out hover:bg-[#c30010]
                                            hover:shadow-lg inline-block relative top-0 hover:-top-2"
                                            />
                                        </div>
                                    )}
                                    
                                </div>
                        </div>
                    </div>
                    
                    <div className="flex space-x-2 justify-center">
                        <div className="w-2/12">
                            <div className='grid grid-col-4 gap-2'>
                                {heroContent.images.img6 && (
                                    <div>
                                        <Image src={heroContent.images.img6}
                                        width={394} height={394}
                                        alt="hflamar.com" 
                                        className="object-cover h-full w-full
                                        rounded-2xl duration-300
                                        transition-all ease-in-out hover:bg-[#c30010]
                                        hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-2/12">
                    
                            {heroContent.images.img7 && (
                                <Image src={heroContent.images.img7}
                                width={394} height={394}
                                alt="hflamar.com"
                                className="object-cover h-full w-full
                                rounded-2xl duration-300
                                transition-all ease-in-out hover:bg-[#c30010]
                                hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                            )}
                        
                        </div>
                        <div className="w-2/12">
                    
                                {heroContent.images.img8 && (
                                    <div>
                                        <Image src={heroContent.images.img8}
                                        width={394} height={394}
                                        alt="hflamar.com" 
                                        className="object-cover h-full w-full
                                        rounded-2xl duration-300
                                        transition-all ease-in-out hover:bg-[#c30010]
                                        hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                                    </div>
                                )}
                                
                        </div>
                        <div className="w-2/12">
                        
                                {heroContent.images.img9 && (
                                    <div>
                                        <Image src={heroContent.images.img9}
                                        width={394} height={394}
                                        alt="hflamar.com" 
                                        className="object-cover h-full w-full
                                        rounded-2xl duration-300
                                        transition-all ease-in-out hover:bg-[#c30010]
                                        hover:shadow-lg inline-block relative top-0 hover:-top-2"/>
                                    </div>
                                )}
                        </div>
                     
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero