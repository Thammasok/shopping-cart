'use client'

import { useState } from 'react'
import { converNumber, convertCurrency } from '@/utils/format'
import Header1 from '@/components/typography/header1'
import Text from '@/components/typography/text'
import InputQuantity from '@/components/input-quantity'
import Button from '@/components/button/button'
import { GetProductDetailServiceResponse } from '@/services/product-detail'
import useCartStore from '@/app/cart/useCartStore'

// ----------------------------------------------------------------------

const ProductContent = (product: GetProductDetailServiceResponse) => {
  const [quantity, setQuantity] = useState(1)
  const { addProductToCart } = useCartStore()

  const handleQuantityChange = (e: { target: { value: string } }) =>
    setQuantity(Number(e.target.value))

  const handleQuantityOnBlur = (e: { target: { value: string } }) => {
    const value = Number(e.target.value)
    if (value > 0 && value < product.stock) {
      setQuantity(value)
    } else {
      setQuantity(1)
    }
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = () => {
    // TODO: Add to cart
    console.log('product', product)
    addProductToCart({
      product_id: product.id,
      quantity
    })
  }

  return (
    <div className='mt-4 lg:row-span-3 lg:mt-0'>
      <Header1 className='mb-4 tracking-tight sm:text-3xl'>
        {product.product_name}
      </Header1>

      <Text size='sm' className='mb-4'>
        {product.product_brand}
      </Text>

      <Text size='xl' className='font-medium tracking-tight text-gray-900'>
        {convertCurrency(product.product_price)}
      </Text>

      <form className='mt-6'>
        <InputQuantity
          label='Quantity:'
          id='quantity'
          placeholder='999'
          increment={incrementQuantity}
          decrement={decrementQuantity}
          onChange={handleQuantityChange}
          onBlur={handleQuantityOnBlur}
          value={quantity}
          required
        />

        <Text size='sm' className='mt-3'>
          {`Stock ${converNumber(product.stock)} items`}
        </Text>

        <Button
          className='mt-6'
          type='button'
          isblock='true'
          onClick={addToCart}
        >
          Add to cart
        </Button>
      </form>
    </div>
  )
}

export default ProductContent
