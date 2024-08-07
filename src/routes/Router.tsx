import { createBrowserRouter, RouteObject } from "react-router-dom"
import { routesApp } from "./RoutesApp"
import Login from "../pages/auth/Login"
import { CreateProduct } from "../pages/app/CreateProduct"
import { ListProducts } from "../pages/app/ListProducts"
import { LayoutUi } from "../components/layout/LayoutUi"
import { UpdateProduct } from "../pages/app/UpdateProduct"
import { Register } from "../pages/auth/Register"

const mountRoutes: RouteObject[] = [
    {
        path: routesApp.inicio,
        element: <Login />,
    },
    {
        path: routesApp.cadastro,
        element: <Register />,
    },
    {
        element: <LayoutUi />,
        children: [{
            path: routesApp.list,
            element: <ListProducts />,
        },
        {
            path: routesApp.create,
            element: <CreateProduct />,
        },
        {
            path: routesApp.update(':id'),
            element: <UpdateProduct />,
        },
        ],
    },
]

export const configRouter = createBrowserRouter(mountRoutes)