import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

// ---------------------------------------------------

type ProductToCartPrams = {
  product_id: number
  quantity: number
}

interface CartState {
  cart: ProductToCartPrams[]
  addProductToCart: (product: ProductToCartPrams) => void
}

const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addProductToCart: (product: ProductToCartPrams) => {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.product_id === product.product_id ? product : item
            )
          }))
        }
      }),
      {
        name: 'cart-storage'
      }
    )
  )
)

export default useCartStore
