<script setup>
import Product from "@/components/product/Product.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { useProductsStore } from "@/stores/productsStore";
import Empty from "@/views/Empty.vue"
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductIcon from "@/components/icons/ProductIcon.vue";
import debounce from "lodash.debounce";

const router = useRouter();
const route = useRoute();

const productsStore = useProductsStore();
productsStore.getFetchProducts(+route.query.page * 8 - 8 || 0);

const currentPage = ref(+route.query.page || 1);

function onClickHandler(page) {
  if (page === 1) {
    router.push("/");
  } else {
    router.push(`/?page=${page}`);
  }
  productsStore.getFetchProducts(page * 8 - 8);
}

const search = ref("");
watch(
  search,
  debounce(() => {
    if (search.value.length > 0) productsStore.getFetchProducts(0, search.value.trim(), 100);
    else productsStore.getFetchProducts(currentPage.value * 8 - 8, search.value.trim(), 12);
  }, 500)
);

</script>

<template>
  <section class="product">
    <div class="container">
      <form class="form">
        <div class="search">
          <SearchIcon />
          <input type="search" class="search" placeholder="Search..." v-model="search" />
        </div>
      </form>
      <Empty v-if="!productsStore.products.length">
        <ProductIcon :size="45" />
        <h3 class="basket__clean-title">This product not found</h3>
      </Empty>
      <div class="product__cards" v-else>
        <Product v-for="item in productsStore.products" :key="item.id" :product="item" />
      </div>
      <vue-awesome-paginate v-if="productsStore.products.length" class="product__paginate"
        :total-items="productsStore.total" :items-per-page="8" :max-pages-shown="3" v-model="currentPage"
        :on-click="onClickHandler" />
    </div>
  </section>
</template>
