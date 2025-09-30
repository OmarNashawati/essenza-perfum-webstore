import { categories } from '@/assets/data/table_categories'

export const getCategories = () => {
  const parents = categories.filter((c) => c.parentID === null)

  parents.forEach((pc) => {
    const children = categories.filter((cc) => cc.parentID === pc.id)
    if (children.length) {
      pc.subCategories = children
    }
  })

  return parents
}

export const getTopCategories = (limit = 5) => {
  return categories.slice(0, limit)
}
