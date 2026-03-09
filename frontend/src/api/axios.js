import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000", // backend URL
    withCredentials: true // to browser credentials
})

export default api