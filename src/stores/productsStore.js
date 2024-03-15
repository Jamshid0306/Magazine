import apiProducts from "@/helpers/api/api";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("product", {
  state: () => ({
    products: null,
    total: null,
    categoryTitles: null,
    aboutProductId: null,
    basket: [],
    navCount: 0,
    allsum: 0,
    productAmount: 1,
    totalsum: 0,
  }),
  actions: {
    async getFetchProducts(skip = 0, search = "", limit = 8) {
      try {
        const res = await apiProducts.getProducts(skip, search, limit);
        this.products = res.products;
        this.total = res.total;
      } catch (error) {
        console.error(error);
      }
    },
    async getFetchCategoryTitles() {
      try {
        const res = await apiProducts.getCategoryTitles();
        this.categoryTitles = res;
      } catch (error) {
        console.error(error);
      }
    },
    async getAboutProducts(productId) {
      try {
        const res = await apiProducts.getAboutProducts(productId);
        this.aboutProductId = res;
      } catch (error) {
        console.error(error);
      }
    },
    addBasket(id) {
      const productId = this.products.find((item) => item.id == id);
      const productBasket = this.basket.find((item) => item.id == id);
      if (productId.id !== productBasket?.id) {
        this.basket.push({...productId, amount: 1});
        this.navCount++;
        this.allsum += Math.round(
          productId.price * (1 - productId.discountPercentage / 100)
        );
      }
    },
    incrementQuantity(id) {
      const productIndex = this.drawer.findIndex((item) => item.id === id);
      if (productIndex !== -1) {
        this.drawer[productIndex].quantity++;
      }
    },
    decrementQuantity(id) {
      const productIndex = this.drawer.findIndex((item) => item.id === id);
      if (productIndex !== -1 && this.drawer[productIndex].quantity > 1) {
        this.drawer[productIndex].quantity--;
      }
    },
    dellBasket(id) {
      const basketId = this.basket.find((item) => item.id == id);
      const productBasket = this.basket.findIndex((item) => item.id == id);
      this.basket.splice(productBasket, 1);
      this.navCount--;
      this.allsum -= Math.round(
        basketId.price * (1 - basketId.discountPercentage / 100)
      );
    },
    getSortedProducts(value) {
      if (value === "expensive") {
        this.products?.sort((a, b) => b.price - a.price);
      }
      if (value === "rating") {
        this.products?.sort((a, b) => b.rating - a.rating);
      } else if (value === "cheap") {
        this.products?.sort((a, b) => a.price - b.price);
      }
    },
    plusAmount(){
      this.productAmount++
    },
    minusAmount(){
      this.productAmount--
    },
  },
  persist: true,
});
