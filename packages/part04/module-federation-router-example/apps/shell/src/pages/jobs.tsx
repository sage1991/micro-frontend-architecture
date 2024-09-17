import { inject } from "jobs/inject"
import { FC, useEffect, useRef } from "react"
import { matchRoutes, useLocation, useNavigate } from "react-router-dom"

import { prefix } from "../const/prefix"
import { routes } from "../router/routes"

const Jobs: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const cleanup = inject({
      routerType: "memory",
      rootElement: ref.current,
      initial: pathname.replace(`/${prefix.jobs}`, "") || "/"
    })
    return () => cleanup()
  }, [])

  useEffect(() => {
    if (!pathname.startsWith(`/${prefix.jobs}`)) {
      return
    }
    window.dispatchEvent(
      new CustomEvent("appshellnavigate", {
        detail: { pathname: pathname.replace(`/${prefix.jobs}`, "") || "/" }
      })
    )
  }, [pathname])

  useEffect(() => {
    const onJobsNavigate = (e: Event) => {
      const { detail } = e as CustomEvent<{ pathname: string }>
      const newPathname = `/${prefix.jobs}${detail.pathname}`
      if (
        newPathname !== pathname &&
        matchRoutes(routes, { pathname: newPathname })
      ) {
        navigate(newPathname)
      }
    }
    window.addEventListener("appjobsnavigate", onJobsNavigate)
    return () => {
      window.removeEventListener("appjobsnavigate", onJobsNavigate)
    }
  }, [pathname])

  return <div ref={ref} />
}

export default Jobs
