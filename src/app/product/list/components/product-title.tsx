'use client'

// ----------------------------------------------------------------------

type ProductTitleProps = {
  title: string
}

const ProductTitle = ({ title }: ProductTitleProps) => {
  return (
    <h2 className='text-2xl font-bold tracking-tight text-gray-900'>{title}</h2>
  )
}

export default ProductTitle
