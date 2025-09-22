export const homeContent = {
  hero: {
    title: 'Discover Your Signature Scent',
    subtitle:
      'Luxury perfumes curated for elegance, passion, and timeless style.',
    cta: { text: 'Shop Now', url: '/shop' },
    image: 'https://shop.com/images/hero-banner.jpg',
  },
  sections: [
    {
      id: 'best-sellers',
      title: 'Best Sellers',
      description:
        'Our most loved and top-rated perfumes chosen by thousands worldwide.',
      products: 'Best Sellers', // reference to your data source
    },
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      description:
        'Explore the latest fragrance releases and trending perfumes.',
      products: 'New Arrivals',
    },
    {
      id: 'luxury-collection',
      title: 'Luxury Collection',
      description:
        'Premium designer perfumes crafted with the finest ingredients.',
      products: 'Luxury Collection',
    },
    {
      id: 'gift-sets',
      title: 'Perfume Gift Sets',
      description:
        'The perfect gift for your loved ones, beautifully packaged and ready to impress.',
      products: 'Gift Sets',
    },
  ],
  promoBanner: {
    text: 'Free shipping on all orders over $100',
    cta: { text: 'Shop Now', url: '/shop' },
  },
}
