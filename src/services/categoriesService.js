import { categories } from '@/assets/data/mockCategories'

export const getCategories = () => {
  return categories
}

export const getTopCategories = (limit = 5) => {
  return categories.slice(0, limit)
}
