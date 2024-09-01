import { FC, HTMLAttributes } from "react"

import styles from "./Button.module.css"

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} className={styles.root} />
)
