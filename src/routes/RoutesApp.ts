export const routesApp = {
    inicio: '/',
    cadastro: '/register',
    listar: '/products',
    criar: '/products/create',
    update: (id: string) => `/products/update/${id}`
}