'use client'

// ----------------------------------------------------------------------

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
  }
  // More products...
]

const ProductList = () => {
  return (
    <>
      <div className='w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6'>
        <h3 className='mb-5 text-lg font-medium text-gray-90'>Order</h3>
        <ul role='list' className='-my-6 divide-y divide-gray-200'>
          {products.map((product) => (
            <li key={product.id} className='flex py-6'>
              <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='ml-4 flex flex-1 flex-col'>
                <div>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <h3>
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <p className='ml-4'>{product.price}</p>
                  </div>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <div className='flex flex-1 items-end justify-between text-sm'>
                  <div className='mt-4 '>
                    <div className='relative flex items-center max-w-[8rem]'>
                      <button
                        type='button'
                        id='decrement-button'
                        data-input-counter-decrement='quantity-input'
                        className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-10 focus:ring-gray-100 focus:ring-2 focus:outline-none'
                      >
                        <svg
                          className='w-3 h-3 text-gray-900'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 2'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            stroke-width='2'
                            d='M1 1h16'
                          />
                        </svg>
                      </button>
                      <input
                        type='text'
                        id='quantity-input'
                        data-input-counter
                        aria-describedby='helper-text-explanation'
                        className='bg-gray-100 border border-gray-300 border-x-0 h-10 text-center text-gray-900 text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2.5 transition-colors'
                        placeholder='999'
                        required
                        value={product.quantity}
                      />
                      <button
                        type='button'
                        id='increment-button'
                        data-input-counter-increment='quantity-input'
                        className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-10 focus:ring-gray-100'
                      >
                        <svg
                          className='w-3 h-3 text-gray-900'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 18'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            stroke-width='2'
                            d='M9 1v16M1 9h16'
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      id='helper-text-explanation'
                      className='mt-2 text-sm text-gray-500'
                    >
                      มีสินค้าทั้งหมด 17088 ชิ้น
                    </p>
                  </div>

                  <div className='flex'>
                    <button
                      type='button'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductList
