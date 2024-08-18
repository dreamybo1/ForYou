import React from 'react'
import styles from './styles.module.scss'
import Logo from '../../../shared/assets/marshall-logo.svg?react'
import Search from '../../../shared/assets/search-svgrepo-com.svg?react'
import Button from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'

function LeftSide() {
  const onClick = () => {
    navigator.vibrate(1)
    document.location.href = 'https://t.me/dreamybo1'
  }

  return (
    <div className={styles.LeftSide}>
      <div className={styles.TitleDiv}>
        <span className={`${styles.TextMarshall} `}>
          Marshall
        </span>
        <span className={`${styles.TextMajor} `}>
          Major IV
        </span>
      </div>
      <span className={`${styles.Text} `}>
        Характеристики
      </span>
      <span className={`${styles.Text} `}>
        Описание
      </span>
      <span className={`${styles.Text} `}>
        Отзывы
      </span>
      <span className={`${styles.Text} `}>
        Наличие в магазинах
      </span>
      <span className={`${styles.Text} `}>
        Похожие товары
      </span>
      <Button 
        BGColor='#026257' 
        color='white'
        width='300px'
        height='70px'
        fs='25'
        className={styles.Button}
      >
        Затестить
      </Button>
      <Button 
        onClick={onClick}
        BGColor='#d9d9d9' 
        color='black'
        width='250px'
        height='60px'
        fs='25'
        className={styles.Button}
      >
        Написать отзыв
      </Button>
    </div>
  )
}

export default LeftSide