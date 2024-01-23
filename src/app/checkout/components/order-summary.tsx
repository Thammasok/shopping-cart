'use client'

import { convertCurrency } from '@/utils/format'
import OrderTotal from '@/app/checkout/components/order-total'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

const OrderSummary = () => {
  return (
    <div>
      <Header3>Summary</Header3>

      <div className='mb-6 pb-6 border-b border-gray-200 text-gray-800'>
        <div className='w-full flex mb-3 items-center'>
          <div className='flex-grow'>
            <span className='text-gray-600'>Subtotal</span>
          </div>
          <div className='pl-3'>
            <span className='font-semibold'>{convertCurrency(190.91)}</span>
          </div>
        </div>
        <div className='w-full flex mb-3 items-center'>
          <div className='flex-grow'>
            <span className='text-gray-600'>Discount</span>
          </div>
          <div className='pl-3'>
            <span className='font-semibold'>{convertCurrency(20.0)}</span>
          </div>
        </div>
        <div className='w-full flex items-center'>
          <div className='flex-grow'>
            <span className='text-gray-600'>Tax</span>
          </div>
          <div className='pl-3'>
            <span className='font-semibold'>{convertCurrency(19.09)}</span>
          </div>
        </div>
      </div>
      <OrderTotal />
    </div>
  )
}

export default OrderSummary
