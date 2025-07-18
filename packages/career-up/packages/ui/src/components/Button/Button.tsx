import { ButtonHTMLAttributes, FC } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props> = (props) => <button {...props} />
