/* eslint-disable @next/next/no-img-element */
import { ProductDetailProp } from '../view'

const ProductImage = (product: ProductDetailProp) => {
  return (
    <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
      <div className='aspect-h-3 aspect-w-4 hidden overflow-hidden rounded-lg lg:block'>
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className='h-full w-full object-cover object-center'
        />
      </div>
    </div>
  )
}

export default ProductImage
