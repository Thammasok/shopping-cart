'use client'

import ProductItem from '@/app/cart/components/product-item'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

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

const OrderList = () => {
  return (
    <>
      <div className='w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6'>
        <Header3>Order</Header3>

        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {products.map((product) => (
            <ProductItem key={`product-item-${product.id}`} isHiddenLable {...product} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default OrderList
