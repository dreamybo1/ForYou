import React from 'react'
import styles from './styles.module.scss'
import Pic from "../../../shared/assets/tanya.jpg"
import VK from '../../../shared/assets/vk-with-circle.svg?react' 
import TG from '../../../shared/assets/telegram.svg?react' 
import { calculateAge } from '../../../shared/helpers/helpers'

function ProfileForm() {

  return (
    <div className={styles.ProfileForm}>
      <div className={styles.ProfileIcon}>
        <img className={styles.Image} src={Pic} alt="" />
      </div>
      <div className={styles.ProfileInfo}>
        <div><span>Имя: </span><span className='font-marshall'>Tatyana</span></div>
        <div><span>Возраст: </span><span className=''>{calculateAge(new Date(2004, 0, 25))}</span></div>
        <div className={styles.SocialDiv}>
          <span>Соц. сети: </span>
          <div className={styles.Social}>
            <a href="https://vk.com/taattyana">
              <VK className={styles.Icon}/>
            </a>
            <a href="https://t.me/taattyana1">
              <TG className={styles.Icon}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm