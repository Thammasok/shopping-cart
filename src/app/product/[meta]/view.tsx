/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Breadcrumbs from '@/components/breadcrumb'
import ProductDetail from '@/app/product/[meta]/components/product-detail'
import ProductHighlight from '@/app/product/[meta]/components/product-highlight'
import ProductDescription from '@/app/product/[meta]/components/product-description'
import ProductForm from './components/product-form'
import ProductImage from './components/product-image'

const product = {
  name: 'Basic Tee 6-Pack',
  price: 192,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.'
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.'
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}

// ----------------------------------------------------------------------------

export type ProductDetailProps = {
  name: string
  price: number
  href: string
  breadcrumbs: Breadcrumb[]
  images: Image[]
  colors: Color[]
  sizes: Size[]
  description: string
  highlights: string[]
  details: string
}

type Size = {
  name: string
  inStock: boolean
}
type Color = {
  name: string
  class: string
  selectedClass: string
}
type Image = {
  src: string
  alt: string
}
type Breadcrumb = {
  id: number
  name: string
  href: string
}

const ProductDetailView = () => {
  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <Breadcrumbs
          breadcrumbs={product.breadcrumbs}
          productName={product.name}
          productHref={product.href}
        />

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          {/* Images */}
          <ProductImage {...product} />
          {/* Form */}
          <ProductForm {...product} />
          {/* Description and details */}
          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <ProductDescription data={product.description} />
            <ProductHighlight data={product.highlights} />
            <ProductDetail data={product.details} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailView
