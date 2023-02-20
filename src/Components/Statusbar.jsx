import React from 'react'
import Styles from '../Styles/Statusbar.module.css'
import Clock from './Clock'

function Statusbar() {
  return (
    <div className={Styles.statusbar}>
        <Clock/>
    </div>
  )
}

export default Statusbar