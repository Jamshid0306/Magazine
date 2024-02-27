<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="category">
    <div class="container">
      <div class="category__items" v-for="item in names" :key="item">
        <RouterLink to='/' class="category__item">
          <h2 class="categor__item-txt">{{ item }}</h2>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
