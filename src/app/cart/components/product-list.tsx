'use client'

import ProductItem from '@/app/cart/components/product-item'

// ----------------------------------------------------------------------

type ProductListProps = {
  products: Array<{
    id: number
    name: string
    meta: string
    imageSrc: string
    imageAlt: string
    price: number
    amount: number
  }>
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {products.map((product) => (
            <ProductItem
              key={`product-item-${product.id}`}
              isHiddenLable
              {...product}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList
