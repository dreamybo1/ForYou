import { useContext } from 'react'
import styles from './styles.module.scss'
import Button from '../../../shared/ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { TurnOnVideo } from '../../../shared/context'

function LeftSide() {
  const onClick = () => {
    navigator.vibrate(1)
    document.location.href = 'https://t.me/dreamybo1'
  }
  const {on} = useContext(TurnOnVideo)

const navigate = useNavigate()

  return (
    <div className={styles.LeftSide}>
      <div className={`${styles.container} px-20 h-full flex flex-col items-start justify-center gap-[10px]`}>
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
        <Link to={"/info"}>
          <span className={`${styles.Text} `}>
            Описание
          </span>
        </Link>
        <span className={`${styles.Text} `}>
          Отзывы
        </span>
        <span className={`${styles.Text} `}>
          Наличие в магазинах
        </span>
        <span className={`${styles.Text} `}>
          Похожие товары
        </span>
        <div className='w-full flex flex-col items-center gap-[15px] justify-center'>
          <Button
            BGColor={'#026257'}
            color='white'
            width='300px'
            height='70px'
            fs='25'
            disabled={!on}
            onClick={()=> {navigate('/video')}}
            className={styles.Button}
          >
            ???
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
      </div>
    </div>
  )
}

export default LeftSide