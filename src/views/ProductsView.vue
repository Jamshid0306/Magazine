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
    productsStore.getFetchProducts(currentPage.value * 8 - 8, search.value);
  }, 500)
);

const test = ref("");

const getSortBy = (value) => {
  productsStore.getSortedProducts(value);
};

</script>

<template>
  <section class="product">
    <div class="container">
      <form class="form" @submit.prevent="getSortBy(test)">
        <div class="select">
          <select class="selector" v-model="test">
            <option value="" disabled>sort by ...</option>
            <option value="expensive">sort by price (expensive)</option>
            <option value="cheap">sort by price (cheap)</option>
            <option value="rating">sort by rating</option>
          </select>
          <button class="select__btn">Sort</button>
        </div>
        <div class="search">
          <SearchIcon />
          <input type="search__input" class="search" placeholder="Search..." v-model="search" />
        </div>
      </form>
      <div class="product__cards">
        <Product v-for="item in productsStore.products" :key="item.id" :product="item" />
      </div>
      <vue-awesome-paginate class="product__paginate" :total-items="productsStore.total" :items-per-page="8"
        :max-pages-shown="6" v-model="currentPage" :on-click="onClickHandler" />
    </div>
  </section>
</template>
