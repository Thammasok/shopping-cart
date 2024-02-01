'use client'

import { Popover } from '@headlessui/react'
import {
  ArrowRightEndOnRectangleIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

import Image from 'next/image'
import useCartStore from '@/app/cart/useCartStore'
import Badge from '@/components/badge'

// ----------------------------------------------------------------------

type HeaderProps = {
  setShoppingCartOpen: (set: boolean) => void
}

const Header = ({ setShoppingCartOpen }: HeaderProps) => {
  const totalProduct = useCartStore((state) => state.cart)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
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
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <a
            href='/product'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Home
          </a>
          <a
            href='/product'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            For Kids
          </a>
          <a
            href='/product'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Categories
          </a>
        </Popover.Group>
        <div className='flex flex-1 gap-x-12 justify-end'>
          <button
            type='button'
            onClick={() => setShoppingCartOpen(true)}
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            <ShoppingCartIcon className='h-6 w-6 absolute' aria-hidden='true' />

            {totalProduct.length > 0 ? (
              <Badge total={totalProduct.length} />
            ) : null}
          </button>
          <a
            href='#'
            className='text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1'
          >
            Log in
            <ArrowRightEndOnRectangleIcon width={24} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
