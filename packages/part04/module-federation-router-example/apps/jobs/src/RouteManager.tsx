import { FC, useEffect } from "react"
import { matchRoutes, Outlet, useLocation, useNavigate } from "react-router-dom"

import { routes } from "./router"

export const RouteManager: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onAppShellNavigate = (e: Event) => {
      const { detail } = e as CustomEvent<{ pathname: string }>
      if (
        detail.pathname !== pathname &&
        matchRoutes(routes, { pathname: detail.pathname })
      ) {
        navigate(detail.pathname)
      }
    }
    window.addEventListener("appshellnavigate", onAppShellNavigate)
    return () => {
      window.removeEventListener("appshellnavigate", onAppShellNavigate)
    }
  }, [pathname, navigate])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("appjobsnavigate", { detail: { pathname } })
    )
  }, [pathname])

  return <Outlet />
}
