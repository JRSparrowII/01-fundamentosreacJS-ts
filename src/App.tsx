import { Header } from "./components/Header"; 
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from './components/App.module.css';
import './global.css';

const posts = [
  {
      id: 1,
      author: {
          avatarUrl:"https://github.com/JRSparrowII.png",
          name: 'Carlos Henrique',
          role: "Web Developer",
      },
      content: [
          { type: 'paragraph', content: 'Ola pessoal',},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Github',},
          // { type: 'link', content: 'nemesio.veloso/designer',},   
         
      ],
      publishedAt:new Date('2022-07-07 20:00:00'),

  },
  {
      id: 2,
      author: {
          avatarUrl:"https://github.com/priscocleyton.png",
          name: 'Prisco Cleyton',
          role: "Mobile Developer",
      },
      content: [
          { type: 'paragraph', content: 'Ola pessoal',},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Github',},
          // { type: 'link', content: 'nemesio.veloso/designer',},   
         
      ],
      publishedAt:new Date('2022-07-09 20:00:00'),
      
  }
]

export function App() {  
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
          return (
            <Post    
              key={post.id}      
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
        </main>        
      </div>
    </div>
    
  )
}


