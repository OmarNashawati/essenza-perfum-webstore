import { perfumes } from '@/assets/data/mockProducts'

export const getPerfumes = (filter) => {
  if (filter.tags) {
    return perfumes.filter((p) => p.tags.includes(...filter.tags))
  }
  return perfumes
}
