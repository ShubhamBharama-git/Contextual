import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import api from "../api/axios"

const Navebar = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const logOutHandler = async () => {
        await api.get("/api/auth/logout")
        logout()
    }

    return (
        <div>
            <nav className='h-16 w-full bg-gray-800 text-gray-200 flex items-center justify-between px-4'>
                <h1 className='text-2xl font-bold'><Link to="/">Contextual</Link></h1>

                <Link
                    to="/create-post"
                    className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700'
                >Post</Link>

                {user ? (
                    <div>
                        <span className='text-2xl mr-4' >Hi, {user.username} 👋</span>
                        <button
                            onClick={logOutHandler}
                            className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700' >Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700'> Login</Link>
                        <Link to="/register" className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 ml-4'>Register</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navebar