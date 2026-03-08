const PostCard = ({ post }) => {
    return (
        <div className='bg-gray-800 w-90 rounded-lg overflow-hidden shadow-md mb-6'>
            <div className='relative h-48 w-full overflow-hidden'>
                <img
                    className='w-full h-full object-cover'
                    src={post.image}
                    alt={post.caption}
                />
            </div>
            <div className='flex-1 p-4 flex flex-col justify-between'>
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                        <div className='w-8 h-8 bg-blue-500 rounded-full overflow-hidden'></div>
                        <h2 className='text-sm font-semibold text-white'>
                            {post.user.username}
                        </h2>
                    </div>
                    <p className='text-sm text-gray-300 line-clamp-3'>
                        {post.caption}
                    </p>
                </div>
                <div className='flex gap-3 mt-3 text-gray-400 text-sm'>
                    <button className='hover:text-red-500 transition'>❤️ Like</button>
                    <button className='hover:text-blue-500 transition'>💬 Comment</button>
                </div>
            </div>
        </div>
    )
}
export default PostCard