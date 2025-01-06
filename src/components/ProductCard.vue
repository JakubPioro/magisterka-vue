<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import type { product } from '@/module/interfaces/product.interface.ts'

interface Props {
  product: product;
}

defineProps<Props>();

const countPrice = (currentPrice: number, discount:number): number => {
  return Math.round(currentPrice * (100 - discount) / 100);
}
</script>

<template>
  <Card style="overflow: hidden" class="light-shadow">
    <template #header>
      <p class="text-lg text-center p-2">- {{product.discount}}%</p>
      <img alt="user header" :src="`products/${product.imgName}`" class="size-[320px]"/>
    </template>
    <template #title>{{product.name}}</template>
    <template #subtitle>
      <p class="line-through">
        {{ product.price }}zł
      </p>
    </template>
    <template #content>
      <p class="m-0">
        {{ countPrice(product.price, product.discount) }} zł
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Share" severity="secondary" outlined class="w-full" icon="pi pi-send" />
        <Button label="Buy" severity="success" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
