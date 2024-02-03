import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing
import GetProductInCartService, {
  ProductDetailInCart
} from '@/services/cart/get-product-list'
import { calculateTotalPrice } from '@/utils/total-price'
import { produce } from 'immer'

// ---------------------------------------------------

type PaymentCreditInformationType = {
  cardName: string
  cardNumber: string
  expriesDate: string
  cvv: number
}

type ShippingInformationType = {
  shippingMethod: number
  shippingAddress: string
  shippingSubDistrict: string
  shippingDistrict: string
  shippingProvince: string
  shippingZipCode: string
  recipientFirstName: string
  recipientLastName: string
  recipientPhoneNumber: string
}

type PointType = {
  point: number // Current Point
  isUsePoint: boolean
  burnPoint: number
}

type PaymentType = {
  paymentMethod: string
  paymentCreditInformation: PaymentCreditInformationType | {}
}

type CheckoutStoreType = {
  totalPrice: number
  cart: ProductDetailInCart[]
  shippingInformation: ShippingInformationType
  point: PointType
  payment: PaymentType
  getProductListInCart: () => void
  // addToCartLocal: (product: ProductToCartProps) => void
}

const useCheckoutStore = create<CheckoutStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        totalPrice: 0,
        cart: [],
        shippingInformation: {
          recipientFirstName: '',
          recipientLastName: '',
          recipientPhoneNumber: '',
          shippingAddress: '',
          shippingSubDistrict: '',
          shippingDistrict: '',
          shippingProvince: '',
          shippingZipCode: '',
          shippingMethod: 1
        },
        point: {
          point: 0,
          burnPoint: 0,
          isUsePoint: false
        },
        payment: {
          paymentMethod: 'credit',
          paymentCreditInformation: {},
        },
        getProductListInCart: async () => {
          // Mock userId
          const userId = 1

          const productInCart = await GetProductInCartService(userId)
          const price = productInCart?.map((item) => item.product_price)
          const total = calculateTotalPrice(price)

          set(
            produce((state) => {
              state.cart = productInCart
              state.totalPrice = total
            })
          )
        },
        setBurnPoint: (isUsePoint: boolean) => {
          if (isUsePoint) {
            set(
              produce((state) => {
                state.burnPoint = state.point
              })
            )
          } else {
            set(
              produce((state) => {
                state.burnPoint = 0
              })
            )
          }
        }
      }),
      {
        name: 'checkout-storage'
      }
    )
  )
)

export default useCheckoutStore
