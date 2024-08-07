import { createBrowserRouter, RouteObject } from "react-router-dom"
import { routesApp } from "./RoutesApp"
import Login from "../pages/auth/Login"
import { Cadastro } from "../pages/auth/Cadastro"
import { ListarProdutos } from "../pages/app/ListarProdutos"
import { LayoutUi } from "../components/layout/LayoutUi"
import { CriarProduto } from "../pages/app/CriarProduto"
import { UpdateProduct } from "../pages/app/UpdateProduct"

const mountRoutes: RouteObject[] = [
    {
        path: routesApp.inicio,
        element: <Login />,
    },
    {
        path: routesApp.cadastro,
        element: <Cadastro />,
    },
    {
        element: <LayoutUi />,
        children: [{
            path: routesApp.listar,
            element: <ListarProdutos />,
        },
        {
            path: routesApp.criar,
            element: <CriarProduto />,
        },
        {
            path: routesApp.update(':id'),
            element: <UpdateProduct />,
        },
        ],
    },
]

export const configRouter = createBrowserRouter(mountRoutes)