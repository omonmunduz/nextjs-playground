'use client'
import { addNewPost } from '@/app/_utils/actions';
import { useState } from "react";
import styles from './editor.module.scss';
import classNames from 'classnames';


const Editor = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true);
        const updatedPosts = await addNewPost(window.location.origin, {title, subtitle, content})
        setLoading(false)
        setTitle('')
        setSubtitle('')
        setContent('')
    }

    const btnClassName = classNames('bg-gray-900', {
        [styles.submit]: true,
    })


  return (
        <div className={styles.editor}>
            <input className={styles.postsInput} placeholder='title...' value={title} type='text' name="title" onChange={e => setTitle(e.target.value)}/>
            <input className={styles.postsInput} placeholder='subtitle...' value={subtitle} type='text' name="subtitle" onChange={e => setSubtitle(e.target.value)}/>
            <input className={styles.postsInput} placeholder='content...' value={content} type='text' name="content" onChange={e => setContent(e.target.value)}/>
            <button type='submit' className={btnClassName} onClick={handleSubmit}>Post</button>
        </div>
  )
}

export default Editor