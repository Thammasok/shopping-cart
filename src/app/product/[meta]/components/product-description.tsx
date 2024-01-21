'use client'

// ------------------------------------------------------------------------

type ProductDescriptionProps = {
  data: string
}

const ProductDescription = ({ data }: ProductDescriptionProps) => {
  return (
    <div>
      <h3 className='sr-only'>Description</h3>
      
      <div className='space-y-6'>
        <p className='text-base text-gray-900'>{data}</p>
      </div>
    </div>
  )
}

export default ProductDescription
