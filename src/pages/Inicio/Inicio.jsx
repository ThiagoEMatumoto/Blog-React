import React from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './Inicio.module.css'
import posts from '../../json/posts.json'
import Post from '../../components/PostComponent/Post'

const Inicio = () => {
  return (
    <main>
      <Banner/>

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Inicio