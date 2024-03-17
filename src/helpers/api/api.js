import axiosClient from "./axiosClient"

const apiProducts = {
    getProducts(skip, search, limit) {
        const url = `products/search?q=${search}&skip=${skip}&limit=${limit}`
        return axiosClient.get(url)
    },
    getCategoryTitles() {
        const url = `products/categories`
        return axiosClient.get(url)
    },
    getAboutProducts(productId){
        const url = `products/` + productId 
        return axiosClient.get(url)
    },
    getProductsByCategory(category){
        const url = `products/category/${category}`
        return axiosClient.get(url)
    }
    
}

export default apiProducts