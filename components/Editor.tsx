'use client'
import { addNewPost } from '@/utils/actions';
import { useState } from "react";


const Editor = () => {
    const [post, setPost] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true);
        const updatedPosts = await addNewPost(window.location.origin, post)
        setLoading(false)
        setPost('')
    }


  return (
        <div>
            <label className='text-2'>New post:
                <input className='p-2' value={post} type='text' name="content" onChange={e => setPost(e.target.value)}/>
                <button type='submit' className='border-2 border-black p-2' onClick={handleSubmit}>Post</button>
            </label>
        </div>
  )
}

export default Editor