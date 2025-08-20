import { perfumes } from '@/assets/data/mockProducts'

export const getPerfumes = (filter) => {
  if (filter) {
    if (filter.tags) {
      return perfumes.filter((p) => p.tags.includes(...filter.tags))
    }
  }
  return perfumes
}

export const getPerfum = (sku) => {
  return perfumes.find((perfum) => perfum.sku === sku)
}
