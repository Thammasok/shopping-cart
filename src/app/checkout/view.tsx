'use client'

import Discount from '@/app/checkout/components/discount'
import OrderSummary from '@/app/checkout/components/order-summary'
import OrderList from '@/app/checkout/components/order-list'
import ShippingInfomation from '@/app/checkout/components/shipping-infomation'
import ShippingMethod from '@/app/checkout/components/shipping-method'
import PaymentMethod from '@/app/checkout/components/payment-method'
import { redirect } from 'next/navigation'
import Button from '@/components/button/button'

// ----------------------------------------------------------------------

const CheckoutView = () => {
  const submitPayOrder = () => {
    console.log('op')
    redirect('/orders/completed')
  }

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
                  <Button onClick={submitPayOrder} isBlock>
                    PAY NOW
                  </Button>
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
