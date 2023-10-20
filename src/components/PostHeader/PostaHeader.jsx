import React from 'react'
import styles from './PostModelo.module.css';

const PostaHeader = () => {
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.FotoCapa} style={{backgroundImage: `url(${FotoCapa})`}} />
      <h2 className={styles.Título}>{título}</h2>
      <div className={styles.PostContainer}>{children}</div>
    </article>
  )
}

export default PostaHeader