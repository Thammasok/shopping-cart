'use client'

import ShippingDropdownList from '@/app/checkout/components/shipping-dropdown-list'
import InputField from '@/components/input-field'
import Header3 from '@/components/typography/header3'
import { useState } from 'react'

import DISTRICT_LIST from '@/assets/data/api_district.json'
import PROVINCE_LIST from '@/assets/data/api_province.json'
import SUB_DISTRICT_LIST from '@/assets/data/api_sub_district.json'
import { isNumber } from '@/utils/format'

// ----------------------------------------------------------------------

export type ProvinceType = {
  id: number
  name_th: string
  name_en: string
  geography_id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type DistrictType = {
  id: number
  name_th: string
  name_en: string
  province_id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export type SubDistrictType = {
  id: number
  zip_code: number
  name_th: string
  name_en: string
  amphure_id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

const ShippingInfomation = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [mobileNumber, setMobileNumber] = useState<string>('')
  const [provinceList] = useState<ProvinceType[]>(PROVINCE_LIST)
  const [districtList, setDistrictList] = useState<DistrictType[]>([])
  const [subDistrictList, setSubDistrictList] = useState<SubDistrictType[]>([])
  const [provinceSelected, setProviceSelected] = useState({
    id: 0,
    name: ''
  })
  const [districtSelected, setDistrictSelected] = useState({
    id: 0,
    name: ''
  })
  const [subDistrictSelected, setSubDistrictSelected] = useState({
    id: 0,
    name: ''
  })
  const [zipCode, setZipcode] = useState<number>(0)

  const getDistrictList = (provinceId: number) => {
    const district = DISTRICT_LIST.filter((d: DistrictType) =>
      d.province_id === provinceId ? d : null
    )
    setDistrictList(district)
  }

  const getSubDistrictList = (districtId: number) => {
    const subDistrict = SUB_DISTRICT_LIST.filter((d: any) =>
      d.amphure_id === districtId ? d : null
    )
    setSubDistrictList(subDistrict)
  }

  const getZipCode = (subDistrictId: number) => {
    const subDistrict = SUB_DISTRICT_LIST.filter((d: any) =>
      d.id === subDistrictId ? d : null
    )

    setZipcode(subDistrict[0].zip_code)
  }

  const handleProvinceSelect = (selected: { id: number; name: string }) => {
    setProviceSelected(selected)
    getDistrictList(selected.id)
  }

  const handleDistrictSelect = (selected: { id: number; name: string }) => {
    setDistrictSelected(selected)
    getSubDistrictList(selected.id)
  }

  const handleSubDistrictSelect = (selected: { id: number; name: string }) => {
    setSubDistrictSelected(selected)
    getZipCode(selected.id)
  }

  const handleFirstNameChange = (e: { target: { value: string } }) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e: { target: { value: string } }) => {
    setLastName(e.target.value)
  }

  const handleAddressChange = (e: { target: { value: string } }) => {
    setAddress(e.target.value)
  }

  const handleMobileNumberChange = (e: { target: { value: string } }) => {
    if (isNumber(e.target.value)) {
      setMobileNumber(e.target.value)
    }
  }

  return (
    <div className="mb-6 border-b border-gray-200 pb-6">
      <Header3>Shipping information</Header3>

      <div className="grid gap-6 mb-2 md:grid-cols-2">
        <InputField
          id="first-name"
          label="First name"
          type="text"
          placeholder="first name"
          required
          onChange={handleFirstNameChange}
        />

        <InputField
          id="last-name"
          label="Last name"
          type="text"
          placeholder="last name"
          required
          onChange={handleLastNameChange}
        />
      </div>

      <InputField
        id="address"
        label="Address (Building, Street, etc.)"
        type="text"
        placeholder="address"
        required
        maxLength={150}
        onChange={handleAddressChange}
      />

      <ShippingDropdownList
        label="Province: "
        list={provinceList}
        selected={provinceSelected}
        setSelected={handleProvinceSelect}
      />

      <ShippingDropdownList
        label="District: "
        list={districtList}
        selected={districtSelected}
        setSelected={handleDistrictSelect}
      />

      <ShippingDropdownList
        label="Sub-district: "
        list={subDistrictList}
        selected={subDistrictSelected}
        setSelected={handleSubDistrictSelect}
      />

      <InputField
        id="zipcode"
        label="Zipcode"
        type="text"
        placeholder="zipcode"
        maxLength={5}
        value={zipCode ? zipCode.toString() : ''}
        readOnly
        disabled
      />

      <InputField
        id="mobile"
        label="Mobile number (For Contact)"
        type="tel"
        placeholder="0923456789"
        maxLength={10}
        onChange={handleMobileNumberChange}
        required
      />
    </div>
  )
}

export default ShippingInfomation
