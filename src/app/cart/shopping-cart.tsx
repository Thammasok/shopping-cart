'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { convertCurrency } from '@/utils/currency'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: 90.0,
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: 32.0,
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
  }
  // More products...
]

// ----------------------------------------------------------------------

type ShoppingCartViewProps = {
  openShoppingCart: boolean
  setOpenShoppingCart: (open: boolean) => void
}

const ShoppingCartView = ({
  openShoppingCart,
  setOpenShoppingCart
}: ShoppingCartViewProps) => {
  return (
    <Transition.Root show={openShoppingCart} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpenShoppingCart}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shopping cart
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => setOpenShoppingCart(false)}
                          >
                            <span className='absolute -inset-0.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {products.map((product) => (
                              <li key={product.id} className='flex py-6'>
                                <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                  <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={94}
                                    height={94}
                                    className='h-full w-full object-cover object-center'
                                  />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col'>
                                  <div>
                                    <div className='flex justify-between text-base font-medium text-gray-900'>
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className='ml-4'>
                                        {convertCurrency(product.price)}
                                      </p>
                                    </div>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className='flex flex-1 items-end justify-between text-sm'>
                                    <div className='mt-4 '>
                                      <div className='relative flex items-center max-w-[8rem]'>
                                        <button
                                          type='button'
                                          id='decrement-button'
                                          data-input-counter-decrement='quantity-input'
                                          className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none'
                                        >
                                          <MinusIcon className='w-3 h-3 text-gray-900' />
                                        </button>
                                        <input
                                          type='text'
                                          id='quantity-input'
                                          data-input-counter
                                          aria-describedby='helper-text-explanation'
                                          className='bg-gray-100 border border-gray-300 border-x-0 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 transition-colors'
                                          placeholder='999'
                                          required
                                          value={product.quantity}
                                        />
                                        <button
                                          type='button'
                                          id='increment-button'
                                          data-input-counter-increment='quantity-input'
                                          className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-10 focus:ring-gray-100'
                                        >
                                          <PlusIcon className='w-3 h-3 text-gray-900' />
                                        </button>
                                      </div>
                                      <p
                                        id='helper-text-explanation'
                                        className='mt-2 text-sm text-gray-500'
                                      >
                                        {`มีสินค้าทั้งหมด ${convertCurrency(
                                          17088
                                        )} ชิ้น`}
                                      </p>
                                    </div>

                                    <div className='flex'>
                                      <button
                                        type='button'
                                        className='font-medium text-indigo-600 hover:text-indigo-500'
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        <p>{convertCurrency(122.0)}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                        <a
                          href='/checkout'
                          className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                        >
                          Checkout
                        </a>
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or{' '}
                          <button
                            type='button'
                            className='font-medium text-indigo-600 hover:text-indigo-500 flex gap-1 items-center'
                            onClick={() => setOpenShoppingCart(false)}
                          >
                            Continue Shopping
                            <ArrowRightIcon width={16} />
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShoppingCartView