import { convertCurrency } from '@/utils/currency'
import OrderTotal from './order-total'

const OrderSummary = () => {
  return (
    // <div className='mb-6 border-b border-gray-200 pb-6'>
    <div>
      <h3 className='mb-5 text-lg font-medium text-gray-90'>Summary</h3>
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
            <span className='font-semibold'>{convertCurrency(20.00)}</span>
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
