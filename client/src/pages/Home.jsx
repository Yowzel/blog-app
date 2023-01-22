import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios"

const Home = () => {

  const [posts,setPosts] = useState([])

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  },[cat])

  /*
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum, or lipsum.",
      desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      img: "https://i.pinimg.com/564x/0b/a9/f3/0ba9f341a27e00326777ed45d9825339.jpg"
    },
    {
      id: 2,
      title: "Lorem ipsum, or lipsum as",
      desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      img: "https://i.pinimg.com/564x/0b/a9/f3/0ba9f341a27e00326777ed45d9825339.jpg"
    },
    {
      id: 3,
      title: "Lorem ipsum, or lipsum as ",
      desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      img:"https://i.pinimg.com/564x/0b/a9/f3/0ba9f341a27e00326777ed45d9825339.jpg"
    },
    {
      id: 4,
      title: "Lorem ipsum, or lipsum as it ",
      desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      img: "https://i.pinimg.com/564x/0b/a9/f3/0ba9f341a27e00326777ed45d9825339.jpg"
    },
    {
      id: 5,
      title: "Lorem ipsum, or lipsum as it is",
      desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
      img: "https://i.pinimg.com/564x/0b/a9/f3/0ba9f341a27e00326777ed45d9825339.jpg"
    },
  ]
  */

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className='home'>
        <div className='posts'>
          {
            posts.map(post => (

              <div className='post' key = {post.id}>
                <div className='img'> 
                  <img src= {`../upload/${post.img}`} alt =""/>
                </div>

                <div className='content'>

                  <Link className= "link" to ={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>

                  <p>{getText(post.desc)}</p>
                  <button>Read more</button>
                  
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Home