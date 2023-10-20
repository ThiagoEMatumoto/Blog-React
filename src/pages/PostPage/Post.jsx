import React from "react";
import "./PostPage.css";
import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import PostHeader from "../../components/PostHeader/PostHeader";
import Markdown from "react-markdown";

const Post = () => {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <h1>Post n encontrado</h1>;
  }

  return (
    <PostHeader
      fotoCapa={`../../../src/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <Markdown>{post.texto}</Markdown>
      </div>
    </PostHeader>
  );
};

export default Post;
