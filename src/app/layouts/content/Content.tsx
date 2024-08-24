import React, { useState } from 'react'
import styles from './styles.module.scss'
import { TurnOnVideo } from '../../../shared/context'

type PropTypes = {
    children?: React.ReactElement,
  }
function Content(props: PropTypes) {
    const {children} = props
    const [on, setOn] = useState(false)
  return (
    <TurnOnVideo.Provider value={{on, setOn}}>
      <div className={styles.Content}>         
          {children}
      </div>
    </TurnOnVideo.Provider>
  )
}
export default Content