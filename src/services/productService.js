import { perfumes } from '@/assets/data/mockProducts'

// import { useProductsStore } from '@/stores/productstore'

// const store = useProductsStore()

export const getPerfumes = (filter) => {
  if (filter) {
    if (filter.tags) {
      return perfumes.filter((p) => p.tags.includes(filter.tags))
    }
  }
  return perfumes
}

export const getPerfum = (sku) => {
  return perfumes.find((perfum) => perfum.sku === sku)
}

// export const getProducts = () => {
//   return
// }
// export const getProduct = (sku) => {}

// const normalize = (product) => {}
