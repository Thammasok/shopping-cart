'use client'

import { EnvelopeIcon } from '@heroicons/react/24/outline'

// ----------------------------------------------------------------------

const NotificationInApplication = () => {
  return (
    <div className='flex items-center mb-6'>
      <input
        id='in-applications'
        type='checkbox'
        value='true'
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor='in-applications'
        className='ms-2 text-sm font-medium text-gray-900'
      >
        In Applications
      </label>
    </div>
  )
}

export default NotificationInApplication
