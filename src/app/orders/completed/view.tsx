'use client'

import Header1 from '@/components/typography/header1'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

const SuccessView = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='pt-6'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800'>
            <Header3 className='text-green-600'>Payment successful</Header3>
            <Header1 className='text-6xl font-extrabold'>
              Thank you for your order
            </Header1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessView
