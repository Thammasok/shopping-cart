'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ButtonLink from '@/components/button/button-link'
import ButtonContiueShopping from '@/app/cart/components/button-continue'
import Text from '@/components/typography/text'
import ShoppingHeader from '@/app/cart/components/shopping-header'
import ProductList from '@/app/cart/components/product-list'
import SubTotal from './components/sub-total'

const products = [
  {
    id: 1,
    name: '43 Piece dinner set',
    meta: '43-piece-dinner-set',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: '43 Piece dinner set.',
    price: 35.0,
    amount: 1
  },
  {
    id: 2,
    name: 'Steel Office Table',
    meta: 'steel-office-table',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'Steel Office Table.',
    price: 52,
    amount: 2
  }
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
                      <ShoppingHeader
                        closeShoppingCart={() => setOpenShoppingCart(false)}
                      />

                      <ProductList products={products} />
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <SubTotal total={87} />

                      <Text size='sm' className='mt-0.5 text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </Text>

                      <ButtonLink href='/checkout' className='mt-6'>
                        Checkout
                      </ButtonLink>

                      <div className='mt-6 flex justify-center flex-col items-center text-center text-sm text-gray-500'>
                        <Text className='mb-3'>or</Text>
                        <ButtonContiueShopping
                          onClick={() => setOpenShoppingCart(false)}
                        />
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
