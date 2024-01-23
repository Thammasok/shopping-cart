'use client'

import { useState } from 'react'
import { ProductDetailProps } from '../view'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { converNumber, convertCurrency } from '@/utils/format'
import Header1 from '@/components/typography/header1'
import Text from '@/components/typography/text'
import InputQuantity from '@/components/input-quantity'
import Button from '@/components/button/button'

// ----------------------------------------------------------------------

const ProductForm = (product: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleChange = (e: { target: { value: string } }) =>
    setQuantity(Number(e.target.value))
  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity - 1)

  return (
    <div className='mt-4 lg:row-span-3 lg:mt-0'>
      <Header1 className='mb-6 tracking-tight sm:text-3xl'>
        {product.name}
      </Header1>

      <Text className='text-4xl font-medium tracking-tight text-gray-900'>
        {convertCurrency(product.price)}
      </Text>

      <form className='mt-10'>
        <InputQuantity
          label='Choose quantity:'
          id='quantity'
          placeholder='999'
          increment={incrementQuantity}
          decrement={decrementQuantity}
          onChange={handleChange}
          value={quantity}
          required
        />

        <Text size='sm' className='mt-3'>
          {`มีสินค้าทั้งหมด ${converNumber(17088)} ชิ้น`}
        </Text>

        <Button className='mt-6' type='submit' isBlock>
          Add to cart
        </Button>
      </form>
    </div>
  )
}

export default ProductForm
