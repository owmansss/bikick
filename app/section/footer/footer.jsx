import { facebook } from '@/public/icons'
import Image from 'next/image'
import React from 'react'

function Footer() {
  const icons = [
    {
      name: 'Facebook',
      icon: '/facebook.svg',
      href: 'facebook.com/owmansss',
    },
    {
      name: 'Instagram',
      icon: '/instagram.svg',
      href: 'https://www.instagram.com/ssyyyddd1/',
    },
    {
      name: 'Github',
      icon: '/github.svg',
      href: 'https://github.com/owmansss',
    },
  ]

  return (
    <footer className='min-w-screen h-[40vh] mx-0 grid border-t-2'>
      <div className='flex justify-around'>
        <div className='my-auto'>
          <Image
            src='/bg4.svg'
            width={100}
            height={100}
            alt='Bikick'
            className=''
          />
        </div>
        <div className='my-auto md:flex md:gap-3'>
          {icons.map(({ name, icon, href }) => {
            return (
              <ul className=''>
                <li className='flex gap-2 my-2 '>
                  <img
                    src={icon}
                    alt={name}
                    className='w-[25px] hover:cursor-pointer hover:duration-150'
                  />
                  <a href={href} className='hover: duration-150'>
                    {name}
                  </a>
                </li>
              </ul>
            )
          })}
        </div>
      </div>
      <div className='grid max-w-sm h-[10vh] leading-6 mx-auto mb-20'>
        <p className='text-[#333] p-3 text-center'>
          <span className='text-[#FFB000]'>
            Subscribe to Our Newsletter <br />
          </span>
          Stay updated on new releases and special offers
        </p>
        <form className='flex flex-row p-1 border-2 focus-within:outline-1 bg-white ml-3 rounded-md'>
          <input
            type='text'
            className='border-none grow-[2] focus:outline-none p-1'
            placeholder='company@domain.com'
          />
          <button className='border-2 p-1 rounded-xl bg-[#333] text-white'>
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
