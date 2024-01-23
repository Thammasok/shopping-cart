'use client'

import Header4 from '@/components/typography/header4'

// ------------------------------------------------------------------------

type ProductHighlightProps = {
  data: Array<string>
}
const ProductHighlight = ({ data }: ProductHighlightProps) => {
  return (
    <div className='mt-10'>
      <Header4>Highlights</Header4>

      <div className='mt-4'>
        <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
          {data.map((highlight) => (
            <li key={highlight} className='text-gray-400'>
              <span className='text-gray-600'>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductHighlight
