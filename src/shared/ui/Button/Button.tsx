import React from 'react'
import styles from './styles.module.scss'
type PropTypes = {
    fs?:string
    width?:string
    height?:string
    BGColor?:string
    color?:string
    className?:string
    children?: React.ReactElement | any,
    
} &  React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: PropTypes) {
    const {children, BGColor, color, width, height, className, fs, ...other} = props
  return (
    <button
      {...other}
      style={{backgroundColor: BGColor, width, height, color: color, fontSize: fs+"px"}}    
      className={`${styles.Button} ${className && className}`}
    >
        {children}
    </button>
  )
}
    
export default Button