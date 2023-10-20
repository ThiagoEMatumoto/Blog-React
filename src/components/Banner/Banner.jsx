import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/thiagoPerfil.svg'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresetacao}>
        <h1 className={styles.titulo}>Opa! Tudo bem?</h1>
        <p className={styles.paragrafo}>
        Boas vindas ao meu espaço pessoal! Eu sou Thiago Eiji Matumoto, estudante de Engenharia de Software. Aqui compartilho vários conhecimentos e a minha tragetório como desenvolvedor.
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="" />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto de Thiago Eiji Matumoto" />
      </div>
    </div>
  )
}

export default Banner