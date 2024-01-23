'use client'

import Header3 from '@/components/typography/header3'
import { convertCurrency } from '@/utils/format'
import { useState } from 'react'
import ShippingMethodItem from './shipping-method-item'

// ----------------------------------------------------------------------

const deliveryMethod = [
  {
    id: 1,
    name: 'kerry',
    shippingTime: '4–10 business days',
    condition: '',
    price: 50
  },
  {
    id: 2,
    name: 'thai post',
    shippingTime: '5–15 business days',
    condition: '',
    price: 50
  },
  {
    id: 3,
    name: 'lineman',
    shippingTime: '1-2 business days',
    condition: '*Bangkok and perimeter only',
    price: 70
  }
]

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState(deliveryMethod[0].name)

  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShippingMethod(event.target.value)
  }

  return (
    <div className='mb-6 border-b border-gray-200 pb-6'>
      <Header3>Delivery method</Header3>

      <ul className='grid w-full gap-2 md:grid-cols-3'>
        {deliveryMethod.map((delivery) => (
          <ShippingMethodItem
            {...delivery}
            key={`shipping-${delivery.id}`}
            onChange={handleShippingMethodChange}
            shippingMethod={shippingMethod}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShippingMethod
