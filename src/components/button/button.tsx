'use client'

// ----------------------------------------------------------------------

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  isblock?: string
  size?: string
}

const Button = (props: InputFieldProps) => {
  const { isblock = false, size } = props
  let customClassName = ''

  if (isblock) {
    customClassName += 'w-full'
  }

  if (size === 'sm') {
    customClassName += ' text-sm font-normal px-6 py-2'
  } else {
    customClassName += ' text-base font-medium px-8 py-3'
  }

  return (
    <button
      {...props}
      className={`${customClassName} ${props.className} flex items-center justify-center rounded-md border border-transparent bg-indigo-600  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {props.children}
    </button>
  )
}

export default Button
