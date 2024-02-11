import SHIPPING_METHOD from '@/assets/data/shipping_method.json'
import config from '@/config'
import GetProductInCartService, {
  ProductDetailInCart
} from '@/services/cart/get-product-list'
import { calculateTotalPrice } from '@/utils/total-price'
import type {} from '@redux-devtools/extension' // required for devtools typing
import { produce } from 'immer'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// ---------------------------------------------------

type PaymentCreditInformationType = {
  name: string
  number: string
  expiry: string
  cvv: string
  issuer: string
  focused: string
}

type ShippingInformationType = {
  firstName: string
  lastName: string
  address: string
  mobileNumber: string
  provinceId: number
  districtId: number
  subDistrictId: number
  provinceName: string
  districtName: string
  subDistrictName: string
  zipCode: number
  focused: string
}

type ShippingType = {
  shippingMethod: number
  shippingFee: number
  shippingInformation: ShippingInformationType
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
  netTotal: number
  receivePoint: number
  cart: ProductDetailInCart[]
  shipping: ShippingType
  point: PointType
  payment: PaymentType
  getProductListInCart: () => void
  setPoint: (point: number) => void
  setIsUsePoint: (isUsePoint: boolean) => void
  setPaymentMethod: (paymentMethod: string) => void
  setPaymentInformation: (
    paymentCreditInformation: PaymentCreditInformationType
  ) => void
  setShippingMethod: (shippingMethod: number, shippingFee: number) => void
  setShippingInformation: (shippingInformation: ShippingInformationType) => void
  updateSummary: () => void
  // addToCartLocal: (product: ProductToCartProps) => void
}

const useCheckoutStore = create<CheckoutStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        totalPrice: 0,
        netTotal: 0,
        receivePoint: 0,
        cart: [],
        shipping: {
          shippingMethod: SHIPPING_METHOD[0].id,
          shippingFee: SHIPPING_METHOD[0].price,
          shippingInformation: {
            firstName: '',
            lastName: '',
            address: '',
            mobileNumber: '',
            provinceId: 0,
            districtId: 0,
            subDistrictId: 0,
            provinceName: '',
            districtName: '',
            subDistrictName: '',
            zipCode: 0,
            focused: ''
          }
        },
        point: {
          point: 0,
          burnPoint: 0,
          isUsePoint: false
        },
        payment: {
          paymentMethod: 'credit',
          paymentCreditInformation: {
            number: '',
            name: '',
            expiry: '',
            cvv: '',
            issuer: '',
            focused: ''
          }
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
              state.netTotal = total
            })
          )

          get().updateSummary()
        },
        setPoint(point: number) {
          set(
            produce((state) => {
              state.point.point = point
            })
          )
        },
        setIsUsePoint: (isUsePoint: boolean) => {
          set(
            produce((state) => {
              state.point.isUsePoint = isUsePoint
            })
          )

          get().updateSummary()
        },
        setPaymentMethod: (paymentMethod: string) => {
          set(
            produce((state) => {
              state.payment.paymentMethod = paymentMethod
            })
          )
        },
        setPaymentInformation: (
          paymentCreditInformation: PaymentCreditInformationType
        ) => {
          set(
            produce((state) => {
              state.payment.paymentCreditInformation = paymentCreditInformation
            })
          )
        },
        setShippingMethod: (shippingMethod: number, shippingFee: number) => {
          const newNetTotal = get().totalPrice + shippingFee

          set(
            produce((state) => {
              state.netTotal = newNetTotal
              state.shipping.shippingMethod = shippingMethod
              state.shipping.shippingFee = shippingFee
            })
          )
        },
        setShippingInformation: (
          shippingInformation: ShippingInformationType
        ) => {
          set(
            produce((state) => {
              state.shippingInformation = shippingInformation
            })
          )
        },
        updateSummary: () => {
          const isUsePoint = get().point.isUsePoint
          const point = get().point.point

          const totalPrice = get().totalPrice
          const shippingFee = get().shipping.shippingFee

          let burnPoint = 0
          let netTotal = 0
          
          // Calculate Point
          if (isUsePoint) {
            if (point <= totalPrice) {
              burnPoint = point
            } else {
              // ปัดเศษขึ้น
              burnPoint = Math.ceil(totalPrice)
            }
          } else {
            burnPoint = 0
          }

          // netTotal
          if (isUsePoint) {
            if (totalPrice <= burnPoint) {
              netTotal = shippingFee
            } else {
              netTotal = (totalPrice - burnPoint) + shippingFee
            }
          } else {
            netTotal = totalPrice + shippingFee
          }

          // pointReceive
          // ปัดเศษลง
          const pointReceive = Math.floor(netTotal / config.pointRate)

          set(
            produce((state) => {
              state.netTotal = netTotal
              state.receivePoint = pointReceive
              // state.point.point = pointBalance
              state.point.burnPoint = burnPoint
            })
          )
        }
      }),
      {
        name: 'checkout-storage'
      }
    )
  )
)

export default useCheckoutStore
