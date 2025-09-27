import { getPerfumes } from './productService'

export const getBrands = () => {
  const result = []
  getPerfumes().forEach((product) => {
    if (!result.includes(product.brand)) {
      result.push(product.brand)
    }
  })
  return result
}

export const getTopBrands = (limit = 5) => {
  const result = []
  getPerfumes().forEach((product) => {
    if (!result.includes(product.brand)) {
      result.push(product.brand)
    }
  })
  return result.slice(0, limit)
}
