export const productRoutes = {
    createProduct: '/products/create-product',
    getAllProducts: '/products/get-all-products',
    getOneProduct: (id: string) => `/products/get-one-product/${id}`,
    updateProduct: (id: string) => `/products/update-product/${id}`,
    deleteProduct: (id: string) =>  `/products/delete-product/${id}`
  }