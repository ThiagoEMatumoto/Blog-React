import React from "react";
import styles from "./NotFound.module.css";
import erro404 from "../../assets/erro_404.png";
import Botao from "../../components/Botao/Botao";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navergar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Opa! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.botaoContainer} onClick={() => navergar(-1)}>

          <Botao larger='lg'>Voltar</Botao>
        </div>
        <img src={erro404} alt="Cachorro" />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;
