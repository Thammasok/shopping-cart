'use client'

import Discount from '@/app/checkout/components/discount'
import OrderList from '@/app/checkout/components/order-list'
import OrderSummary from '@/app/checkout/components/order-summary'
import PaymentMethod from '@/app/checkout/components/payment-method'
import ShippingInfomation from '@/app/checkout/components/shipping-infomation2'
import ShippingMethod from '@/app/checkout/components/shipping-method'
import useCheckoutStore from '@/app/checkout/hooks/use-checkout-store'
import Button from '@/components/button/button'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

// ----------------------------------------------------------------------

const CheckoutView = () => {
  const { getProductListInCart } = useCheckoutStore()

  const submitPayOrder = () => {
    console.log('op')
    redirect('/orders/completed')
  }

  useEffect(() => {
    getProductListInCart()
  }, [getProductListInCart])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="w-full bg-white border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">
                <OrderList />
                <ShippingInfomation />
                <ShippingMethod />
                <PaymentMethod />
              </div>
              <div className="px-3 md:w-5/12">
                <Discount />
                <OrderSummary />
                <Button onClick={submitPayOrder} isblock="true">
                  PAY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutView
