'use client'

import Header4 from '@/components/typography/header4'
import Text from '@/components/typography/text'
import { convertCurrency } from '@/utils/format'
import Image from 'next/image'

// ----------------------------------------------------------------------

type ProductCardProps = {
  data: {
    id: number
    name: string
    meta: string
    imageSrc: string
    imageAlt: string
    price: number
    stock: number
  }
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          width={280}
          height={320}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <div className='mt-4 mb-1 flex justify-between'>
        <div>
          <Header4 className='text-gray-700'>
            <a href={`/product/${data.meta}`}>
              <span aria-hidden='true' className='absolute inset-0' />
              {data.name}
            </a>
          </Header4>
          <Text
            size='sm'
            className='text-gray-500'
          >{`จำนวนคงเหลือ ${data.stock}`}</Text>
        </div>
        <Text size='sm' className='font-medium text-gray-900'>
          {convertCurrency(data.price)}
        </Text>
      </div>
    </div>
  )
}

export default ProductCard
