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

export const addNewPost = async (location:String, {title, subtitle, content}) => {
    console.log(title, 'title')
    console.log(subtitle, 'subtitle')
    console.log(content, 'content')
    const res = await fetch(new Request(createURL(location,"/api/posts"), {
        method: 'POST',
        body: JSON.stringify({title, subtitle, content}),
    }))
    revalidatePath('/posts')
    if(!res.ok) {
        console.log(title, 'looooooooooooooooooooo')
    }
    if(res.ok) {
        console.log('lllllllllllllllllllllllllll')
        const data = await res.json()
        return data.data
    }
}

export const getLocation = async (location) => {
  const res = await fetch(createURL(location, "/api/geolocation"))
  revalidatePath('/explore')
  /*if(!res.ok) {
    console.log(res, 'nope')
  }*/

    if(res.ok) {
        const data = await res.json()
        console.log(data, 'datatatatattaa')
        return data
        }
}