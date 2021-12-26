import React, { useEffect, useRef, useState } from 'react'
import getCardPost from '../helpers/getCardPost'

const Card = () => {

    const [post,setPost] = useState({title:"post1"})
    const [loading, setLoading] = useState(true)
    const isMountedRef = useRef(true)
    
    const updatePost = () =>{
        getCardPost()
            .then((newPost) =>{
                if(isMountedRef.current)
                {
                    setPost(newPost)
                    setLoading(false)
                }
            })
    }

    useEffect(()=>{
        updatePost();
        return () =>{
            isMountedRef.current = false
        }
    },[])

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    )
}

export default Card
