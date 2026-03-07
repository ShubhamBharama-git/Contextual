import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import api from "../api/axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post("/api/auth/login", {
                username,
                password
            })
            console.log(response.data);
            navigate("/");

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-screen w-full bg-black text-gray-200 flex items-center justify-center'>
            <div className='w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg'>

                <form action="" className='flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold mb-6 text-center'>Login</h2>
                    <div className='bg-gray-600 p-5 rounded mb-6'>
                        <label htmlFor="username" className='m-4 text-gray-200 text-xl'>
                            Username
                        </label>
                        <input
                            value={username}
                            type="text" id='username'
                            placeholder='Enter username ...!'
                            className="p-2"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </div>
                    <div className='bg-gray-600 p-5 rounded mb-6'>
                        <label htmlFor="password" className='m-4 text-gray-200 text-xl'>
                            Password
                        </label>
                        <input
                            value={password}
                            type="password" id='password'
                            placeholder='Enter password ...!'
                            className="p-2"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                    <button
                        className='px-4 py-2 rounded bg-gray-200 text-black ml-35 mb-6'
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                    <p>Dont have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login