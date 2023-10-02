'use client'

import React, {useRef, useCallback, useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import { Swiper, SwiperSlide } from'swiper/react'
import 'swiper/css'



const blogContent = {
    heading: {
        headingSubTitle: "Our Writeups",
        headingTitle: "Our Latest Articles",
        description: 'you are going to use a passage of Lorem Ipsum, you need to be sure there isnot anything embarrassing hidden in the middle of text'
    },
    recentBlog: [
        {
            permalink: "#_",
            featuredImg: "/images/person1.jpg",
            title: "Lorem Ipsum Visit visa",
            excerpt: "Learn the best practices and simple steps to safeguard your home",
            author: {
                img: "/images/person1.jpg",
                name: "Jordan samson",
                titleRole: "Editor, Co-Founder"
            }
        },
        {
            permalink: "#_",
            featuredImg: "/images/post1.jpg",
            title: "Lorem Ipsum Visit visa",
            excerpt: "Learn the best practices and simple steps to safeguard your home",
            author: {
                img: "/images/person1.jpg",
                name: "Jordan samson",
                titleRole: "Editor, Co-Founder"
            }
        },
        {
            permalink: "#_",
            featuredImg: "/images/post1.jpg",
            title: "Lorem Ipsum Visit visa",
            excerpt: "Learn the best practices and simple steps to safeguard your home",
            author: {
                img: "/images/person1.jpg",
                name: "Jordan samson",
                titleRole: "Editor, Co-Founder"
            }
        },
    ],
    cta: {
        href: "#_",
        label: "To View all posts",
        labelSuffix: "click here",
    }
}
const Blog = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(null);
    const [isBeginning, setIsBeginning] = useState(null);
    const sliderRef = useRef(null);

    useState(() => {
        setIsEnd(sliderRef.current?.swiper.isEnd);
        setIsBeginning(sliderRef.current?.swiper.isBeginning);
    })
    
    
    const prevHandler = useCallback(() => {
        if(!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    })
    
    const nextHandler = useCallback(() => {
        if(!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    })
    

  return (
    <section className='px-10 overflow-x-hidden'>
        <div className="contianer px-4 mx-auto">
            <div className='lg:flex justify-between items-center mb-10'>
                <div className='lg:w-5/12 mb-10 lg:mb-0'>
                {blogContent.heading.headingSubTitle && (
                        <span className="inline-block py-0.5 z-50 pl-3 text-heading 
                        font-semibold relative mb-7 before:content-[''] before:absolute
                        before:w-2/3 before:bg-yellowLight before:left-0
                        before:top-0 before:bottom-0 before:z-[-1]">
                        {blogContent.heading.headingSubTitle}
                        </span>
                    )}
                    
                    {blogContent.heading.headingTitle && (
                        <h2 className='text-heading text-2xl lg:text-4xl
                        font-bold mb-5'>
                            {blogContent.heading.headingTitle}
                        </h2>
                    )}

                    {blogContent.heading.description && (
                        <p className='text-body leading-relaxed'>
                            {blogContent.heading.description}
                        </p>
                    )}
                </div>

                <div className='lg:w-5/12 text-left lg:text-right'>
                    <div className='inline-flex ml-auto space-x-3'>
                        <div onClick={prevHandler} className={`${ isBeginning == true ? "opacity-30 bg-yelloLight cursor-auto" 
                        : "opacity-100 hover:bg-redLight"} group transition-all duration-300
                        ease-in-out w-12 h-12 cursor-pointer bg-yellowLight
                        rounded-full inline-flex justify-center items-center`}>
                            <BiChevronLeft className={`text 3xl text-[#ffffff] transition-all duration-300 
                            ease-in-out group-hover:text-white ${isBeginning == true ?
                            "group-hover:!text-primary" : 
                            "group-hover:text-white"}`} />
                        </div>

                        <div onClick={nextHandler} className={`${ isBeginning == true ? "opacity-30 bg-yellowLight cursor-auto" 
                        : "opacity-100 hover:bg-yellowLight"} group transition-all duration-300
                        ease-in-out w-12 h-12 cursor-pointer bg-redLight
                        rounded-full inline-flex justify-center items-center`}>
                            <BiChevronRight className={`text 3xl text-[#ffffff] transition-all duration-300 
                            ease-in-out group-hover:text-white ${isEnd == true ?
                            "group-hover:!text-redLight" : 
                            "group-hover:text-white"}`} />
                        </div>
                    </div>
                </div>
            </div>

            <Swiper breakpoints={{
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
                968: {
                    width: 968,
                    slidesPerView: 2,
                }
            }}
            ref={sliderRef}
            speed={700}
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
            className="z-50 py-32 mb-24 relative flex items-stretch
            !overFlow-visible before:content-['']
            before:z-50 before:py-32 before:right-full before:w-screen
            before:absolute before:-top-5
            before:-bottom-5 before:bg-light">

                {blogContent.recentBlog.map((blog, idx) => {
                    <SwiperSlide className="overflow-visible h-full" key={blog.title}>
                        <div className='p-5 rounded-lg bg-white relative
                        mt-10'>
                            <Link href={blog.permalink} 
                            className='relative -mt-10 inline-block overflow-hidden rounded-lg
                            mb-4'>
                                <Image href={blog.featuredImg} width={782}
                                height={467} alt='hflamar.com' />
                            </Link>
                            <h2 className='text-heading text-lg font-bold
                            leading-7 mb-5'>
                                <Link href={blog.permalink} className='relative
                                text-heading'>
                                    {blog.title}
                                </Link>
                            </h2>

                            <p className='relative mb-6'>
                                {blog.excerpt}
                            </p>
                            
                            <div className='flex items-center space-x-4'>
                                <div className='flex-shrink-0'>
                                    <Image src={blog.author.img} width={50}
                                    height={50} alt='hflamar.com' 
                                    className='rounded-full object-cover w-14 h-14'/>
                                </div>
                                <div className='leading-5'>
                                    <strong className='text-primary'>
                                        {blog.author.name}
                                    </strong>
                                    <span className='block text-sm'>
                                        {blog.author.titleRole}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Blog