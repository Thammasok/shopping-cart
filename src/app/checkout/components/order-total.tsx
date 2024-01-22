import { convertCurrency } from "@/utils/currency"

const OrderTotal = () => {
  return (
    <div className='mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl'>
      <div className='w-full flex items-center'>
        <div className='flex-grow'>
          <span className='text-gray-600'>Total</span>
        </div>
        <div className='pl-3'>
          <span className='font-semibold'>{convertCurrency(210.00)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderTotal
