'use client'

import Button from '@/components/button/button'
import InputField from '@/components/input-field'
import Header3 from '@/components/typography/header3'
import Text from '@/components/typography/text'
import { XMarkIcon } from '@heroicons/react/24/outline'

// ----------------------------------------------------------------------

const Discount = () => {
  return (
    <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6'>
      <Header3>Discounts & Points</Header3>

      <div className='border-b pb-5'>
        <div className='-mx-2 flex items-end justify-between'>
          <div className='flex-grow px-2 lg:max-w-sm'>
            <InputField id='discount' type='text' placeholder='XXXXXX' />
          </div>
          <div className='px-2'>
            <Button size='sm'>APPLY</Button>
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
              aria-label='Remove'
            >
              <XMarkIcon width={12} height={12} />
            </button>
          </span>
        </div>
      </div>

      <div className='flex justify-between mt-5'>
        <div className='flex items-center mb-4'>
          <input
            id='default-checkbox'
            type='checkbox'
            value='true'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500'
          />
          <label
            htmlFor='default-checkbox'
            className='ms-2 text-md font-medium text-gray-900'
          >
            Use your points
          </label>
        </div>
        <div>
          <Text size='md' className='font-medium text-gray-900'>
            1,000 Points
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Discount
