import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

import { prefix } from "../const/prefix"

export const Layout: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/${prefix.jobs}/1`}>App Jobs Page 1</Link>
          </li>
          <li>
            <Link to={`/${prefix.jobs}/2`}>App Jobs Page 2</Link>
          </li>
          <li>
            <Link to={`/${prefix.network}/a`}>App Network Page A</Link>
          </li>
          <li>
            <Link to={`/${prefix.network}/b`}>App Network Page B</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
