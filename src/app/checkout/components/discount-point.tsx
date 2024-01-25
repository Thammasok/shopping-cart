'use client'

import Text from '@/components/typography/text'

// ----------------------------------------------------------------------

const DiscountPoint = () => {
  return (
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
  )
}

export default DiscountPoint
