/* eslint-disable @next/next/no-img-element */
'use client'

// ----------------------------------------------------------------------

type ProductCardProps = {
  data: {
    id: number
    name: string
    meta: string
    imageSrc: string
    imageAlt: string
    price: string
    color: string
    href?: string
  }
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div key={data.id} className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            <a href={`/product/${data.meta}`}>
              <span aria-hidden='true' className='absolute inset-0' />
              {data.name}
            </a>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{data.color}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{data.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
