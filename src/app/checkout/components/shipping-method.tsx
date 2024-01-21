'use client'

// ----------------------------------------------------------------------

const deliveryMethod = [
  {
    id: 1,
    name: 'Kerry',
    shippingTime: '4–10 business days',
    condition: '',
    price: 50
  },
  {
    id: 2,
    name: 'Thai Post',
    shippingTime: '5–15 business days',
    condition: '',
    price: 50
  },
  {
    id: 3,
    name: 'Lineman',
    shippingTime: '1-2 business days',
    condition: '*Bangkok and perimeter only',
    price: 70
  }
]

const ShippingMethod = () => {
  return (
    <>
      <h3 className='mb-5 text-lg font-medium text-gray-90'>Delivery method</h3>
      <ul className='grid w-full gap-2 md:grid-cols-3'>
        {deliveryMethod.map((delivery) => (
          <li key={delivery.id}>
            <input
              type='radio'
              id='hosting-small'
              name='hosting'
              value='hosting-small'
              className='hidden peer'
              checked
              required
            />
            <label
              htmlFor='hosting-small'
              className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100'
            >
              <div className='block'>
                <div className='w-full text-lg font-semibold'>
                  {delivery.name}
                </div>
                <div className='w-full text-gray-400 text-sm py-2'>
                  {delivery.shippingTime}
                </div>
                {delivery.condition ? (
                  <div className='w-full text-red-400 text-xs'>
                    {delivery.condition ?? delivery.condition}
                  </div>
                ) : (
                  <div className='mt-6'></div>
                )}

                <div className='w-full mt-2'>{`${delivery.price} THB`}</div>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ShippingMethod
