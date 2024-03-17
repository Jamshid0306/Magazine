import apiProducts from "@/helpers/api/api";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    category: null,
  }),
  actions: {
    async getProductByCategory(category) {
      try {
        const res = await apiProducts.getProductsByCategory(category)
        this.category = res.products
      } catch (error) {
        console.error(error);
      }
    }
  },
});