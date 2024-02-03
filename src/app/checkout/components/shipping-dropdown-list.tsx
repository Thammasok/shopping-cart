'use client'

import {
  DistrictType,
  ProvinceType,
  SubDistrictType
} from '@/app/checkout/components/shipping-infomation'

// ----------------------------------------------------------------------

type ShippingDropdownListProps = {
  label: string
  list: ProvinceType[] | DistrictType[] | SubDistrictType[]
  child?: string
  selected: {
    id: number
    name: string
  }
  setSelected: Function
  childsId?: Array<string>
  setChilds?: Array<Function>
}

const ShippingDropdownList = ({
  label,
  list,
  selected,
  setSelected
}: ShippingDropdownListProps) => {
  const onChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.getAttribute('data-name')

    setSelected({
      id: Number(e.target.value),
      name
    })
  }

  return (
    <div className='mb-2'>
      <label
        htmlFor={label}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <select
        onChange={onChangeHandle}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
      >
        <option label='Select ...' />
        {list &&
          list.map((item: any) => (
            <option
              key={item.id}
              value={item.id}
              data-name={item.name_th}
              selected={item.id === selected.id}
            >
              {item.name_th}
            </option>
          ))}
      </select>
    </div>
  )
}

export default ShippingDropdownList
