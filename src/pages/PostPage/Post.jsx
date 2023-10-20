import React from "react";
import styles from "./PostPage.module.css";
import { useParams } from "react-router-dom";

const Post = () => {
  const parametros = useParams();

  return <div className={styles}>Post {parametros.id}</div>;
};

export default Post;
