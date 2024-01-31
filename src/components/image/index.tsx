'use client'

import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import config from '@/config'

// ----------------------------------------------------------------------

const Image = (props: ImageProps) => {
  const [imageDefault, setImageDefault] = useState(false)

  // Handle image error
  const handleImageError = () => setImageDefault(true)

  return (
    <NextImage
      {...props}
      // check if imageUrl is not empty
      src={!imageDefault ? props.src : config.imageDefault}
      onError={handleImageError}
    />
  )
}

export default Image
