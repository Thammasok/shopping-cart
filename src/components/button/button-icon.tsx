'use client'

// ----------------------------------------------------------------------

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  isBlock?: boolean
}

const ButtonIcon = (props: InputFieldProps) => {
  return <button {...props}>{props.children}</button>
}

export default ButtonIcon
