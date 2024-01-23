'use client'

// ----------------------------------------------------------------------

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  isblock?: string
}

const Button = (props: InputFieldProps) => {
  const { isblock = false } = props
  let customClassName = ''
  if (isblock) {
    customClassName = 'w-full'
  }

  return (
    <button
      {...props}
      className={`flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${customClassName} ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
