import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/login" />  // not logged in → redirect
    }

    return children  // logged in → show the page
}

export default ProtectedRoute