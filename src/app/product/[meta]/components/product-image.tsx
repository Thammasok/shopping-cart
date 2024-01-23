'use client'

import Image from 'next/image'
import { ProductDetailProps } from '@/app/product/[meta]/view'

// ----------------------------------------------------------------------

const ProductImage = (product: ProductDetailProps) => {
  return (
    <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
      <div className='aspect-h-2 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          width={767}
          height={575}
          className='h-full w-full object-cover object-center'
        />
      </div>
    </div>
  )
}

export default ProductImage
