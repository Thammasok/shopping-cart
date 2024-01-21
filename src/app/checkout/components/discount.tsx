const Discount = () => {
  return (
    <div className='mb-6 pb-6 border-b border-gray-200'>
      <h3 className='mb-5 text-lg font-medium text-gray-90'>Discount</h3>
      <div className='-mx-2 flex items-end justify-start'>
        <div className='flex-grow px-2 lg:max-w-xs'>
          <input
            className='bg-gray-100 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
            placeholder='XXXXXX'
            type='text'
          />
        </div>
        <div className='px-2'>
          <button className='block w-full max-w-xs mx-auto border border-transparent bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-600 text-white rounded-md px-5 py-2 font-semibold'>
            APPLY
          </button>
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
            <svg
              className='w-2 h-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
            <span className='sr-only'>Remove badge</span>
          </button>
        </span>
      </div>
    </div>
  )
}

export default Discount
