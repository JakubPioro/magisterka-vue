<script setup lang="ts">
import PageToolbar from '@/components/PageToolbar.vue'
import HeaderBanner from '@/components/HeaderBanner.vue'
import ProductCard from '@/components/ProductCard.vue'
import type { product } from '@/module/interfaces/product.interface.ts'
import Footer from '@/components/Footer.vue'
import Card from 'primevue/card'

const top: product[] = [
  {
    id: 0,
    name: 'iPhone 15 Pro',
    imgName: 'iphone.webp',
    price: 5499,
    discount: 20,
    available: 1321,
  },
  {
    id: 1,
    name: 'AirPods Pro',
    imgName: 'airpods.jpeg',
    price: 1299,
    discount: 20,
    available: 1321,
  },
]

const phones: product[] = [
  {
    id: 0,
    name: 'iPhone 15 Pro',
    imgName: 'iphone.webp',
    price: 5499,
    discount: 20,
    available: 1321,
  },
  {
    id: 1,
    name: 'Samsung Galaxy S23',
    imgName: 'samsung.jpeg',
    price: 4999,
    discount: 15,
    available: 1321,
  },
  {
    id: 2,
    name: 'Xiaomi 13 Pro',
    imgName: 'xiaomi.jpg',
    price: 3599,
    discount: 10,
    available: 1321,
  },
]

const headphones: product[] = [
  {
    id: 0,
    name: 'AirPods Pro',
    imgName: 'airpods.jpeg',
    price: 1299,
    discount: 20,
    available: 1321,
  },
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    imgName: 'sony.webp',
    price: 1899,
    discount: 15,
    available: 1321,
  },
  {
    id: 2,
    name: 'JBL Tune 760NC',
    imgName: 'jbl.png',
    price: 750,
    discount: 10,
    available: 1321,
  }
]
</script>

<template>
  <div class="flex flex-col gap-4 w-full items-center">
    <PageToolbar class="sticky top-0 mt-4 w-screen"/>
    <HeaderBanner class=""/>
    <h1 class="text-3xl text-black">Top of the week</h1>
    <div class="grid grid-cols-2 gap-8 max-w-screen-lg">
      <ProductCard v-for="product in top" :key="product.id" :product="product" />
    </div>
    <h1 class="text-3xl text-black mt-12">Phones</h1>
    <Card class="light-shadow w-full max-w-screen-lg">
      <template #content>
        <p class="p-4 text-lg">
          Your phone deserves the best care! That’s why we’re giving you a free screen protector with every phone purchase – because protecting what matters shouldn’t cost extra.
        </p>
      </template>
    </Card>
    <div class="grid grid-cols-3 gap-8 max-w-screen-lg">
      <ProductCard v-for="phone in phones" :key="phone.id" :product="phone" />
    </div>
    <h1 class="text-3xl text-black mt-12">Headphones</h1>
    <div class="grid grid-cols-3 gap-8 max-w-screen-lg">
      <ProductCard v-for="headphone in headphones" :key="headphone.id" :product="headphone" />
    </div>
    <Footer class="mt-16"/>
  </div>
</template>
