import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
    return (
        <div>
            <nav className='h-16 w-full bg-gray-800 text-gray-200 flex items-center justify-between px-4'>
                <h1 className='text-2xl font-bold'><Link to="/">Contextual</Link></h1>
                <div>
                    <Link to="/login" className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700'> Login</Link>
                    <Link to="/register" className='px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 ml-4'>Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navebar