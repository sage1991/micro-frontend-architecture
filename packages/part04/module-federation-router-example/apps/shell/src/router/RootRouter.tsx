import { FC } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { routes } from "./routes"

const router = createBrowserRouter(routes)

export const RootRouter: FC = () => <RouterProvider router={router} />
