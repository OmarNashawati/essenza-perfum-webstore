<script setup>
const footerContact = {
  email: 'support@essenza.com',
  phone: '+1 (212) 555-7890',
  address: '123 Fifth Avenue, Suite 500, New York, NY 10011, USA',
  working_hours: 'Mon - Fri: 9:00 AM - 6:00 PM (EST)',
  social: {
    facebook: 'https://facebook.com/essenza',
    instagram: 'https://instagram.com/essenza',
    twitter: 'https://twitter.com/essenza',
    tiktok: 'https://tiktok.com/@essenza',
  },
  links: {
    shop: [
      { name: "Men's Perfumes", url: '/shop/mens' },
      { name: "Women's Perfumes", url: '/shop/womens' },
      { name: 'New Arrivals', url: '/shop/new' },
      { name: 'Best Sellers', url: '/shop/best-sellers' },
    ],
    company: [
      { name: 'About Us', url: '/about' },
      { name: 'Careers', url: '/careers' },
      { name: 'Blog', url: '/blog' },
    ],
    support: [
      { name: 'Contact Us', url: '/contact' },
      { name: 'FAQs', url: '/faqs' },
      { name: 'Shipping & Returns', url: '/shipping-returns' },
      { name: 'Privacy Policy', url: '/privacy-policy' },
      { name: 'Terms & Conditions', url: '/terms' },
    ],
  },
}
</script>

<template>
  <footer>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Essenza Logo" />
    </div>
    <div class="footer-col">
      <h2>Support</h2>
      <a v-for="link in footerContact.links.support" :href="link.url">{{
        link.name
      }}</a>
    </div>

    <div class="footer-col">
      <h2>Contact</h2>
      <a href="">{{ footerContact.email }}</a>
      <a href="">{{ footerContact.phone }}</a>
      <a href="">{{ footerContact.address }}</a>
    </div>

    <div class="footer-col social-links">
      <a
        v-for="social in Object.entries(footerContact.social)"
        :class="`pi pi-${social[0]}`"
        :href="social[1]"
      ></a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: var(--space-8) var(--space-8);
  border-top: 1px solid var(--border-gold);

  .logo {
    height: 100px;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    max-width: 25%;
    gap: var(--space-1);
  }

  .social-links {
    gap: var(--space-4);
    font-size: 1.5rem;
  }
}
</style>
