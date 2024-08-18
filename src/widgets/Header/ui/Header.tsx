import React from 'react'
import styles from './styles.module.scss'
import Logo from '../../../shared/assets/marshall-logo.svg?react'
import Search from '../../../shared/assets/search-svgrepo-com.svg?react'
import HeaderButton from '../../../shared/ui/HeaderButton/HeaderButton'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {

  const nav = useNavigate()
  const location = useLocation();
  const path = location.pathname
  const isProfile = path === "/profile"
  console.log(path);
  
  return (
    <div className={styles.Header}>
      <Logo onClick={()=>{nav('/')}} className={styles.MainLogo} />
      <HeaderButton>
        <span>Каталог</span>
      </HeaderButton>
      <HeaderButton>
        <span>Акции</span>
      </HeaderButton>
      <HeaderButton>
        <span>Поиск</span>
      </HeaderButton>
      <div className={styles.LastButtons}>
        <Search className={styles.Logo} />
        {!isProfile && <HeaderButton onClick={()=>{nav('profile')}}>
          <span>Личный кабинет</span>
        </HeaderButton>}
      </div>
    </div>
  )
}

export default Header