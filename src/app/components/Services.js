import React from 'react'
import Image from 'next/image'
import { serviceContent } from '../shared/page'
import Card from './Card'


const Services = () => {
  return (
    <section>
        <div className='px-10 py-20 bg-light'>
            <div className='container px-4 mx-auto'>
                <div className='max-w-full mx-auto text-center mb-20'>
                {serviceContent.heading.headingSubTitle && (
                    <span className="inline-block py-0.5 z-50 pl-3 text-heading 
                    font-semibold relative before:content-[''] before:absolute
                    before:w-2/3 before:bg-yellowLight before:left-0
                    before:top-0 before:bottom-0 before:z-[-1]">
                    {serviceContent.heading.headingSubTitle}
                    </span>
                )}

                {serviceContent.heading.headingTitle && (
                <h2 className='text-heading text-2xl lg:text-4xl
                font-bold mb-5'>
                    {serviceContent.heading.headingTitle}
                </h2>
                )}

                {/* {serviceContent.heading.headingTitle && (
                <p className='text-heading text-1xl
                 mb-5'>
                    {serviceContent.heading.description}
                </p>
                )} */}
                </div>
                <div className='grid grid-cols-1'>
                    <Card />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services