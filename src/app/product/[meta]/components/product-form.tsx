/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { ProductDetailProp } from '../view'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const ProductForm = (product: ProductDetailProp) => {
  const [quantity, setQuantity] = useState(1)

  const handleChange = (e: { target: { value: string } }) =>
    setQuantity(Number(e.target.value))
  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => setQuantity(quantity - 1)

  return (
    <div className='mt-4 lg:row-span-3 lg:mt-0'>
      <h1 className='mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
        {product.name}
      </h1>

      <p className='text-3xl tracking-tight text-gray-900'>{product.price}</p>

      <form className='mt-10'>
        <label
          htmlFor='quantity-input'
          className='block mb-2 text-sm font-medium text-gray-900 '
        >
          Choose quantity:
        </label>

        <div className='relative flex items-center max-w-[10rem]'>
          <button
            type='button'
            id='decrement-button'
            data-input-counter-decrement='quantity-input'
            className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none'
            onClick={decrementQuantity}
          >
            <svg
              className='w-3 h-3 text-gray-900'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 2'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke-width='2'
                d='M1 1h16'
              />
            </svg>
          </button>
          <input
            type='text'
            id='quantity-input'
            data-input-counter
            aria-describedby='helper-text-explanation'
            className='bg-gray-100 border border-gray-300 border-x-0 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5'
            placeholder='999'
            onChange={handleChange}
            value={quantity}
            required
          />
          <button
            type='button'
            id='increment-button'
            data-input-counter-increment='quantity-input'
            className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100'
            onClick={incrementQuantity}
          >
            <svg
              className='w-3 h-3 text-gray-900'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                stroke-width='2'
                d='M9 1v16M1 9h16'
              />
            </svg>
          </button>
        </div>
        <p id='helper-text-explanation' className='mt-2 text-sm text-gray-500'>
          มีสินค้าทั้งหมด 17088 ชิ้น
        </p>

        <button
          type='submit'
          className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Add to cart
        </button>
      </form>
    </div>
  )
}

export default ProductForm
