type InputFieldProps = {
  label?: string
  id?: string
  type: string
  value?: string
  placeholder?: string
  required?: boolean
  maxLength?: number
  minLength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  required,
  type,
  maxLength,
  minLength
}: InputFieldProps) => {
  return (
    <div className={label ? 'mb-2' : ''}>
      {label ? (
        <label
          htmlFor={id}
          className='block mb-2 text-sm font-medium text-gray-900'
        >
          {label}
        </label>
      ) : null}

      <input
        type={type}
        id={id}
        className='bg-white text-sm w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength || 255}
        minLength={minLength || 0}
      />
    </div>
  )
}

export default InputField
