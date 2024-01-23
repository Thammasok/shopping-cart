'use client'

import Button from '@/components/button/button'
import InputField from '@/components/input-field'
import Header3 from '@/components/typography/header3'
import { XMarkIcon } from '@heroicons/react/24/outline'

// ----------------------------------------------------------------------

const Discount = () => {
  return (
    <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6'>
      <Header3>Discount</Header3>

      <div className='-mx-2 flex items-end justify-start'>
        <div className='flex-grow px-2 lg:max-w-xs'>
          <InputField id='discount' type='text' placeholder='XXXXXX' />
        </div>
        <div className='px-2'>
          <Button className='py-1.5'>
            APPLY
          </Button>
        </div>
      </div>

      <div className='mt-2'>
        <span
          id='badge-dismiss-dark'
          className='inline-flex items-center px-3 py-2 me-2 text-sm font-medium text-gray-600 bg-gray-100 rounded'
        >
          SAVE20
          <button
            type='button'
            className='inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-gray-300'
            data-dismiss-target='#badge-dismiss-dark'
            aria-label='Remove'
          >
            <XMarkIcon width={12} height={12} />
          </button>
        </span>
      </div>
    </div>
  )
}

export default Discount
