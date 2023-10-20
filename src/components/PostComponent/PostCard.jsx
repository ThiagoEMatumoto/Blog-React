import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";
import Botao from "../Botao/Botao";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`../../../src/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <Botao>
          Ler
        </Botao>
      </div>
    </Link>
  );
};

export default PostCard;
