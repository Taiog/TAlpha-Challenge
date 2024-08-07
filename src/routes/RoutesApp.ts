export const routesApp = {
    inicio: '/',
    cadastro: '/register',
    list: '/products',
    create: '/products/create',
    update: (id: string) => `/products/update/${id}`
}