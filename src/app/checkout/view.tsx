'use client'

import Discount from './components/discount'
import OrderSummary from './components/order-summary'
import OrderList from './components/order-list'
import ShippingInfomation from './components/shipping-infomation'
import ShippingMethod from './components/shipping-method'
import PaymentMethod from './components/payment-method'

// ----------------------------------------------------------------------

const CheckoutView = () => {
  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800'>
            <div className='w-full'>
              <div className='-mx-3 md:flex items-start'>
                <div className='px-3 md:w-7/12 lg:pr-10'>
                  <OrderList />
                  <ShippingInfomation />
                  <ShippingMethod />
                  <PaymentMethod />
                </div>
                <div className='px-3 md:w-5/12'>
                  <Discount />
                  <OrderSummary />

                  <div>
                    <button className='flex items-center justify-center w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                      PAY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutView
