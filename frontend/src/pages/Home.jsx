import React from 'react'
import api from "../api/axios"
import { useState } from 'react'
import { useEffect } from 'react'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'

const Home = () => {

    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/api/posts/data");
                setPosts(response.data.postData)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) return <div className="text-emerald-600 text-7xl text-center mt-20">Loading...!</div>

    return (
        <main className='h-full w-full bg-gray-950 text-white pt-8 pl-2'>
            <div className='flex flex-wrap gap-4'>
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