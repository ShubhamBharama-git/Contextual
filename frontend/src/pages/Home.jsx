import React from 'react'
import api from "../api/axios"
import { useState } from 'react'
import { useEffect } from 'react'
import PostCard from '../components/PostCard'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/api/posts/data");
            console.log(response.data.postData);
            setPosts(response.data.postData)
        }
        fetchData();
    }, []) // api call runs only once when component mount for 1st time thats it 

    return (
        <main className='h-screen w-full bg-gray-950 text-white'>
            <h1 className='text-2xl font-bold mb-6'>All posts </h1>

            <div className='flex flex-wrap gap-4 mt-6'>
                {posts.map((post) => {
                return <div key={post._id}>
                    <PostCard post={post} />
                </div>
            })}
            </div>
        </main>
    )
}

export default Home