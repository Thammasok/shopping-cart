'use client'

import Header4 from '@/components/typography/header4'
import Text from '@/components/typography/text'

// ------------------------------------------------------------------------

type ProductDescriptionProps = {
  data: string
}

const ProductDescription = ({ data }: ProductDescriptionProps) => {
  return (
    <div>
      <Header4>Description</Header4>

      <div className='space-y-6'>
        <Text size='sm'>{data}</Text>
      </div>
    </div>
  )
}

export default ProductDescription
