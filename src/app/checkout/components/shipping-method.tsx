'use client'

import Header3 from '@/components/typography/header3'
import { useState } from 'react'
import ShippingMethodItem from '@/app/checkout/components/shipping-method-item'

import SHIPPING_METHOD from '@/assets/data/shipping_method.json'

// ----------------------------------------------------------------------

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState<string>(
    SHIPPING_METHOD[0].name
  )

  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShippingMethod(event.target.value)
  }

  return (
    <div className='mb-6 border-b border-gray-200 pb-6'>
      <Header3>Delivery method</Header3>

      <ul className='grid w-full gap-2 md:grid-cols-3'>
        {SHIPPING_METHOD.map((shipping) => (
          <ShippingMethodItem
            {...shipping}
            key={`shipping-${shipping.id}`}
            onChange={handleShippingMethodChange}
            shippingMethod={shippingMethod}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShippingMethod
