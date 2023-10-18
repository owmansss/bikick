'use client'

import Link from 'next/link'
import { React, useState } from 'react'
import Hamburger from './hamburger'
const Navbar = () => {
  const navlinks = [
    {
      index: 1,
      name: 'News',
      href: '#',
    },
    {
      index: 2,
      name: 'About',
      href: '#',
    },
    {
      index: 3,
      name: 'Login / Sign up',
      href: '/Auth',
    },
  ]
  const [open, setOpen] = useState(false)

  return (
    <header className=''>
      <div className='border-b-2 mb-5 border-gray-500 w-full h-[7vh] my-3 mx-auto bg-transparent flex justify-around'>
        <Link href='/' className='flex flex-row items-center gap-3'>
          <img src='/bg4.svg' alt='home' className='h-full' />
          Bikick
        </Link>
        <div className='hidden md:flex h-auto w-1/5 md:w-1/3 md:justify-between  md:items-center'>
          {navlinks.map(({ index, name, href }) => {
            return (
              <Link key={index} href={href}>
                {name}
              </Link>
            )
          })}
        </div>
        <button
          className='md:hidden'
          onClick={() => {
            setOpen(!open)
          }}
        >
          Menu
        </button>
      </div>
      <div
        className={`absolute top-0 w-full h-[30vh] flex-col justify-around items-center bg-white border-2 ${
          open ? 'flex' : 'hidden'
        } `}
      >
        {navlinks.map(({ name, index, href }) => {
          return (
            <div key={index} className='border-t-2 '>
              <Hamburger name={name} href={href} />
            </div>
          )
        })}
        <button
          className='border-2'
          onClick={() => {
            setOpen(!open)
          }}
        >
          Close
        </button>
      </div>
    </header>
  )
}

export default Navbar
