import React from 'react'
import styles from './styles.module.scss'
import Pic from "../../../shared/assets/photo_2024-08-18_13-22-02.webp"

function RightSide() {

  return (
    <div className={styles.RightSide}>
      <img className={styles.Image} src={Pic} alt="" />
    </div>
  )
}

export default RightSide