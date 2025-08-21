export function calculateDiscount(price, discount) {
  return price - (price * discount) / 100
}

export function formatMoney(value) {
  return value.toFixed(2)
}
