'use client'

import Header3 from '@/components/typography/header3'
import SummaryText from '@/app/checkout/components/summary-text'

// ----------------------------------------------------------------------

const OrderSummary = () => {
  return (
    <div className='mb-6'>
      <Header3>Summary</Header3>

      <div className='mb-6 pb-2 border-b border-gray-200 text-gray-800'>
        <SummaryText text='Subtotal' value={87} />
        <SummaryText text='Discount' value={20.0} />
        <SummaryText text='Tax (7%)' value={3.99} />
      </div>
      <SummaryText size='xl' className='font-semibold' text='Total' value={57} />
    </div>
  )
}

export default OrderSummary
