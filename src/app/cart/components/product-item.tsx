'use client'

import { useEffect, useState } from 'react'
import { converNumber, convertCurrency } from '@/utils/format'
import Image from 'next/image'
import InputQuantity from '@/components/input-quantity'
import RemoveItem from '@/app/cart/components/remove-item'
import Text from '@/components/typography/text'

// ----------------------------------------------------------------------

type ProductItemProps = {
  id: number
  name: string
  meta: string
  imageSrc: string
  imageAlt: string
  price: number
  amount: number
  isHiddenLable?: boolean
}

const ProductItem = ({
  id,
  name,
  meta,
  imageSrc,
  imageAlt,
  price,
  amount,
  isHiddenLable = false
}: ProductItemProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleChange = (e: { target: { value: string } }) =>
    setQuantity(Number(e.target.value))
  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleRemoveItem = () => {
    console.log('remove item')
  }

  useEffect(() => {
    setQuantity(amount)
  }, [amount])

  return (
    <li className='flex py-6'>
      <div className='h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={94}
          height={94}
          className='h-full w-full object-cover object-center'
        />
      </div>

      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <a href={`/product/${meta}`}>{name}</a>
            </h3>
            <p className='ml-4'>{convertCurrency(price)}</p>
          </div>
          <Text className='mt-1 text-sm text-gray-500'>
            {`มีสินค้าทั้งหมด ${converNumber(17088)} ชิ้น`}
          </Text>
        </div>

        <div className='flex flex-1 items-end justify-between text-sm mt-4'>
          <InputQuantity
            label='Choose quantity:'
            id='quantity'
            placeholder='999'
            increment={incrementQuantity}
            decrement={decrementQuantity}
            onChange={handleChange}
            value={quantity}
            isHiddenLable={isHiddenLable}
            required
          />

          <RemoveItem onClick={handleRemoveItem} />
        </div>
      </div>
    </li>
  )
}

export default ProductItem
