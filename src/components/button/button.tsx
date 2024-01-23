'use client'

// ----------------------------------------------------------------------

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  isBlock?: boolean
}

const Button = (props: InputFieldProps) => {
  const { isBlock = false } = props
  let customClassName = ''
  if (isBlock) {
    customClassName = 'w-full'
  }

  return (
    <button
      {...props}
      className={`${customClassName} ${props.className} flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {props.children}
    </button>
  )
}

export default Button
