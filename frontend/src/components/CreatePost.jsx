import React, { useState } from 'react'
import api from "../api/axios"
const CreatePost = () => {
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleImage = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setPreview(URL.createObjectURL(file))  // shows preview before upload
    }

    const uploadPost = async () => {  // ← no need to pass image as param, just use state directly
        const formData = new FormData()
        formData.append("image", image)

        try {
            await api.post("/api/posts", formData)
            alert("Post created successfully!")
        } catch (err) {
            alert("Failed to create post.")
        }
    }

    return (
        <div className='min-h-screen w-full bg-gray-950 text-white flex items-center justify-center'>
            <div className='w-full max-w-md bg-gray-800 rounded-xl p-6'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Create Post</h1>

                {/* Image Preview */}
                {preview ? (
                    <img
                        src={preview}
                        className='w-full h-64 object-cover rounded-lg mb-4'
                    />
                ) : (
                    <div className='w-full h-64 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-400'>
                        No image selected
                    </div>
                )}

                {/* File Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className='w-full text-sm text-gray-400 mb-4
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:bg-gray-600 file:text-white
                    hover:file:bg-gray-500 cursor-pointer'
                />

                {/* Submit */}
                <button
                    className='w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
                    onClick={uploadPost}
                >
                    Create Post
                </button>
            </div>
        </div>
    )
}

export default CreatePost