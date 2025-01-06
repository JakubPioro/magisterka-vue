<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { IconField, Badge } from 'primevue';
</script>

<template>
  <Toolbar class="p-4 rounded-2xl max-w-screen-xl light-shadow">
    <template #start>
      <div class="flex items-center gap-2">
        <i class="pi pi-shop"></i>
        <Button label="Saved" text plain />
        <Button label="Trending" text plain />
      </div>
    </template>

    <template #center>
      <IconField>
        <InputText placeholder="Search" />
      </IconField>
    </template>


    <template #end>
      <div class="flex items-center gap-2">
        <Button label="Profile" severity="secondary" icon="pi pi-user" />
        <div class="relative">
          <Button  text plain icon="pi pi-shopping-bag"></Button>
          <Badge value="2" severity="success" size="small" class="absolute top-0 right-0"></Badge>
        </div>
      </div>
    </template>
  </Toolbar>
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
