'use client'

import Hero from './section/hero/hero'
import Produts from './section/Products/products'
import { motion, useSpring, useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Gallery from './section/gallery/gallery'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    
    <motion.main className='mx-auto'>
      <Hero />
      <Gallery />
      <Produts />
    </motion.main>
  )
}
