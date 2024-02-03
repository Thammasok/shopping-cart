'use client'

import ProductItem from '@/app/cart/components/product-item'
import useCartStore from '@/app/cart/hooks/use-cart-store'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

const OrderList = () => {
  const { cart } = useCartStore()

  return (
    <>
      <div className='w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6'>
        <Header3>Orders</Header3>

        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {cart.map((product) => (
            <ProductItem
              key={`product-item-${product.id}`}
              isHiddenLable
              {...product}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default OrderList
