// ----------------------------------------------------------------------

type ShippingDropdownListProps = {
  label: string
  id: string
  list: Array<AddressInfomation>
  child?: string
  selected: number | undefined
  setSelected: Function
  childsId?: Array<string>
  setChilds?: Array<Function>
}

export type AddressInfomation = ProvinceType[]

type AddressDefaultType = {
  id: number
  name_th: string
  name_en: string
  created_at: string
  updated_at: string
  deleted_at: any
}

type ProvinceType = AddressDefaultType & {
  geography_id?: number
  amphure?: AmphureType[]
}

type AmphureType = AddressDefaultType & {
  province_id?: number
  tambon?: TambonType[]
}

type TambonType = AddressDefaultType & {
  zip_code?: number
  amphure_id?: number
}

const ShippingDropdownList = ({
  label,
  id,
  list,
  child,
  childsId = [],
  setChilds = [],
  selected,
  setSelected
}: ShippingDropdownListProps) => {
  const onChangeHandle = (event: { target: { value: any } }) => {
    setChilds.forEach((setChild) => setChild([]))
    const entries = childsId.map((child) => [child, undefined])
    const unSelectChilds = Object.fromEntries(entries)

    const input = event.target.value
    const dependId = input ? Number(input) : undefined
    setSelected((prev: any) => ({
      ...prev,
      ...unSelectChilds,
      [id]: dependId
    }))

    if (!input) return

    if (child) {
      const parent = list.find((item: any) => item.id === dependId)
      // const { [child]: childs } = parent
      console.log('parent', parent)
      // const [setChild] = setChilds
      // setChild(childs)
    }
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
        value={selected}
        onChange={onChangeHandle}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5'
      >
        <option label='Select ...' />
        {list &&
          list.map((item: any) => (
            <option
              key={item.id}
              value={item.id}
              label={`${item.name_th} - ${item.name_en}`}
            />
          ))}
      </select>
    </div>
  )
}

export default ShippingDropdownList
