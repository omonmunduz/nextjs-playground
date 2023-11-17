'use server'
import { revalidatePath } from 'next/cache';
import {prisma} from './db';


export const newTodo = async (formData) => {
    const todo = await prisma.todo.create({
        data: {
            content: formData.get('content')
        }
    })
    revalidatePath('/posts')
}

const createURL = (window, path) => {
    return window + path
}

export const addNewPost = async (location, content) => {
    const res = await fetch(new Request(createURL(location,"/api/posts"), {
        method: 'POST',
        body: JSON.stringify({content}),
    }))

    if(res.ok) {
        const data = await res.json()
        console.log(data, 'heeeey')
        revalidatePath("/posts")
        return data.data
    }
}