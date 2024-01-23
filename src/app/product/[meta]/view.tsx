'use client'

// import Breadcrumbs from '@/components/breadcrumb'
import ProductContent from '@/app/product/[meta]/components/product-content'
import ProductImage from '@/app/product/[meta]/components/product-image'

const product = {
  name: 'Basic Tee 6-Pack',
  price: 192,
  href: '#',
  breadcrumbs: [{ id: 1, name: 'Clothing', href: '#' }],
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
  details: string
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
    <div className='bg-white min-h-[calc(100vh-88px)]'>
      {/* <Breadcrumbs
          breadcrumbs={product.breadcrumbs}
          productName={product.name}
          productHref={product.href}
        /> */}

      {/* Product info */}
      <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
        {/* Images */}
        <ProductImage {...product} />
        {/* ProductContent */}
        <ProductContent {...product} />
      </div>
    </div>
  )
}

export default ProductDetailView
