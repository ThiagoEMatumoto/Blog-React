import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post.id);
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`./posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
    </Link>
  );
};

export default PostCard;