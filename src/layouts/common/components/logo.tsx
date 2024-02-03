'use client'

import Image from "@/components/image"

// ---------------------------------------------------

const Logo = () => {
  return (
    <div className='flex lg:flex-1'>
      <a href='#' className='-m-1.5 p-1.5'>
        <span className='sr-only'>SCK Shopping Mall</span>
        <Image
          className='h-10 w-auto'
          src='/logo2.png'
          alt='SCK Shopping Mall'
          width={40}
          height={40}
        />
      </a>
    </div>
  )
}

export default Logo
