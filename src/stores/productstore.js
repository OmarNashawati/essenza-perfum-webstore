import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

import { getPerfumes } from '@/services/productService'

export const useProductsStore = defineStore('products', () => {
  const minPrice = Math.min(...getPerfumes().map((p) => p.price))
  const maxPrice = Math.max(...getPerfumes().map((p) => p.price))
  const filter = reactive({ maxPrice, sort: '', categories: [], brands: [] })
  const products = reactive(getPerfumes())

  const filteredProducts = computed(() => {
    let result = products
    if (filter.maxPrice) {
      result = products.filter((product) => product.price <= filter.maxPrice)
    }

    if (filter.categories.length) {
      result = products.filter((product) =>
        product.tags.includes(filter.categories)
      )
    }

    if (filter.sort) {
      switch (filter.sort) {
        case 'newest':
          result.sort((a, b) => b.release_year - a.release_year)
          break
        case 'priceLowHigh':
          result.sort((a, b) => a.price - b.price)
          break
        case 'priceHighLow':
          result.sort((a, b) => b.price - a.price)
          break
        case 'AtoZ':
          result.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          break
        case 'ZtoA':
          result.sort((a, b) => b.name.localeCompare(a.name))
          break
      }
    }

    if (filter.brands.lenght) {
    }

    return result
  })

  const brands = () => {
    const result = []
    products.forEach((product) => {
      if (!result.includes(product.brand)) {
        result.push(product.brand)
      }
    })
    return result
  }

  return {
    maxPrice,
    minPrice,
    brands,
    filter,
    filteredProducts,
  }
})
