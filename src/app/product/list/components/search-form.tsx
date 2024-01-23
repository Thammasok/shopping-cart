'use client'

import Button from '@/components/button/button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// ----------------------------------------------------------------------

const SearchForm = () => {
  return (
    <form className='flex items-center my-10'>
      <div className='relative w-full'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <MagnifyingGlassIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
        </div>
        <input
          type='text'
          id='product-search'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full pl-10 py-3'
          placeholder='Search product name...'
          required
        />
      </div>
      <Button className='inline-flex items-center py-2 px-3 ml-2 text-sm font-medium'>
        <MagnifyingGlassIcon className='mr-2 -ml-1 w-5 h-5' />
        Search
      </Button>
      {/* <button
        type='submit'
        className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
      >
        
      </button> */}
    </form>
  )
}

export default SearchForm
