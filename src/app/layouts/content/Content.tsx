import React from 'react'
import styles from './styles.module.scss'

type PropTypes = {
    children?: React.ReactElement,
  }
function Content(props: PropTypes) {
    const {children} = props
  return (
    <div className={styles.Content}>         
        {children}
    </div>
  )
}
export default Content