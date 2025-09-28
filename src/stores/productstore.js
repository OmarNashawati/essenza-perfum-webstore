import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { getPerfumes } from '@/services/productService'

// import { products as rawProducts } from '@/assets/data/table_products'
// import { product_variants } from '@/assets/data/table_product_variant'
// import { perfumes } from '@/assets/data/mockProducts'

// export const useProductsStore = defineStore('products', () => {
//   const products = ref([])
//   const loading = null
//   const error = null

//   const fetchProducts = () => {
//     loading.value = true
//     try {
//       const date = new Promise((resolve) => {
//         const pro = rawProducts.forEach((p) => {
//           p.variants = product_variants.filter((v) => v.productID === p.id)
//         })
//         setTimeout(() => resolve(pro))
//       })
//       products.value = data
//     } catch (err) {
//       error.value = err
//     } finally {
//       loading.value = false
//     }
//   }

//   return {
//     products,
//     fetchProducts,
//     error,
//     loading,
//   }
// })

export const useProductsStore = defineStore('products', () => {
  const products = ref(getPerfumes())

  const minPrice = Math.min(...products.value.map((p) => p.price))
  const maxPrice = Math.max(...products.value.map((p) => p.price))
  const filter = ref({
    maxPrice,
    sort: '',
    categories: [],
    brands: [],
    search: '',
  })

  const setFilter = (newFilter) => {
    filter.value = { ...filter.value, ...newFilter }
  }

  const filteredProducts = computed(() => {
    let result = products.value

    if (filter.value.categories.length > 0) {
      result = result.filter((product) =>
        product.tags.some((x) => filter.value.categories.includes(x))
      )
    }

    if (filter.value.brands.length > 0) {
      result = result.filter((product) =>
        filter.value.brands.includes(product.brand)
      )
    }

    if (filter.value.maxPrice) {
      result = result.filter(
        (product) => product.price <= filter.value.maxPrice
      )
    }

    if (filter.value.sort) {
      switch (filter.value.sort) {
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

    return result
  })

  const clearFilter = () => {
    filter.value = {
      maxPrice,
      sort: '',
      categories: [],
      brands: [],
      search: '',
    }
  }

  return {
    maxPrice,
    minPrice,
    filter,
    setFilter,
    filteredProducts,
    clearFilter,
  }
})
