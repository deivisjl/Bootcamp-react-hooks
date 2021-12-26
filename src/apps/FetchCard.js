import React, { useCallback, useEffect, useState } from 'react'
import getPost from './helpers/getPost';
import getUser from './helpers/getUser';

/* const initialUser = {
    name:"Luis",
    email:"luis@gmail.com"
}

const initialPost = [
    {id: 1, title: "Post1"},
    {id: 2, title: "Post2"}
] */
const FetchCard = () => {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    
    const updateUser = () =>{
        getUser()
            .then((newUser)=>{
                setUser(newUser)
            })
    }

    const updatePost = useCallback(() =>{
        getPost(user.id)
            .then((newPost)=>{
                setPosts(newPost)
            })
    },[user.id])

    useEffect(()=>{
        updateUser();
    },[]);

    useEffect(()=>{
        if(user?.id){
            updatePost()
        }
    },[user]);

    return (
        <div>
            <button onClick={updateUser}>
                Another user
            </button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <br/>
            <h2>Posts - user: {user.id}</h2>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>{ post.title }</li>
                ))}
            </ul>

        </div>
    )
}

export default FetchCard
