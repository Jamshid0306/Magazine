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
    addBasket(product) {
      const idbasket = this.basket.find((item) => item.id == product.id);
      if (idbasket?.id !== product.id) {
        this.basket.push({
          ...product,
          amount: 1,
          get totalSum() {
            return this.price * this.amount;
          }
        })
      } else {
        this.basket.forEach((item) => {
          if (item.id == product.id) {
            item.amount++
          }
        })
      }
    },
    
    
    
    
    
    
    
    
    dellBasket(id, totalSum, amount) {
      const basketId = this.basket.find((item) => item.id == id);
      const productBasket = this.basket.findIndex((item) => item.id == id);
      console.log(productBasket);
      if( basketId.id == id ){
        this.basket.splice(productBasket, 1)
      }
      this.navCount -= amount
      this.allsum -= totalSum
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
    plusAmount() {
      // const productIndex = this.basket.find((item) => item.id === id);
      // if (productIndex.id == id) {
      //   productIndex.amount++
      //   this.allsum = this.allsum + (Math.round(productIndex.price * (1 - productIndex.discountPercentage / 100)))
      // }
      let num = 0;
      this.basket.forEach((product) => {
        this.allsum = num += product.totalSum
      })
    },
    minusAmount() {
      let num = 0;
      this.basket.forEach((product) => {
        this.allsum = num += product.totalSum
      })
    },
  },
  persist: true,
});
