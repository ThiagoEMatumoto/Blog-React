import React from "react";
import styles from "./SobreMim.module.css";
import FotoCapa from "../../assets/sobre_mim_capa.png";
import PostHeader from "../../components/PostHeader/PostHeader";
import SobreMimFoto from "../../assets/foto-sobreMim.jpeg";

const SobreMim = () => {
  return (
    <div>
      <PostHeader titulo="Sobre Mim" fotoCapa={FotoCapa}>
        <h3 className={styles.subtitulo}>Aoba, eu sou o Thiago!</h3>
        <img
          src={SobreMimFoto}
          alt="Foto de Thiago sentado em um sofa"
          className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
          Opa, tudo bem? Sou graduando em Engenharia de Software e minha
          história com a programação começou no início de 2022 com um computador
          antiguinho e uma dúvida: <strong>"o que eu quero ser quando eu crescer?"</strong>.
        </p>{" "}
        <br />
        <p className={styles.paragrafo}>
          Entre diversas áreas, influenciado por várias pessoas, não encontrava
          o que eu realmente gostava de fazer, mas por um momento eu pensei em
          algo pudesse impactar positivamente outras pessoas e que eu estivesse
          familiarizado, lógica!
        </p>{" "}
        <br />
        <p className={styles.paragrafo}>
          Então nesse mesmo computador e com um objetivo em mente encontrei a
          programação e uma paixão a primeira vista, resolver problemas e a
          possibilidade de estar em contato com diversas áreas me encantou.
        </p>{" "}
        <br />
        <p className={styles.paragrafo}>
          Hoje, cursando Engenharia de Software na FIAP, encontro-me estudando e
          praticando aquilo que eu vi em 2022 e me encantei, tendo contato com
          JavaScript, TypeScript, React e Python, o próximo objetivo e agora
          impactar outras pessoas com a tecnologia da mesma maneira que a
          tecnologia me impactou.
        </p>{" "}
        <br />
        <p className={styles.paragrafo}>
          Hoje sou feliz com o que eu faço e com a possibilidade de ajudar
          outras pessoas com o meu trabalho e contribuir positivamente com uma
          sociedade e mundo melhor.
        </p>{" "}
        <br />
      </PostHeader>
    </div>
  );
};

export default SobreMim;
