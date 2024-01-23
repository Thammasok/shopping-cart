'use client'

import Header3 from '@/components/typography/header3'
import { convertCurrency } from '@/utils/format'
import { useState } from 'react'

// ----------------------------------------------------------------------

type ShippingMethodItemProps = {
  id: number
  name: string
  shippingTime: string
  condition: string
  price: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  shippingMethod: string
}

const ShippingMethodItem = ({
  id,
  name,
  shippingTime,
  condition,
  price,
  onChange,
  shippingMethod
}: ShippingMethodItemProps) => {
  return (
    <li>
      <input
        type='radio'
        id={`shipping-method-${id}`}
        name='shipping-method'
        value={name}
        className='hidden peer'
        onChange={onChange}
        checked={shippingMethod === name}
        required
      />
      <label
        htmlFor={`shipping-method-${id}`}
        className='inline-flex items-center justify-between w-full p-5 text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100'
      >
        <div className='block'>
          <div className='w-full text-lg font-semibold first-letter:uppercase'>
            {name}
          </div>
          <div className='w-full text-gray-600 text-sm py-2'>
            {shippingTime}
          </div>
          {condition ? (
            <div className='w-full text-red-400 text-xs'>
              {condition ?? condition}
            </div>
          ) : (
            <div className='mt-6'></div>
          )}

          <div className='w-full mt-2 font-semibold'>{convertCurrency(price)}</div>
        </div>
      </label>
    </li>
  )
}

export default ShippingMethodItem