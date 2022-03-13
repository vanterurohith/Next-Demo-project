import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Accordion from './accordion'
// import dotenv from 'dotenv'

// dotenv.config()
function  Data() {

    const [posts, setPosts] = useState([])
    const url = 'http://localhost:8080/users'
   useEffect(() =>{
        axios.get(url)
        .then(res =>{
            setPosts(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])

  return(
    <Accordion posts ={posts}/>
  )
}


export default Data
