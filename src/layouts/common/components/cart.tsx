'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import useCartStore from '@/app/cart/hooks/use-cart-store'
import Badge from '@/components/badge'
import { HeaderProps } from '@/layouts/common/header'

// ---------------------------------------------------

const Cart = ({ setShoppingCartOpen }: HeaderProps) => {
  const totalProduct = useCartStore((state) => state.totalProduct)

  return (
    <button
      type='button'
      onClick={() => setShoppingCartOpen(true)}
      className='text-sm font-semibold leading-6 text-gray-900'
    >
      <ShoppingCartIcon className='h-6 w-6 absolute' aria-hidden='true' />

      <Badge total={totalProduct} />
    </button>
  )
}

export default Cart
