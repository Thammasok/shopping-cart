'use client'

import ProductTitle from '@/app/product/list/components/product-title'
import ProductList from '@/app/product/list/components/product-list'
import SearchForm from '@/app/product/list/components/search-form'

// ----------------------------------------------------------------------

const ProductView = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8'>
        <SearchForm />
        <ProductTitle title='Customers also purchased' />
        <ProductList />
      </div>
    </div>
  )
}

export default ProductView