import { lazy, Suspense } from "react"
import { Navigate, RouteObject } from "react-router-dom"

import { prefix } from "../const/prefix"
import { Layout } from "../pages/layout"

const Jobs = lazy(() => import("../pages/jobs"))
const Network = lazy(() => import("../pages/network"))

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={`/${prefix.jobs}`} />
      },
      {
        path: `/${prefix.jobs}/*`,
        element: (
          <Suspense fallback="loading...">
            <Jobs />
          </Suspense>
        )
      },
      {
        path: `/${prefix.network}/*`,
        element: (
          <Suspense fallback="loading...">
            <Network />
          </Suspense>
        )
      }
    ]
  }
]
