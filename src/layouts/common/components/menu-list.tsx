'use client'

import { Popover } from '@headlessui/react'
import MenuItem from '@/layouts/common/components/menu-item'

// ---------------------------------------------------

const MenuList = () => {
  return (
    <Popover.Group className='hidden lg:flex lg:gap-x-12'>
    <MenuItem link='/product' name='Home' />
    <MenuItem link='/product' name='For Kids' />
    <MenuItem link='/product' name='Categories' />
  </Popover.Group>
  )
}

export default MenuList
