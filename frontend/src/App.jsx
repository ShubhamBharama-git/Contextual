import { Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Navebar from "./components/Navebar"
import CreatePost from "./components/CreatePost"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <div className='h-full w-full'>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App