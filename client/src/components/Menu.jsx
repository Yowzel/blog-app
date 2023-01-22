import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Menu = ({cat}) => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
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

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className='post' key = {post.id}>
                <img src={`../upload/${post?.img}`} alt=""/>
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu