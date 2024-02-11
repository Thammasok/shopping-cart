'use client'

import SummaryText from '@/app/checkout/components/summary-text'
import useCheckoutStore from '@/app/checkout/hooks/use-checkout-store'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

const OrderSummary = () => {
  const { totalPrice, netTotal, receivePoint, point, shipping } =
    useCheckoutStore((state) => state)
  return (
    <div className="mb-6">
      <Header3>Summary</Header3>

      <div className="mb-6 pb-2 border-b border-gray-200 text-gray-800">
        <SummaryText text="Subtotal" value={totalPrice} />

        <SummaryText text="Points" format="number" value={point.burnPoint} />
        <SummaryText text="Shipping fee" value={shipping.shippingFee} />
        {/* Not use for now */}
        {/* <SummaryText text='Discount' value={20.0} />
        <SummaryText text='Tax (7%)' value={3.99} /> */}
      </div>
      <div>
        <SummaryText
          text="Receive point"
          format="number"
          className="font-semibold"
          unit="Points"
          value={receivePoint}
        />
        <SummaryText
          className="font-semibold"
          text="Total payment"
          value={netTotal}
        />
      </div>
    </div>
  )
}

export default OrderSummary
