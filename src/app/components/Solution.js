import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const solutionContent = {
    text: {
        headingSubTitle: 'Air Ticketing',
        headingTitle: 'Low price with Fly Dubai all over the world ',
        description: 'you are going to use a passage of Lorem Ipsum, you need to be sure there isnot anything embarrassing hidden in the middle of text'
    },
    images: {
        sol1: "/images/sol1.jpg",
        sol2: "/images/sol2.jpg",
        sol3: "/images/sol3.jpg",
    },
    experience: {
        years: "10+",
        label: "years of experience"
    }
}

const Solutions = () => {
  return (
    <section className='py-20 overflow-x-hidden px-10'>
        <div className='comtainer px-4 mx-auto'>
            <div className='lg:flex space-x-2 justify-between'>
                <div className="lg:w-6/12 relative b-10 lg:mb-0 z-10
                before:-[] before:w-screen before:right-1/2 before:rounded-tr-[200px] 
                before:z-[-1] before:rounded-br-3xl before:py-28 before-top-20 
                before:bg-white before:bottom-20">
                    <div className='flex gap-2'>
                        <div className='flex flex-col space-y-2'>
                            <div>
                                <Image src={solutionContent.images.sol1} 
                                width={326} height={340} className='object-cover h-full w-full rounded-lg duration-300
                                transition-all ease-in-out hover:bg-[#c30010]
                                hover:shadow-lg inline-block relative top-0 hover:-top-2' alt='hflamar.com'
                                />
                            </div>
                            <div className='flex justify-end gap-2'>
                                <div className='w-7/12 flex'>
                                    <div className='ml-auto mr-2'>
                                        <div className='bg-redLight w-10 h-10
                                        lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                                    </div>
                                    <div className='w-5/12'>
                                        <Image src={solutionContent.images.sol2} 
                                        width={226} height={240} className='object-cover h-full w-full rounded-lg duration-300
                                        transition-all ease-in-out hover:bg-[#c30010]
                                        hover:shadow-lg inline-block relative top-0 hover:-top-2' alt='hflamar.com'
                                        />
                                    </div>
                                </div>
                        </div>
                                 
                            </div>
                             {/* end col */}
                             <div className='mt-auto'>
                                <div className='flex flex-col gap-2'>
                                    <div>
                                        <div className='bg-yellowLight w-10h-10
                                        lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]'></div>
                                    </div>

                                    <div>
                                        <Image src={solutionContent.images.sol3} 
                                        width={247} height={273} 
                                        className='object-cover h-full w-full rounded-lg shadow-2xl duration-300
                                        transition-all ease-in-out hover:bg-[#c30010]
                                        hover:shadow-lg inline-block relative top-0 hover:-top-2' 
                                        alt='hflamar.com'
                                        />
                                    </div>

                                    {solutionContent.experience.label && (
                                        <div>
                                            <div className='p-4 lg:p-2 shadow-2xl
                                            rounded-lg bg-white leading-5 text-center'>
                                            <strong className='block font-bold
                                            text-primary text-xl lg:text-5xl'>
                                                {solutionContent.experience.years}
                                            </strong>
                                            <span>
                                                {solutionContent.experience.label}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                          
                        
                    </div>
                </div>
                <div className='lg:w-5/12 relative z-10'>
                    {solutionContent.text.headingSubTitle && (
                    <span className="inline-block py-0.5 z-50 pl-3 text-heading 
                    font-semibold relative mb-7 before:content-[''] before:absolute
                    before:w-2/3 before:bg-yellowLight before:left-0
                    before:top-0 before:bottom-0 before:z-[-1]">
                    {solutionContent.text.headingSubTitle}
                    </span>
                    )}

                    {solutionContent.text.headingTitle && (
                        <h2 className='text-heading text-2xl lg:text-4xl font-bold
                        mb-5'>
                            {solutionContent.text.headingTitle}
                        </h2>
                    )}
                    
                    {solutionContent.text.description && (
                        <p className='text-body leading-relaxed ab-10'>
                        {solutionContent.text.description}
                    </p>
                    )}
        
                    <div className=''>
                    <Link href="#" className="mt-4 py-3 px-4
                    bg-yellowLight text-white rounded-lg duration-300
                    transition-all ease-in-out hover:bg-[#c30010]
                    hover:shadow-lg inline-block relative top-0 hover:-top-1
                    ">How It Works?</Link>

                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Solutions