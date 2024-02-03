export const calculateTotalPrice = (priceList: number[]) => {
  let totalPrice = 0

  for (let i = 0; i < priceList.length; i++) {
    totalPrice += priceList[i]
  }

  return totalPrice
}
