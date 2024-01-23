'use client'

import React, { useEffect, useState } from 'react'
import ShippingDropdownList from '@/app/checkout/components/shipping-dropdown-list'
import InputField from '@/components/input-field'
import Header3 from '@/components/typography/header3'

// ----------------------------------------------------------------------

const ShippingInfomation = () => {
  const [provinces, setProvinces] = useState([])
  const [amphures, setAmphures] = useState([])
  const [tambons, setTambons] = useState([])
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined
  })

  useEffect(() => {
    ;(() => {
      fetch(
        'https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json'
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result)
        })
    })()
  }, [])

  return (
    <div className='mb-6 border-b border-gray-200 pb-6'>
      <Header3>Shipping information</Header3>

      <div className='grid gap-6 mb-2 md:grid-cols-2'>
        <InputField
          id='first-name'
          label='First name'
          type='text'
          placeholder='first name'
          required
        />

        <InputField
          id='last-name'
          label='Last name'
          type='text'
          placeholder='last name'
          required
        />
      </div>

      <InputField
        id='address'
        label='Address (Building, Street, etc.)'
        type='text'
        placeholder='address'
        required
        maxLength={150}
      />

      <ShippingDropdownList
        label='Province: '
        id='province_id'
        list={provinces}
        child='amphure'
        childsId={['amphure_id', 'tambon_id']}
        setChilds={[setAmphures, setTambons]}
        selected={selected['province_id']}
        setSelected={setSelected}
      />

      <ShippingDropdownList
        label='District: '
        id='amphure_id'
        list={amphures}
        child='tambon'
        childsId={['tambon_id']}
        setChilds={[setTambons]}
        selected={selected['amphure_id']}
        setSelected={setSelected}
      />

      <ShippingDropdownList
        label='Sub-district: '
        id='tambon_id'
        list={tambons}
        selected={selected['tambon_id']}
        setSelected={setSelected}
      />

      <InputField
        id='zipcode'
        label='Zipcode'
        type='text'
        placeholder='zipcode'
        maxLength={5}
        required
      />

      <InputField
        id='mobile'
        label='Mobile number'
        type='tel'
        placeholder='0923456789'
        maxLength={10}
        required
      />
    </div>
  )
}

export default ShippingInfomation
