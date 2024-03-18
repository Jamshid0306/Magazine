<script setup>
import Product from "@/components/product/Product.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { useProductsStore } from "@/stores/productsStore";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
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
    if (search.value.length > 0) productsStore.getFetchProducts(0, search.value, 100);
    else productsStore.getFetchProducts(currentPage.value * 8 - 8, search.value, 12);
  }, 500)
);

const test = ref("");

</script>

<template>
  <section class="product">
    <div class="container">
      <form class="form" @submit.prevent="getSortBy(test)">
        <!-- <a href="" download="./cv.docx">CV</a> -->
        <div class="search">
          <SearchIcon />
          <input type="search__input" class="search" placeholder="Search..." v-model="search" />
        </div>
      </form>
      <div class="product__cards">
        <Product v-for="item in productsStore.products" :key="item.id" :product="item" />
      </div>
      <vue-awesome-paginate class="product__paginate" :total-items="productsStore.total" :items-per-page="8"
        :max-pages-shown="3" v-model="currentPage" :on-click="onClickHandler" />
    </div>
  </section>
</template>
