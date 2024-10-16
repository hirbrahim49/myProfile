import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between fixed z-999 w-full h-[70px] bg-white '>
      <div className='w-[80%] mx-auto flex items-center justify-between'>
        <section className='font-serif text-[35px] font-bold'>HORDEYEMI</section>
        <section className='flex gap-[20px]  justify-between w-[50%]'>
          <Link href='#' className='hover:underline font-sans   md: text-[15px]   lg:text-[25px] '>About</Link>
          <Link href='#' className='hover:underline font-sans   md: text-[15px]   lg:text-[25px]'>Experience</Link>
          <Link href='#' className='hover:underline  font-sans   md: text-[15px]   lg:text-[25px]'>Projects</Link>
          <Link href='#' className='hover:underline font-sans   md: text-[15px]   lg:text-[25px]'>Contact</Link>
        </section>
      </div>
    </header>
  )
}

export default Navbar
