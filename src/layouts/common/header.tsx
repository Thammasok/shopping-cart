'use client'

import { useState } from 'react'
import { Popover } from '@headlessui/react'
import {
  ArrowPathIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingCartIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import HeaderMenuMobile from '@/layouts/common/header-menu-mobile'
import Image from 'next/image'

// ----------------------------------------------------------------------

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon
  }
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon }
]

type HeaderProps = {
  setShoppingCartOpen: (set: boolean) => void
}

const Header = ({ setShoppingCartOpen }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              className='h-8 w-auto'
              src='/logo.svg'
              alt='Your Company'
              width={38}
              height={32}
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
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
            Company
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:gap-x-12 lg:justify-end'>
          <button
            type='button'
            onClick={() => setShoppingCartOpen(true)}
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            <ShoppingCartIcon className='h-6 w-6 absolute' aria-hidden='true' />
            <span className='relative bg-red-500 text-xs text-white rounded-md p-1 left-4 -top-[10px]'>
              5
            </span>
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

      {/* Mobile menu */}
      <HeaderMenuMobile
        products={products}
        callsToAction={callsToAction}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}

export default Header
