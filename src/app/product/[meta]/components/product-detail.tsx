'use client'

import Header4 from '@/components/typography/header3'
import Text from '@/components/typography/text'

// ------------------------------------------------------------------------

type ProductDetailProps = {
  data: string
}

const ProductDetail = ({ data }: ProductDetailProps) => {
  return (
    <div className='mt-10'>
      <Header4>Details</Header4>

      <div className='mt-4 space-y-6'>
        <Text size='sm'>{data}</Text>
      </div>
    </div>
  )
}

export default ProductDetail
