import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate
} from "react-router-dom"

import { RouteManager } from "./RouteManager"

type RouterOptions =
  | Parameters<typeof createBrowserRouter>[1]
  | Parameters<typeof createMemoryRouter>[1]

type RemixRouter =
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter>

const ROUTER_FACTORY_LOOKUP: Record<
  "browser" | "memory",
  typeof createBrowserRouter
> = {
  browser: createBrowserRouter,
  memory: createMemoryRouter
}

interface Config {
  type: "browser" | "memory"
  options?: RouterOptions
}

export const router = ({ type, options }: Config): RemixRouter => {
  const factory = ROUTER_FACTORY_LOOKUP[type]
  return factory(routes, options)
}

export const routes = [
  {
    path: "/",
    element: <RouteManager />,
    children: [
      {
        index: true,
        element: <Navigate to="/1" replace />
      },
      {
        path: "/1",
        element: <div>App Jobs Page 1</div>
      },
      {
        path: "/2",
        element: <div>App Jobs Page 2</div>
      }
    ]
  }
]
