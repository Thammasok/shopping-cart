import axiosShoppingMallApi from '@/utils/axios'

import { mockProductListResponse } from '@/mock'

// ------------------------------------------------

type GetProductListServiceParams = {
  keyword?: string
  offset?: number
  limit?: number
}

export type ProductType = {
  id: number
  product_name: string
  product_price: number
  product_image: string
}

export type GetProductListServiceResponse = {
  total: number
  products: ProductType[]
}

const getProductListService = async ({
  keyword = '',
  offset = 0,
  limit = 50
}: GetProductListServiceParams): Promise<GetProductListServiceResponse> => {
  // const queryString =
  //     '?' +
  //     new URLSearchParams({
  //       q: keyword,
  //       offset: offset.toString(),
  //       limit: limit.toString()
  //     }).toString()

  //   const result = await axiosShoppingMallApi.get(
  //     `/api/v1/product${queryString}`
  //   )

  let result = mockProductListResponse.body

  if (keyword) {
    result = {
      total: 0,
      products: []
    }
  }

  return result
}

export default getProductListService
