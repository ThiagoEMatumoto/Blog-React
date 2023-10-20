import React from "react";
import "./PostPage.css";
import styles from "./PostPage.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostHeader from "../../components/PostHeader/PostHeader";
import Markdown from "react-markdown";
import NotFound from "../NotFound/NotFound";
import PagPadrao from "../../components/PagPadrao/PagPadrao";
import PostCard from '../../components/PostComponent/PostCard'

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PagPadrao />}>
        <Route
          index
          element={
            <PostHeader
              fotoCapa={`../../../src/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post}/>
                  </li>
                ))}
              </ul>
            </PostHeader>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
