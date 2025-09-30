import { products } from '@/assets/data/table_products'
import { product_variants } from '@/assets/data/table_product_variant'
import { product_images } from '@/assets/data/table_images'

// import { useProductsStore } from '@/stores/productstore'

// const store = useProductsStore()

export const getProducts = (filter) => {
  const result = products

  result.forEach((p) => {
    p.variants = getProductVariants(p.id)
  })

  return result
}

export const getProduct = (id) => {
  const result = products.find((p) => p.id === Number(id))

  if (result) {
    result.variants = getProductVariants(Number(id))
    return result
  } else {
    return false
  }
}

const getProductVariants = (productID) => {
  let variants = product_variants.filter((v) => v.productID === productID)
  variants.forEach((v) => {
    v.images = getVariantImages(v.sku)
  })
  return variants
}

const getVariantImages = (sku) => {
  return product_images.filter((img) => img.sku === sku)
}
