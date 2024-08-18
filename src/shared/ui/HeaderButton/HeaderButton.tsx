import React, { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
type PropTypes = {
    className?: string
    children?: React.ReactElement | any,
  } & ButtonHTMLAttributes<HTMLButtonElement>
function HeaderButton(props: PropTypes) {
    const {children, className, ...other} = props
  return (
    <button  className={`${styles.Button} ${className}`} {...other}>
        {children}
    </button>
  )
}

export default HeaderButton