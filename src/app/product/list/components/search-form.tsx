'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// ----------------------------------------------------------------------

// type ProductTitleProps = {}

const SearchForm = () => {
  return (
    <form className='flex items-center my-10'>
      <label htmlFor='product-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
        </div>
        <input
          type='text'
          id='product-search'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-10 p-2.5'
          placeholder='Search product name...'
          required
        />
      </div>
      <button
        type='submit'
        className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
      >
        <MagnifyingGlassIcon className='mr-2 -ml-1 w-5 h-5' />
        Search
      </button>
    </form>
  )
}

export default SearchForm
