import React from 'react'
import styles from './Inicio.module.css'
import posts from '../../json/posts.json'
import Post from '../../components/PostComponent/Post'

const Inicio = () => {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
  )
}

export default Inicio