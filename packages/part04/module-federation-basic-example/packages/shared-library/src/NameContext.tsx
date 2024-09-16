import { createContext, FC, PropsWithChildren, useContext } from "react"

const NameContext = createContext<string | null>(null)

interface Props extends PropsWithChildren {
  name: string
}

export const NameProvider: FC<Props> = ({ name, children }) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>
}

export const useName = () => useContext(NameContext)
