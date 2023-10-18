'use client'

import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { useRef, useEffect } from 'react'
import { products } from '@/app/constant'
import Image from 'next/image'

const Gallery = () => {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset:['center end', 'end start']
  })
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-100%'])

  return (
    <section className='w-full h-screen grid'>
      <h1 className='text-[5vh] place-self-center'>BEST OF OUR</h1>
      <h1 className='text-[5vh] place-self-center'>PRODUCTS</h1>
      <motion.div
        ref={targetRef}
        style={{ position: 'sticky', top: 0, left: 0, right: 0 }}
        className='sticky top-0 left-0 right-0 items-center overflow-hidden'
      >
        <motion.div style={{ x }} className='flex gap-4 group'>
          {products.map(({ img, id }) => {
            return (
              <Image
                key={id}
                src={img}
                width={500}
                height={300}
                alt='pic'
                className='rounded-xl'
              />
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Gallery
