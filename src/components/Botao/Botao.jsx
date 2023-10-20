import React from 'react'
import styles from './Botao.module.css'

const Botao = ({children, larger}) => {
  return (
    <button className={`${styles.botao} ${styles[larger]}`}>{children}</button>
  )
}

export default Botao