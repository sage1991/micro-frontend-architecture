import { FC, HTMLAttributes } from "react"
import { useName } from "shared-library"

const STYLE_LOOKUP = {
  primary: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#409eff",
    borderColor: "#409eff",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  },
  warning: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#e6a23c",
    borderColor: "#e6a23c",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  }
}

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "warning"
}

export const Button: FC<Props> = ({
  variant = "primary",
  style,
  children,
  ...rest
}) => {
  const name = useName()
  return (
    <button {...rest} style={{ ...STYLE_LOOKUP[variant], ...style }}>
      {name} {children}
    </button>
  )
}
